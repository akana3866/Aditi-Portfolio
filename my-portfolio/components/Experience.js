// Experience Item Component
function ExperienceItem({ company, role, duration, description, logo }) {
  return (
    <div className="px-2.5 bg-white dark:bg-gray-800 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {/* Placeholder for company logo */}
        <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-300 text-xs">{company[0]}</span>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <span className="text-black dark:text-white text-xs font-medium">{company}</span>
            <span className="text-black/30 dark:text-white/30 text-xs">{duration}</span>
          </div>
          <h3 className="text-black dark:text-white text-xl font-medium">{role}</h3>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-lg">{description}</p>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Henry Labs",
      role: "Lead Product Designer",
      duration: "2025 - Present",
      description: "As Henrys sole designer, I'm shaping the product experience across both B2C shopping flows and B2B merchant dashboards."
    },
    {
      company: "Roam",
      role: "Founding Product Designer",
      duration: "2024 - Present",
      description: "As Roam's founding product designer, I built the marketplace experience, partner dashboards, and money transfer flows to simplify studying abroad for international students."
    },
    {
      company: "Instalily",
      role: "Product Designer (Contract)",
      duration: "2024 - 2025",
      description: "At InstaLily, I designed AI side panels to simplify shopping and built dashboards that turned marketing data into clear growth suggestions securing client partnerships."
    },
    {
      company: "Cisco",
      role: "Product Management Intern",
      duration: "2022",
      description: "As a PM intern on Cisco's Outshift/ET&I team, I scoped features, aligned stakeholders, and helped shape prototypes that brought emerging tech ideas closer to market."
    }
  ];

  return (
    <div className="px-12 py-9 flex flex-col gap-9">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <h2 className="text-black dark:text-white text-3xl font-medium">My Work Experience</h2>
          <div className="w-4 h-4 bg-black dark:bg-white rounded-sm"></div>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          I&apos;m a product designer with technical fluency, startup speed, and a passion for building
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
}