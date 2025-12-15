'use client'

import Link from 'next/link'
import { useMemo } from 'react'

export default function Hero() {
  const heroSentenceWords = useMemo(() => {
    const sentence =
      'I love creating things that change the way people interact with the world.'
    const words = sentence.split(' ')

    return words.map((word, index) => (
      <span
        key={`${word}-${index}`}
        className="hero-intro-word"
        style={{ animationDelay: `${index * 0.12}s` }}
      >
        {word}
        {index < words.length - 1 ? ' ' : ''}
      </span>
    ))
  }, [])

  return (
    <div
      id="about"
      className="relative px-4 sm:px-8 md:px-12 pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-14 md:pb-10 flex flex-col items-start min-h-[260px] sm:min-h-[300px] md:min-h-[340px] rounded-[20px] overflow-hidden"
    >
      <div className="relative z-20 w-full max-w-3xl flex flex-col gap-8 sm:gap-10 rounded-2xl px-4 sm:px-6 pb-3 sm:pb-4">

        {/* Body copy */}
        <div className="flex flex-col gap-4 sm:gap-5 max-w-xl text-base sm:text-lg leading-relaxed">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed">
            {heroSentenceWords}
          </p>

        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-5 rounded-2xl px-4 sm:px-6 pt-0 pb-5 sm:pb-6">

          <p className="text-base sm:text-lg leading-snug">
            Aditi Kanaujia - AI Design @henry
            <br />
            Product Designer and Developer — New York

          </p>

          <p className="text-xs sm:text-sm">
            <span className="text-secondary-text">pronunciation:</span>{' '}
            <span className="font-medium">uh·thi·thee</span>
          </p>
          {/* CTA row */}
        <div className="flex flex-wrap gap-3 sm:gap-3">
          <Link
            href="/#work"
            className="px-5 py-2.5 rounded-full border border-stroke bg-foreground text-background text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
          >
            View work
          </Link>
          <a
            href="mailto:ak9138@gmail.com"
            className="px-5 py-2.5 rounded-full border border-stroke text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
          >
            Get in touch
          </a>
        </div>
        </div>
    </div>
  )
}
