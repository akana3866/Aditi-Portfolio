import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import MusicToggle from './MusicToggle'

export default function Navbar() {
    return (
      <div className="w-40 h-screen pb-7 flex flex-col gap-6 relative sticky top-0">
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
    );
  }