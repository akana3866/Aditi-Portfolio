// Recognition Item Component
function RecognitionItem({ publication, title, year, description, icon }) {
  return (
      <div className="w-full min-w-80 p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium">{publication}</span>
              <span className="text-xs text-secondary-text">{year}</span>
            </div>
            <h3 className="text-xl font-medium">{title}</h3>
          </div>
        </div>
        <p className="text-lg text-secondary-text">{description}</p>
      </div>
  );
}

export default function Recognition() {
  const recognitions = [
    {
      publication: "Forbes",
      title: "Gone Are Startup Fears Of Sharing Products Pre-Launch",
      year: "2025",
      description: "Who would have thought that right out of grad I would get to see my design work in a Forbes article? So so happy to be working on such a great team :)",
      icon: true
    },
    {
      publication: "Washington Square News",
      title: "The NYU student-founded startup helping international students roam through college",
      year: "2024",
      description: "How we design and build experience's at roam that help an underserved sector right now.",
      icon: false
    },
    {
      publication: "Cisco Outshift",
      title: "Interning at Cisco ET&I",
      year: "2022",
      description: "Curious about my time here? Read all about it on Cisco's site!",
      icon: true
    }
  ];

  return (
    <div id="featured" className="px-12 py-9 flex flex-col gap-12">
        <div className="flex items-center gap-1.5">
          <h2 className="text-3xl font-medium">
            Featured Work & Industry Recognition
          </h2>
          <div className="transition-background-color duration-500">
              <svg 
                width="33" 
                height="32" 
                viewBox="0 0 33 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-foreground"
              >
                <path 
                  d="M15.3597 0.840218C15.7172 -0.101328 17.2628 -0.101329 17.6203 0.840217C18.6837 3.64049 20.4479 7.53723 22.7003 9.78966C24.9528 12.0421 28.8495 13.8063 31.6498 14.8697C32.5913 15.2272 32.5913 16.7728 31.6498 17.1303C28.8495 18.1937 24.9528 19.9579 22.7003 22.2103C20.4479 24.4628 18.6837 28.3595 17.6203 31.1598C17.2628 32.1013 15.7172 32.1013 15.3597 31.1598C14.2963 28.3595 12.5321 24.4628 10.2797 22.2103C8.02722 19.9579 4.13049 18.1937 1.33022 17.1303C0.388669 16.7728 0.388669 15.2272 1.33021 14.8697C4.13049 13.8063 8.02722 12.0421 10.2797 9.78966C12.5321 7.53723 14.2963 3.64049 15.3597 0.840218Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
        </div>
      <div className="flex flex-col gap-4">
        {recognitions.map((item, i) => (
          <RecognitionItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}