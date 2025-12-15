// Blog Post Card Component
function BlogPostCard({ title, subtitle, url }) {
    return (
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-medium">{title}</h3>
          <p className="text-lg sm:text-xl">{subtitle}</p>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
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
        subtitle: "Solving feature awareness as a product designer",
        url: "https://quicknotes.substack.com/p/how-to-fix-one-of-the-key-issues"
      },
      {
        title: "Not Just a Nice-to-Have",
        subtitle: "How Wishlist Features Secure Sales Longterm",
        url: "https://quicknotes.substack.com/p/not-just-a-nice-to-have-how-wishlist"
      }
    ];
  
    return (
      <div id="blog" className="px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-9 flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-medium">Blog</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <BlogPostCard {...blogPosts[0]} />
            <BlogPostCard {...blogPosts[1]} />
        </div>
      </div>
    );
  }