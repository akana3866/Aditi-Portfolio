// Project Card Component
function ProjectCard({ title, tags, description, imageUrl }) {
    return (
      <div className="w-80 h-[488px] px-8 py-9 relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex flex-col justify-end gap-10 overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col gap-5 z-10">
          <h3 className="text-black dark:text-white text-xl font-medium">{title}</h3>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1.5 rounded-md border border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-xs font-medium">{description}</p>
        </div>
        {/* Placeholder for image - replace with actual images later */}
        <div className="absolute top-8 left-0 w-full h-64 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }
  
  export default function FeaturedWork() {
    const projects = [
      {
        title: "Henry",
        tags: ["AI Design", "E-Commerce"],
        description: "How can we reduce cart abandonment rates? some more text about it here tooo",
        imageUrl: "/images/henry.jpg"
      },
      {
        title: "Roam",
        tags: ["Product Design", "Marketplace"],
        description: "How can we reduce cart abandonment rates? some more text about it here tooo",
        imageUrl: "/images/roam.jpg"
      },
      {
        title: "Spotify",
        tags: ["User Research", "Music"],
        description: "How can we reduce cart abandonment rates? some more text about it here tooo",
        imageUrl: "/images/spotify.jpg"
      }
    ];
  
    return (
      <div className="px-12 py-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-black dark:text-white text-3xl font-medium">Featured Work</h2>
            <div className="w-4 h-4 bg-black dark:bg-white rounded-sm"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Design Case studies and live work that I have designed.
          </p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    );
  }