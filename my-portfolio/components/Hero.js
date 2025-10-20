export default function Hero() {
  return (
    <div className="px-12 py-16 flex flex-col justify-end items-center gap-16 min-h-[700px]">
      <div className="w-full flex flex-col justify-center items-end gap-12">
        <div className="w-full flex justify-start items-center gap-3">
          <h1 className="text-7xl md:text-8xl font-playfair italic capitalize leading-tight">
            Hello, I&apos;m Aditi
          </h1>
          <img src="/icons/star.svg" alt="Star" className="w-10 h-10" />
        </div>

        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              I love creating things that change the way people interact with the world.
            </p>

            <div className="flex flex-col gap-1.5">
              <p className="text-lg leading-snug">
                💻 Currently leading product design @roam & @henry<br />
                📍 Based in New York, NY
              </p>
            </div>

            <div>
              <span className="text-xs">pronunciation: </span>
              <span className="text-xs font-medium">uh·thi·thee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-7 h-0.5 bg-black dark:bg-white"></div>
    </div>
  );
}
