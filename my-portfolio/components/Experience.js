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
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center gap-1.5">
          <h2 className="text-2xl sm:text-3xl font-medium">My Work Experience</h2>
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
        <p className="text-base sm:text-lg text-secondary-text">
          I&apos;m a product designer & manager with technical fluency, startup speed, and a passion for building consumer products.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
}