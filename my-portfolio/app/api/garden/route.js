import { NextResponse } from 'next/server'

const KEY = 'ak-garden-v1'
const MAX_NAME = 14
const MAX_ENTRIES = 5000

// Support both Vercel's classic KV naming (KV_REST_API_*) and Upstash's
// newer marketplace naming (UPSTASH_REDIS_REST_*).
function credentials() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url, token } : null
}

async function redis(command) {
  const c = credentials()
  if (!c) throw new Error('KV not configured')
  const res = await fetch(c.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${c.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`upstash ${res.status}`)
  const data = await res.json()
  return data.result
}

async function loadGarden() {
  const raw = await redis(['GET', KEY])
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function saveGarden(list) {
  await redis(['SET', KEY, JSON.stringify(list)])
}

export async function GET(req) {
  const url = new URL(req.url)
  if (url.searchParams.get('debug') === '1') {
    const seen = Object.keys(process.env).filter(k =>
      /KV|REDIS|UPSTASH|STORAGE/i.test(k)
    )
    return NextResponse.json({ seen })
  }
  if (!credentials()) {
    return NextResponse.json({ garden: [], warning: 'KV not configured' }, { status: 200 })
  }
  try {
    const garden = await loadGarden()
    return NextResponse.json({ garden })
  } catch (e) {
    return NextResponse.json({ garden: [], error: String(e?.message || e) }, { status: 500 })
  }
}

export async function POST(req) {
  if (!credentials()) {
    return NextResponse.json({ error: 'KV not configured' }, { status: 503 })
  }
  try {
    const body = await req.json()
    const name = String(body?.name || '').trim().slice(0, MAX_NAME)
    const grid = body?.grid
    if (!name) return NextResponse.json({ error: 'name required' }, { status: 400 })
    if (!Array.isArray(grid) || grid.length < 1 || grid.length > 2048) {
      return NextResponse.json({ error: 'invalid grid' }, { status: 400 })
    }
    const cleanGrid = grid.map(v => (v === null || v === undefined ? null : Number(v)))
    const current = await loadGarden()
    if (current.length >= MAX_ENTRIES) {
      return NextResponse.json({ error: 'garden full' }, { status: 429 })
    }
    const next = current.concat([{ name, grid: cleanGrid, at: Date.now() }])
    await saveGarden(next)
    return NextResponse.json({ garden: next })
  } catch (e) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 })
  }
}
