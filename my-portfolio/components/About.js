'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])


  const skillsAndTools = [
    { name: 'UI/UX Design', delay: 0 },
    { name: 'Product Management', delay: 0.05 },
    { name: 'Design Thinking', delay: 0.1 },
    { name: 'Artificial Intelligence', delay: 0.15 },
    { name: 'Agile', delay: 0.2 },
    { name: 'Figma', delay: 0.25 },
    { name: 'React & Next.js', delay: 0.3 },
    { name: 'Linear', delay: 0.35 },
    { name: 'AI Design', delay: 0.4 },
    { name: 'E-Commerce Design', delay: 0.45 },
    { name: 'Design Engineering', delay: 0.5 },
    { name: 'Design System', delay: 0.55 },
  ]


  return (
    <div 
      id="about-me" 
      ref={sectionRef}
      className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 flex flex-col gap-6 sm:gap-9"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-medium">About Me</h2>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {/* Main Content with Avatar */}
        <div 
          className={`flex flex-col md:flex-row gap-8 items-start transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Avatar */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden">
              <img 
                src="/images/avatar-aditi.png" 
                alt="Aditi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4 text-base sm:text-lg leading-relaxed">
            <p>
              With a background in design, engineering, and product management, I bring a unique perspective to every project. I love solving complex problems with simple, elegant solutions that drive measurable impact, especially when they change how people interact with the world.
            </p>
            <p>
              Outside of work, you&apos;ll find me discovering new music, following F1 & tennis, rewatching Friends, playing Marvel Rivals (I main as Hela), traveling Europe (and scuba diving in the ocean), or exploring new work cafes. I also recently learned to knit and travel everywhere with my knitting kit.
            </p>
          </div>
        </div>

        {/* Skills & Tools Section */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-2xl font-medium">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skillsAndTools.map((item, index) => (
              <div
                key={item.name}
                className={`px-4 py-2.5 rounded-lg border border-stroke bg-secondary-card-bg transition-all duration-500 hover:border-foreground hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${item.delay}s`,
                }}
              >
                <span className="text-base font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

