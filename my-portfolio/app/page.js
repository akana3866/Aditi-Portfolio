'use client'

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
  return (
    <div className="w-full p-5 flex justify-center items-start">
      <Navbar />
      <div className="flex-1 rounded-[20px] bg-column-bg border border-stroke flex flex-col gap-16 transition-all duration-500">
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