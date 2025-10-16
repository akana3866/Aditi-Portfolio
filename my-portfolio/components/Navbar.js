export default function Navbar() {
    return (
      <div className="w-40 pb-7 flex flex-col gap-6">
        <div className="pl-8 pr-5 py-7 flex flex-col gap-2.5">
        <div className="text-4xl font-mtry leading-10 text-black dark:text-white">AK</div>
        </div>
        <nav className="pl-8 pr-5 pb-7 flex flex-col gap-2.5">
          <a href="#about" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            About
          </a>
          <a href="#work" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            Work
          </a>
          <a href="#experience" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            Experience
          </a>
          <a href="#playground" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            Playground
          </a>
          <a href="#featured" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            Featured
          </a>
          <a href="#blog" className="main-text text-base font-medium hover:opacity-60 transition-opacity">
            Blog
          </a>
        </nav>
        <div className="pl-8 pr-5 flex flex-col">
          <a href="mailto:ak9138@gmail.com" 
            className="text-base font-playfair italic leading-tight hover:opacity-60 transition-opacity">
            Let’s Chat ☕️
          </a>
          </div>
      </div>
    );
  }