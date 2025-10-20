// Recognition Item Component
function RecognitionItem({ publication, title, year, description, icon }) {
  return (
      <div className="w-full min-w-80 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* Icon placeholder */}
          <div className="w-6 h-6 flex items-center justify-center">
            {icon && <div className="w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full"></div>}
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <span className="text-black dark:text-white text-xs font-medium">{publication}</span>
              <span className="text-black/30 dark:text-white/30 text-xs">{year}</span>
            </div>
            <h3 className="text-black dark:text-white text-xl font-medium">{title}</h3>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-lg">{description}</p>
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
    <div className="px-12 py-9 flex flex-col gap-12">
        <div className="flex items-center gap-1.5">
          <h2 className="text-black dark:text-white text-3xl font-medium">
            Featured Work & Industry Recognition
          </h2>
          <div className="w-4 h-4 bg-black dark:bg-white rounded-sm"></div>
        </div>
      <div className="flex flex-col gap-4">
        {recognitions.map((item, i) => (
          <RecognitionItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}