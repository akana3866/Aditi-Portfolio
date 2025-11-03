// Project Card Component
function ProjectCard({ header, title, impact, impactPoints, imageUrl, buttonText = "View project overview" }) {
    return (
      <div className="bg-card-bg w-full rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden border border-stroke">
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
                <span className="text-secondary-text text-sm font-normal leading-4">{header}</span>
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
      <div id="work" className="px-12 py-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-3xl font-medium">Featured Work</h2>
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
          <p className="text-lg text-secondary-text">
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