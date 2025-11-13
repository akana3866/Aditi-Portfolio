'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
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
      className="px-12 py-9 flex flex-col gap-9"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <h2 className="text-3xl font-medium">About Me</h2>
          <div className="transition-background-color duration-500">
            <svg 
              width="33" 
              height="32" 
              viewBox="0 0 33 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-foreground"
            >
              <path 
                d="M15.3597 0.840218C15.7172 -0.101328 17.2628 -0.101329 17.6203 0.840217C18.6837 3.64049 20.4479 7.53723 22.7003 9.78966C24.9528 12.0421 28.8495 13.8063 31.6498 14.8697C32.5913 15.2272 32.5913 16.7728 31.6498 17.1303C28.8495 18.1937 24.9528 19.9579 22.7003 22.2103C20.4479 24.4628 18.6837 28.3595 17.6203 31.1598C17.2628 32.1013 15.7172 32.1013 15.3597 31.1598C14.2963 28.3595 12.5321 24.4628 10.2797 22.2103C8.02722 19.9579 4.13049 18.1937 1.33022 17.1303C0.388669 16.7728 0.388669 15.2272 1.33021 14.8697C4.13049 13.8063 8.02722 12.0421 10.2797 9.78966C12.5321 7.53723 14.2963 3.64049 15.3597 0.840218Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <p className="text-lg text-secondary-text">
          A product designer and manager specializing in e-commerce and AI experiences, with a passion for fashion, consumer social apps, music, and health.
        </p>
      </div>

      <div className="flex flex-col gap-12">
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
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden">
              <img 
                src="/images/avatar-aditi.png" 
                alt="Aditi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              With a background in design, engineering, and product management, I bring a unique perspective to every project. I love solving complex problems with simple, elegant solutions that drive measurable impact, especially when they change how people interact with the world.
            </p>
            <p>
              Outside of work, you&apos;ll find me discovering new music, following F1 & tennis, rewatching Friends, playing Marvel Rivals (I main as Hela), traveling Europe, or exploring new work cafes. I also recently learned to knit and travel everywhere with my knitting kit.
            </p>
          </div>
        </div>

        {/* Skills & Tools Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium">Skills & Tools</h3>
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

