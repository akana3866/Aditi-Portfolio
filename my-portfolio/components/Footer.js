export default function Footer() {
    return (
      <div className="pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 flex flex-col gap-6 sm:gap-8">
        <div className="px-4 sm:px-8 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
        <div className="text-4xl sm:text-5xl md:text-6xl font-mtry leading-10">AK</div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
            <a 
              href="https://dribbble.com/aditi-kanaujia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground text-base font-medium hover:opacity-60 transition-opacity"
            >
              Dribble
            </a>
            <a 
              href="https://www.linkedin.com/in/aditi-kanaujia-b6a06053/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground text-base font-medium hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/akana3866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground text-base font-medium hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>
          </div>
          <div className="text-foreground text-xs font-medium">
            © Aditi Kanaujia 2025
          </div>
        </div>
        <div className="px-4 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-5 border-t border-stroke">
          <div className="text-foreground text-[10px] sm:text-xs leading-relaxed">
            I developed and designed this website with {'<3'} using Figma, Vercel, and Cursor.
            <br />
            Song used in the background: <a href="https://www.youtube.com/watch?v=YEEgTdnnzAo" className="underline">You Hate Jazz? ft. Jaleel Shaw</a> , {' '}
            <br />
            Typefaces: <a href="https://fontsinuse.com/typefaces/106391/neue-montreal" className="underline">Neue Montreal</a> ,{' '}
            <a href="https://elements.envato.com/mtry-geometric-experimental-J4U3M2V" className="underline">MTRY</a> , and {' '} <a href="https://fontsinuse.com/typefaces/7709/playfair-display" className="underline">Playfair Display</a>
            <br />
            Site last edited on Nov 20, 2025.
          </div>
        </div>
      </div>
    );
  }