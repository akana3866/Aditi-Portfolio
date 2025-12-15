// Experience Item Component
function ExperienceItem({ logoUrl,company, role, duration, description}) {
  return (
    <div className="px-2.5 rounded-2xl flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {/* Placeholder for company logo */}
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
        <img src={logoUrl} alt={company} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{company}</span>
            <span className="text-xs text-secondary-text">{duration}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-medium">{role}</h3>
        </div>
      </div>
      <p className="text-base sm:text-lg text-secondary-text font-regular">{description}</p>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      logoUrl: "/images/henry.png",
      company: "Henry Labs",
      role: "Lead Product Designer",
      duration: "2025 - Present",
      description: "As Henry's sole designer, I'm shaping the product experience across both B2C shopping flows and B2B merchant dashboards. Focusing on simplifying the e-commerce experience for users and making it easier for merchants to manage their products and orders through AI design."
    },
    {
      logoUrl: "/images/roam-logo.png",
      company: "Roam",
      role: "Founding Product Designer",
      duration: "2024 - Present",
      description: "As Roam's founding product designer, I built the marketplace experience, partner dashboards, and money transfer flows to simplify studying abroad for international students."
    },
    {
      logoUrl: "/images/instalily.png",
      company: "Instalily",
      role: "Product Designer (Contract)",
      duration: "2024 - 2025",
      description: "At InstaLily, I designed AI side panels to simplify shopping and built dashboards that turned marketing data into clear growth suggestions securing client partnerships."
    },
    {
      logoUrl: "/images/cisco.png",
      company: "Cisco",
      role: "Product Management Intern",
      duration: "2022",
      description: "As a PM intern on Cisco's Outshift/ET&I team, I scoped features, aligned stakeholders, and helped shape prototypes that brought emerging tech ideas closer to market."
    }
  ];

  return (
    <div id="experience" className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 flex flex-col gap-6 sm:gap-9">
      <div className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-medium">My Work Experience</h2>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
}