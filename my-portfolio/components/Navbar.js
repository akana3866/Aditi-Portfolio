'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import MusicToggle from './MusicToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-column-bg border-b border-stroke">
        <div className="px-5 py-4 flex items-center justify-between">
          <Link href="/#home" className="text-3xl font-mtry leading-10 hover:opacity-60 transition-opacity">
            AK
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MusicToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="px-5 pb-5 flex flex-col gap-4 border-t border-stroke pt-4">
            <nav className="flex flex-col gap-3">
              <Link href="/#work" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                Work
              </Link>
              <Link href="/#experience" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                Experience
              </Link>
              <Link href="/#playground" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                Playground
              </Link>
              <Link href="/#featured" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                Featured
              </Link>
              <Link href="/#blog" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                Blog
              </Link>
              <Link href="/#about-me" onClick={() => setIsOpen(false)} className="text-base font-medium hover:opacity-60 transition-opacity">
                About
              </Link>
            </nav>
            <a href="mailto:ak9138@gmail.com" 
              className="text-base font-playfair italic leading-tight hover:opacity-60 transition-opacity">
              Let&apos;s Chat ☕️
            </a>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex w-40 h-screen pb-7 flex-col gap-6 relative sticky top-0">
        <div className="pl-8 pr-5 py-7 flex flex-col gap-2.5">
          <Link href="/#home" className="text-4xl font-mtry leading-10 hover:opacity-60 transition-opacity">
            AK
          </Link>
        </div>
        <nav className="pl-8 pr-5 pb-7 flex flex-col gap-2.5">
          <Link href="/#work" className="text-base font-medium hover:opacity-60 transition-opacity">
            Work
          </Link>
          <Link href="/#experience" className="text-base font-medium hover:opacity-60 transition-opacity">
            Experience
          </Link>
          <Link href="/#playground" className="text-base font-medium hover:opacity-60 transition-opacity">
            Playground
          </Link>
          <Link href="/#featured" className="text-base font-medium hover:opacity-60 transition-opacity">
            Featured
          </Link>
          <Link href="/#blog" className="text-base font-medium hover:opacity-60 transition-opacity">
            Blog
          </Link>
          <Link href="/#about-me" className="text-base font-medium hover:opacity-60 transition-opacity">
            About
          </Link>
        </nav>
        <div className="pl-8 pr-5 flex flex-col gap-4">
          <div className="flex items-center">
            <ThemeToggle />
          </div>
          <div className="flex items-center">
            <MusicToggle />
          </div>
        </div>
        <div className="flex-1"></div>
          
          {/* Let's Chat - positioned at bottom right of navbar */}
          <div className="absolute bottom-8 right-8">
            <a href="mailto:ak9138@gmail.com" 
              className="text-base font-playfair italic leading-tight hover:opacity-60 transition-opacity">
              Let&apos;s Chat ☕️
            </a>
          </div>
      </div>
    </>
  );
}