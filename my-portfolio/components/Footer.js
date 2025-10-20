export default function Footer() {
    return (
      <div className="pt-32 pb-8 flex flex-col gap-8">
        <div className="px-10 flex justify-between items-end">
          <div className="text-black dark:text-white text-7xl font-serif leading-tight">AK</div>
          <div className="flex gap-12">
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white text-base font-medium hover:opacity-60 transition-opacity"
            >
              Dribble
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white text-base font-medium hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white text-base font-medium hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>
          </div>
          <div className="text-black dark:text-white text-xs font-medium">
            © Aditi Kanaujia 2025
          </div>
        </div>
        <div className="px-10 pt-10 pb-5 border-t border-black/10 dark:border-white/10">
          <div className="text-black dark:text-white text-[10px] leading-relaxed">
            This website was designed & developed by me, using Figma and Cursor.
            <br />
            Typefaces: <span className="underline">Inclusive Sans</span> and{' '}
            <span className="underline">Sunshower Dreams</span>
            <br />
            Site last edited on May 6, 2025.
          </div>
        </div>
      </div>
    );
  }