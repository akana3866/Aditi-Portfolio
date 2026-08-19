import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

const KEY = 'ak-garden-v1'
const MAX_NAME = 14
const MAX_ENTRIES = 5000

function kvConfigured() {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

export async function GET() {
  if (!kvConfigured()) {
    return NextResponse.json({ garden: [], warning: 'KV not configured' }, { status: 200 })
  }
  try {
    const garden = (await kv.get(KEY)) || []
    return NextResponse.json({ garden })
  } catch (e) {
    return NextResponse.json({ garden: [], error: String(e?.message || e) }, { status: 500 })
  }
}

export async function POST(req) {
  if (!kvConfigured()) {
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
    const current = (await kv.get(KEY)) || []
    if (current.length >= MAX_ENTRIES) {
      return NextResponse.json({ error: 'garden full' }, { status: 429 })
    }
    const next = current.concat([{ name, grid: cleanGrid, at: Date.now() }])
    await kv.set(KEY, next)
    return NextResponse.json({ garden: next })
  } catch (e) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 })
  }
}
