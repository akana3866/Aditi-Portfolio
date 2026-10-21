'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

const ThemeContext = createContext()

function applyTheme(next) {
  const root = document.documentElement
  root.classList.toggle('dark', next === 'dark')
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* storage unavailable */
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check for saved theme preference or default to light mode
    let savedTheme = null
    try {
      savedTheme = localStorage.getItem('theme')
    } catch {
      /* storage unavailable */
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  /**
   * Flip the theme. When `origin` ({ x, y } in viewport px) is given and the
   * browser supports View Transitions, the new theme spills out from that
   * point like light filling a room (or drains back into it when going dark).
   */
  const toggleTheme = useCallback((origin) => {
    const root = document.documentElement
    const isDark = root.classList.contains('dark')
    const next = isDark ? 'light' : 'dark'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canTransition = typeof document.startViewTransition === 'function'

    if (!canTransition || reduceMotion) {
      applyTheme(next)
      setTheme(next)
      return
    }

    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? 0
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    root.style.setProperty('--vt-x', `${x}px`)
    root.style.setProperty('--vt-y', `${y}px`)
    root.style.setProperty('--vt-r', `${radius}px`)
    root.dataset.themeTransition = next === 'dark' ? 'off' : 'on'

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        applyTheme(next)
        setTheme(next)
      })
    })

    transition.finished.finally(() => {
      delete root.dataset.themeTransition
    })
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-300 rounded-full animate-pulse"></div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
