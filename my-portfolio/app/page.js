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
    <div className="w-full p-3 sm:p-5 flex flex-col lg:flex-row justify-center items-start gap-0 lg:gap-0">
      <Navbar />
      <div className="w-full lg:flex-1 rounded-[20px] bg-column-bg border border-stroke flex flex-col gap-8 md:gap-12 lg:gap-16 transition-all duration-500 mt-24 sm:mt-28 lg:mt-0">
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