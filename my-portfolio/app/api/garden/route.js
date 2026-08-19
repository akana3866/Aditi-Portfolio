import { NextResponse } from 'next/server'
import { createClient } from 'redis'

export const runtime = 'nodejs'

const KEY = 'ak-garden-v1'
const MAX_NAME = 14
const MAX_ENTRIES = 5000

let clientPromise = null
async function getClient() {
  const url = process.env.REDIS_URL
  if (!url) return null
  if (!clientPromise) {
    clientPromise = (async () => {
      const c = createClient({ url })
      c.on('error', () => {
        clientPromise = null
      })
      await c.connect()
      return c
    })().catch(err => {
      clientPromise = null
      throw err
    })
  }
  return clientPromise
}

async function loadGarden(client) {
  const raw = await client.get(KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function saveGarden(client, list) {
  await client.set(KEY, JSON.stringify(list))
}

export async function GET() {
  const client = await getClient().catch(() => null)
  if (!client) {
    return NextResponse.json({ garden: [], warning: 'KV not configured' }, { status: 200 })
  }
  try {
    const garden = await loadGarden(client)
    return NextResponse.json({ garden })
  } catch (e) {
    return NextResponse.json({ garden: [], error: String(e?.message || e) }, { status: 500 })
  }
}

export async function POST(req) {
  const client = await getClient().catch(() => null)
  if (!client) {
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
    const current = await loadGarden(client)
    if (current.length >= MAX_ENTRIES) {
      return NextResponse.json({ error: 'garden full' }, { status: 429 })
    }
    const next = current.concat([{ name, grid: cleanGrid, at: Date.now() }])
    await saveGarden(client, next)
    return NextResponse.json({ garden: next })
  } catch (e) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 })
  }
}

export async function DELETE(req) {
  const url = new URL(req.url)
  if (url.searchParams.get('token') !== 'wipe-kv-smoke-20260819') {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }
  const client = await getClient().catch(() => null)
  if (!client) {
    return NextResponse.json({ error: 'KV not configured' }, { status: 503 })
  }
  try {
    await client.del(KEY)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 })
  }
}
