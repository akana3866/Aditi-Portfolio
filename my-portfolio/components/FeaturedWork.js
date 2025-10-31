// Project Card Component
function ProjectCard({ header, title, impact, impactPoints, imageUrl, buttonText = "View project overview" }) {
    return (
      <div className="w-full rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden border border-stroke">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          {imageUrl ? (
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-yellow-300 via-green-400 to-blue-500 rounded-lg"></div>
          )}
        </div>
        
        {/* Right Section - Text Content */}
        <div className="w-full md:w-1/2 px-6 md:px-10 py-6 md:py-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Header */}
            {header && (
              <div className="w-fit px-2.5 py-1.5 rounded-md border border-stroke inline-flex justify-center items-center">
                <span className="text-tag text-sm font-normal leading-4">{header}</span>
              </div>
            )}
            
            {/* Title */}
            <h3 className="text-2xl font-medium leading-tight">
              {title}
            </h3>
            
            {/* Impact Section */}
            {impact && (
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium uppercase tracking-wide">
                  {impact}
                </p>
                  {impactPoints && impactPoints.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {impactPoints.map((point, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            )}
          </div>
          
          {/* Button */}
          <button className="w-fit px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 font-medium text-medium">
            <span>{buttonText}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  
  export default function FeaturedWork() {
    const projects = [
      {
        header: "Henry",
        title: "Helping Users Discover More with an AI Powered Interface",
        impact: "Impact",
        impactPoints: [
          "Increased product exploration by 23%",
          "Lowered cart abandonment + bounce rates",
          "More users staying on the site longer"
        ],
        imageUrl: "/images/Phone.png",
        buttonText: "Read case study"
      },
      {
        header: "Roam",
        title: "Building a Marketplace That Simplifies Moving Abroad",
        impact: "Impact",
        impactPoints: [
          "Simplified onboarding flow for international students",
          "Reduced drop-offs during university verification",
          "Increased activation rate across 3 key markets"
        ],
        imageUrl: "/images/Roam.png",
        buttonText: "Read case study"
      },
      {
        header: "Spotify",
        title: "Redesigning Feature Discovery for longer-term retention",
        impact: "Impact",
        impactPoints: [
          "Improved awareness of advanced features like Blend & Daylist",
          "Created weekly in-app highlights for smarter discovery",
          "Increased active session time by 17%"
        ],
        imageUrl: "/images/Spotify.png",
        buttonText: "Read case study"
      }
    ];
  
    return (
      <div className="px-12 py-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-3xl font-medium">Featured Work</h2>
            <div className="w-4 h-4 rounded-sm"></div>
          </div>
          <p className="text-lg">
            Design Case studies and live work that I have designed.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    );
  }