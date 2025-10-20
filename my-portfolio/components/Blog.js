// Blog Post Card Component
function BlogPostCard({ title, subtitle }) {
    return (
      <div className="bg-white dark:bg-gray-800 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-black dark:text-white text-xl font-medium">{title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-lg">{subtitle}</p>
        </div>
        <a 
          href="#" 
          className="text-black dark:text-white text-base font-medium hover:opacity-60 transition-opacity"
        >
          Read Now →
        </a>
      </div>
    );
  }
  
  export default function Blog() {
    const blogPosts = [
      {
        title: "The Silent Killer of Product Growth",
        subtitle: "Solving feature awareness as a product designer"
      },
      {
        title: "Not Just a Nice-to-Have",
        subtitle: "How Wishlist Features Secure Sales Longterm"
      },
      {
        title: "Design Systems at Scale",
        subtitle: "Building consistent experiences across platforms"
      },
      {
        title: "AI in Product Design",
        subtitle: "Exploring the future of design tools and workflows"
      }
    ];
  
    return (
      <div className="px-12 py-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-black dark:text-white text-3xl font-medium">Blog</h2>
            <div className="w-4 h-4 bg-black dark:bg-white rounded-sm"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Quick notes is an educational blog/space to rant about random musings :)
          </p>
        </div>
        <div className="flex gap-8">
          {/* Left column */}
          <div className="w-[467px] flex flex-col gap-8">
            <BlogPostCard {...blogPosts[0]} />
            <BlogPostCard {...blogPosts[1]} />
          </div>
          {/* Right column */}
          <div className="w-[466px] flex flex-col gap-8">
            <BlogPostCard {...blogPosts[2]} />
            <BlogPostCard {...blogPosts[3]} />
          </div>
        </div>
      </div>
    );
  }