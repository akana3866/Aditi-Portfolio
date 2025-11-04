// Blog Post Card Component
function BlogPostCard({ title, subtitle }) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-xl">{subtitle}</p>
        </div>
        <a 
          href="#" 
          className="text-base font-medium hover:opacity-60 transition-opacity"
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
      <div id="blog" className="px-12 py-9 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <h2 className="text-3xl font-medium">Blog</h2>
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
          <p className="text-lg">
            Quick notes is an educational blog/space to rant about random musings :)
          </p>
        </div>
        <div className="flex gap-8">
          {/* Left column */}
          <div className="w-1/2 flex flex-col gap-8">
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