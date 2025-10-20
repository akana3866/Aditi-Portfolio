'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function Hero() {
  const { theme } = useTheme()
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dots, setDots] = useState([])
  const isDark = theme === 'dark'

  useEffect(() => {
    // Generate dots in a perfect grid pattern
    const generateDots = () => {
      const newDots = []
      const containerWidth = window.innerWidth
      const containerHeight = 900 // increased height for dots to extend further down
      const spacing = 30
      
        // Create circular clumps by defining clump centers
        const clumpCenters = []
        
        // Generate clump centers in a grid pattern
        for (let centerX = 60; centerX < containerWidth; centerX += 120) {
          for (let centerY = 60; centerY < containerHeight; centerY += 120) {
            clumpCenters.push({
              x: centerX + (Math.random() - 0.5) * 40, // slight randomness
              y: centerY + (Math.random() - 0.5) * 40,
              radius: Math.random() * 40 + 30, // random radius between 30-70px
              id: clumpCenters.length
            })
          }
        }
        
        for (let x = 0; x < containerWidth; x += spacing) {
          for (let y = 0; y < containerHeight; y += spacing) {
            // Find the closest clump center
            let closestClump = clumpCenters[0]
            let minDistance = Math.sqrt(Math.pow(x - closestClump.x, 2) + Math.pow(y - closestClump.y, 2))
            
            for (const center of clumpCenters) {
              const distance = Math.sqrt(Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2))
              if (distance < minDistance) {
                minDistance = distance
                closestClump = center
              }
            }
            
            // Only add dots that are within the clump radius
            if (minDistance <= closestClump.radius) {
              newDots.push({
                id: `${x}-${y}`,
                x: x,
                y: y,
                clumpId: closestClump.id,
                delay: (closestClump.id % 3) * 2, // Clumps have staggered delays (0, 2, 4s)
                duration: 8 + (closestClump.id % 4) * 2 // Slower duration 8-14s
              })
            }
          }
        }
      setDots(newDots)
    }

    generateDots()

    // Handle mouse movement
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="px-12 py-16 flex flex-col justify-center items-center gap-16 min-h-[800px] relative overflow-hidden rounded-[20px]"
    >
      {/* Interactive Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {(() => {
          // Find the 3 closest dots to mouse position
          const dotsWithDistance = dots.map(dot => ({
            ...dot,
            distance: Math.sqrt(
              Math.pow(dot.x - mousePosition.x, 2) + Math.pow(dot.y - mousePosition.y, 2)
            )
          }))
          
          const closestDots = dotsWithDistance
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 7)
            .filter(dot => dot.distance < 200) // increased radius from ~100 to 120
          
          const closestDotId = closestDots[0]?.id
          const surroundingDotIds = closestDots.slice(1).map(dot => dot.id)
          
          return dots.map((dot) => {
            const isClosest = dot.id === closestDotId
            const isSurrounding = surroundingDotIds.includes(dot.id)
            const isHovered = isClosest || isSurrounding
            
            return (
              <div
                key={dot.id}
                className="absolute rounded-full transition-all duration-200 ease-out"
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: isClosest ? '10px' : isSurrounding ? '6px' : '2px',
                  height: isClosest ? '10px' : isSurrounding ? '6px' : '2px',
                  backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.9)' : isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                  opacity: isHovered ? 1 : 0.6,
                  animationDelay: isHovered ? 'none' : `${dot.delay}s`,
                  animation: isHovered ? 'none' : `randomPulse ${dot.duration}s ease-in-out infinite`
                }}
              />
            )
          })
        })()}
      </div>
      <div className="w-full flex flex-col justify-center items-end gap-12 relative z-10">
        <div className="w-full flex justify-start items-center gap-3">
          <h1 className="bg-column-bg text-7xl md:text-8xl font-playfair italic capitalize leading-tight">
            Hello, I&apos;m Aditi
          </h1>
          <div className="bg-column-bg"><img src="/icons/star.svg" alt="Star" className="w-10 h-10" /></div>
        </div>

        <div className="w-full flex justify-end">
          <div className="bg-column-bg flex flex-col gap-6 max-w-lg">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              I love creating things that change the way people interact with the world.
            </p>

            <div className="flex flex-col gap-1.5">
              <p className="text-lg leading-snug">
                💻 Currently leading product design @roam & @henry<br />
                📍 Based in New York, NY
              </p>
            </div>

            <div>
              <span className="text-xs">pronunciation: </span>
              <span className="text-xs font-medium">uh·thi·thee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-7 h-0.5 bg-black dark:bg-white"></div>
    </div>
  );
}
