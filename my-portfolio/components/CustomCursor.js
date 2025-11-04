'use client'

import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 })
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef(null)
  const targetPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const animate = () => {
      // Smooth trailing effect for outer dot
      setOuterPosition(prev => {
        const dx = targetPositionRef.current.x - prev.x
        const dy = targetPositionRef.current.y - prev.y
        return {
          x: prev.x + dx * 0.15, // 0.15 = smoothness factor (lower = more trailing)
          y: prev.y + dy * 0.15
        }
      })
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    const handleMouseMove = (e) => {
      // Inner dot follows immediately
      setInnerPosition({ x: e.clientX, y: e.clientY })
      // Outer dot target position (will trail)
      targetPositionRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Check if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.body.style.cursor = 'auto'
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer cursor dot (trails) */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${outerPosition.x}px`,
          top: `${outerPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '32px' : '20px',
          height: isHovering ? '32px' : '20px',
          transition: 'width 0.15s ease-out, height 0.15s ease-out',
        }}
      >
        <div
          className="w-full h-full rounded-full bg-white"
          style={{
            opacity: 0.9,
          }}
        />
      </div>
      
      {/* Inner dot (follows immediately) */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9999] mix-blend-difference"
          style={{
            left: `${innerPosition.x}px`,
            top: `${innerPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '14px',
            height: '14px',
          }}
        >
          <div
            className="w-full h-full rounded-full bg-white"
            style={{
              opacity: 1,
            }}
          />
        </div>
      )}
    </>
  )
}

