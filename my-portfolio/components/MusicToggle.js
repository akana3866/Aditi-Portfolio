'use client'

import { useState, useEffect, useRef } from 'react'

export default function MusicToggle() {
  const [isMusicOn, setIsMusicOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/music/Harrison - You Hate Jazz_ ft. Jaleel Shaw.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5 // Set volume to 50%

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (isMusicOn) {
      // Pause music
      audioRef.current.pause()
      setIsMusicOn(false)
    } else {
      // Play music
      try {
        await audioRef.current.play()
        setIsMusicOn(true)
      } catch (error) {
        console.error('Error playing music:', error)
        // Some browsers require user interaction before playing audio
        setIsMusicOn(false)
      }
    }
  }

  return (
    <div className="flex items-center gap-3">
      {/* Clickable Icon Button */}
      <button 
        onClick={toggleMusic}
        className="w-10 h-10 border border-stroke rounded-lg flex items-center justify-center hover:opacity-60 transition-opacity duration-200"
      >
        {isMusicOn ? (
          // Music Note Icon (Playing)
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        ) : (
          // Music Note Icon (Off) - with slash
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" opacity="0.5" />
            <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  )
}

