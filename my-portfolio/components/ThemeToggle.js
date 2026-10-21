'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

/**
 * Paper lantern theme toggle (sub-page sidebar version).
 *
 * Lights on  -> light mode
 * Lights off -> dark mode
 *
 * Tap the lantern or tug it downwards to flip the switch. The cord
 * stretches with the pointer, the lantern springs back and sways.
 */

const PULL_MAX = 30 // viewBox units the lantern can be tugged
const PULL_CLICK = 20 // where the switch latches
const TAP_SLOP = 5 // px of movement still counted as a tap

const W = 200
const R = 80
const CX = 100
const CY = 98
const H = 190

export default function ThemeToggle({ size = 1, cord = 60 }) {
  const { theme, toggleTheme } = useTheme()
  const isOn = theme !== 'dark'
  // Unique SVG ids: two toggles (mobile + desktop) share a page, and a
  // gradient inside a display:none copy never paints.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')

  const [pull, setPull] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [flicker, setFlicker] = useState(false)

  const buttonRef = useRef(null)
  const swayRef = useRef(null)
  const dragRef = useRef({ startY: 0, latched: false, moved: 0 })
  const flickerTimer = useRef(null)
  const prevOn = useRef(isOn)

  useEffect(() => {
    if (isOn && !prevOn.current) {
      setFlicker(true)
      clearTimeout(flickerTimer.current)
      flickerTimer.current = setTimeout(() => setFlicker(false), 800)
    }
    prevOn.current = isOn
    return () => clearTimeout(flickerTimer.current)
  }, [isOn])

  const fire = useCallback(() => {
    const el = buttonRef.current
    let origin
    if (el) {
      const r = el.getBoundingClientRect()
      origin = { x: r.left + r.width * 0.5, y: r.top + r.height * 0.6 }
    }
    toggleTheme(origin)
    const sway = swayRef.current
    if (sway && typeof sway.animate === 'function') {
      sway.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(2.4deg)', offset: 0.16 },
          { transform: 'rotate(-1.8deg)', offset: 0.4 },
          { transform: 'rotate(1deg)', offset: 0.64 },
          { transform: 'rotate(-0.4deg)', offset: 0.84 },
          { transform: 'rotate(0deg)' },
        ],
        { duration: 2200, easing: 'ease-in-out' }
      )
    }
  }, [toggleTheme])

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return
    dragRef.current = { startY: e.clientY, latched: false, moved: 0 }
    setDragging(true)
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      /* no-op */
    }
  }

  const onPointerMove = (e) => {
    if (!dragging) return
    const dy = e.clientY - dragRef.current.startY
    dragRef.current.moved = Math.max(dragRef.current.moved, Math.abs(dy))
    const next = Math.max(0, Math.min(PULL_MAX, dy / size))
    setPull(next)
    if (!dragRef.current.latched && next >= PULL_CLICK) {
      dragRef.current.latched = true
      fire()
    }
  }

  const endDrag = (e) => {
    if (!dragging) return
    setDragging(false)
    setPull(0)
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* no-op */
    }
    const { latched, moved } = dragRef.current
    if (!latched && moved <= TAP_SLOP) fire()
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setPull(PULL_CLICK)
      fire()
      setTimeout(() => setPull(0), 160)
    }
  }

  // Bamboo ribs: stacked, gently bowed lines that follow the sphere.
  const ribs = []
  const N = 26
  for (let i = 0; i <= N; i++) {
    const y = CY - R + 5 + i * ((2 * R - 10) / N)
    const dy = y - CY
    const w = Math.sqrt(Math.max(0, R * R - dy * dy)) - 0.6
    if (w < 6) continue
    ribs.push(
      <path
        key={i}
        className="lantern-rib"
        d={`M${CX - w} ${y} Q${CX} ${y + w * 0.085} ${CX + w} ${y}`}
        strokeWidth="0.6"
        fill="none"
      />
    )
  }

  const totalH = H + cord
  const id = (name) => `${uid}-${name}`
  const url = (name) => `url(#${uid}-${name})`

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-pressed={isOn}
      aria-label={isOn ? 'Turn the lights off (dark mode)' : 'Turn the lights on (light mode)'}
      title={isOn ? 'Tug the lantern to turn the lights off' : 'Tug the lantern to turn the lights on'}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className={`lantern-toggle ${isOn ? 'is-on' : 'is-off'} ${dragging ? 'is-dragging' : ''} ${flicker ? 'is-flicker' : ''}`}
      style={{ width: W * size, height: totalH * size, touchAction: 'none' }}
    >
      <svg
        className="lantern-fixture"
        width={W * size}
        height={totalH * size}
        viewBox={`0 ${-cord} ${W} ${totalH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={id('halo')} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe3a6" stopOpacity="0.42" />
            <stop offset="50%" stopColor="#ffd27a" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffc65c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={id('paperOff')} cx="40%" cy="34%" r="72%">
            <stop offset="0%" stopColor="#F8F4E9" />
            <stop offset="55%" stopColor="#E9E3D2" />
            <stop offset="100%" stopColor="#C9C2AE" />
          </radialGradient>
          <radialGradient id={id('paperOn')} cx="50%" cy="50%" r="52%">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="38%" stopColor="#FFF7DF" />
            <stop offset="74%" stopColor="#FBEEC6" />
            <stop offset="100%" stopColor="#F4E2AE" />
          </radialGradient>
          <radialGradient id={id('shade')} cx="46%" cy="30%" r="74%">
            <stop offset="55%" stopColor="#2a2016" stopOpacity="0" />
            <stop offset="100%" stopColor="#2a2016" stopOpacity="0.26" />
          </radialGradient>
          <linearGradient id={id('cap')} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#111111" />
            <stop offset="45%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#0c0c0c" />
          </linearGradient>
          <filter id={id('hot')} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter id={id('feather')} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id={id('grain')} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n" />
            <feColorMatrix in="n" type="saturate" values="0" result="g" />
            <feComposite in="g" in2="SourceGraphic" operator="in" />
          </filter>
          <clipPath id={id('clip')}>
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

        {/* sways from where the cord meets the ceiling */}
        <g ref={swayRef} style={{ transformOrigin: `${CX}px ${-cord}px` }}>
          <path
            className="lantern-cord"
            d={`M${CX} ${-cord} V${8 + pull}`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <g
            style={{
              transform: `translateY(${pull}px)`,
              transition: dragging ? 'none' : 'transform 500ms cubic-bezier(.2,1.5,.4,1)',
            }}
          >
            <circle className="lantern-halo" cx={CX} cy={CY} r="165" fill={url('halo')} />
            <circle className="lantern-feather" cx={CX} cy={CY} r={R + 1} fill="#F7E9C2" filter={url('feather')} />
            <circle className="lantern-paper-off" cx={CX} cy={CY} r={R} fill={url('paperOff')} stroke="rgba(20,14,6,.10)" strokeWidth="0.8" />
            <circle className="lantern-paper-on" cx={CX} cy={CY} r={R} fill={url('paperOn')} />
            <circle className="lantern-hot" cx={CX} cy={CY + 2} r="44" fill="#FFFFFF" filter={url('hot')} clipPath={url('clip')} />
            <g clipPath={url('clip')}>{ribs}</g>
            <ellipse className="lantern-seam" cx={CX} cy={CY} rx="26" ry={R - 1.5} strokeWidth="0.8" fill="none" />
            <ellipse className="lantern-seam" cx={CX} cy={CY} rx="56" ry={R - 1.5} strokeWidth="0.8" fill="none" />
            <circle className="lantern-grain" cx={CX} cy={CY} r={R} fill="#000" filter={url('grain')} />
            <circle className="lantern-shade" cx={CX} cy={CY} r={R} fill={url('shade')} />
            <ellipse cx={CX} cy={CY - R + 2} rx="12" ry="3.2" fill="#1a1a1a" />
            <rect x={CX - 9} y="6" width="18" height="14" rx="3" fill={url('cap')} />
            <ellipse cx={CX} cy="7" rx="9" ry="2.2" fill="#2b2b2b" />
          </g>
        </g>
      </svg>
    </button>
  )
}
