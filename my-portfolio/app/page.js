'use client'

import { useEffect, useMemo, useState } from 'react'

import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import About from 'components/About'
import FeaturedWork from 'components/FeaturedWork'
import Experience from 'components/Experience'
import Playground from 'components/Playground'
import Recognition from 'components/Recognition'
import Blog from 'components/Blog'
import Footer from 'components/Footer'

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const totalWords = 18 // keep in sync with hero sentence
    const perWordDelay = 0.12
    const wordAnimDuration = 0.9
    const totalDuration = totalWords * perWordDelay + wordAnimDuration

    const timeout = setTimeout(() => {
      setIntroDone(true)
    }, totalDuration * 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative w-full p-3 sm:p-5 flex flex-col lg:flex-row-reverse justify-center items-start gap-0 lg:gap-0">
      <div
        className={`fixed inset-0 z-10 bg-background transition-opacity duration-800 ${
          introDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      <Navbar />
      <div className="w-full lg:flex-1 rounded-[20px] bg-column-bg border border-stroke flex flex-col gap-6 md:gap-8 lg:gap-10 transition-all duration-500 mt-24 sm:mt-28 lg:mt-0">
        <Hero />
        <FeaturedWork />
        <Experience />
        <Playground />
        <Recognition />
        <Blog />
        <About />
        <Footer />
      </div>
    </div>
  )
}