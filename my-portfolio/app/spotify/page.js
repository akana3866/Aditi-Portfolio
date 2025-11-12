'use client'

import Link from 'next/link'
import Navbar from 'components/Navbar'

export default function SpotifyCaseStudy() {
  return (
    <div className="w-full p-5 flex justify-center items-start">
      <Navbar />
      <div className="flex-1 rounded-[20px] bg-column-bg border border-stroke transition-all duration-500 font-montreal">
        <div className="px-12 py-16 flex flex-col gap-16 max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-sm text-secondary-text">
              <Link href="/#work" className="hover:opacity-60 transition-opacity">work</Link>
              <span>/</span>
              <p>spotify</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight">
                Spotify Feature Discovery
              </h1>
              <div className="rounded-[20px] overflow-hidden">
            <img src="/images/Spotify.png" alt="Spotify" width="100%" height="100%" />
            </div>
            {/* Project Details and Buttons */}
            <div className="flex flex-row items-center justify-between gap-6 flex-wrap">
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Date</span>
                  <span className="font-medium">March 2024</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Role</span>
                  <span className="font-medium">User Research</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Tools</span>
                  <span className="font-medium">Qualtrics</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="https://www.figma.com/proto/gT8D9sLmBexJ7dpWmIEygA/Spotify-User-Research?page-id=0%3A1&node-id=4-13053&p=f&viewport=396%2C109%2C0.11&t=NxVpL9RHHrwVtJuT-1&scaling=contain&content-scaling=fixed" target="_blank" rel="noopener noreferrer" className="w-fit px-5 py-2.5 rounded-lg border border-stroke transition-colors flex items-center gap-2 font-medium text-sm hover:opacity-60">
                  <span>For lazy readers</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link href="#design" className="w-fit px-5 py-2.5 rounded-lg border border-stroke transition-colors flex items-center gap-2 font-medium text-sm hover:opacity-60">
                  <span>Skip to design</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>

              <p className="text-xl text-secondary-text leading-relaxed">
              Are Spotify’s best features going unnoticed? Many users stick to familiar playlists, missing Spotify's unique features hidden in plain sight. This case study explores how a simple design tweak could drive discovery and boost engagement.
              </p>
            </div>
          </div>

          {/* Problem Discovery Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">Problem Discovery</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
              Ever felt like you’ve been using Spotify for years, only to stumble upon a feature that’s been there all along?Spotify has so much to offer, but are users actually seeing it?
              </p>
              <p>
                Spotify&apos;s personalized features drive loyalty, but not all of them are equally visible. While popular tools like Discover Weekly are front and center, others like Blend and AI-generated playlists stay hidden in the background.
              </p>
              <p>
                When these key features go unnoticed, the user experience suffers. This puts user retention at risk and weakens Spotify&apos;s competitive edge.
              </p>
              <img src="/images/realization.gif" alt="Realization Meme" className="w-full h-auto rounded-lg" />
            </div>
          </section>

          {/* Preliminary User Empathy Research */}
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Preliminary User Empathy Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">60%</div>
                <p className="text-sm text-secondary-text">of users choose Spotify over others for its unique features</p>
              </div>
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">30%</div>
                <p className="text-sm text-secondary-text">of users reach advanced features like Blend or DJ</p>
              </div>
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">68%</div>
                <p className="text-sm text-secondary-text">of users use Spotify for its easy to navigate UI</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                This shows that features are a key driver of user acquisition and retention, yet many of them are going unnoticed.
              </p>
            </div>
          </section>

          {/* Problem Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col gap-8 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-normal">Problem</h3>
                <span className="text-2xl font-normal">01</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-normal">User Problem</h4>
                  <p className="text-lg font-light leading-relaxed">
                    Spotify users struggle to discover and access advanced features like Blend, Daylist, and Smart Shuffle due to low feature awareness and an unintuitive interface. This leads to a limited user experience and missed opportunities for personalization and exploration.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-normal">Business Problem</h4>
                  <p className="text-lg font-light leading-relaxed">
                    Advanced features are key differentiators that drive engagement, loyalty, and potential conversions to Premium. When these features go unnoticed, Spotify risks losing its competitive edge, reducing user retention, and missing out on growth opportunities across its user base.
                  </p>
                </div>
              </div>
            </div>

          {/* User Research Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">What the music lovers have to say</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                To validate my hypothesis, I began with user research by sending out a Qualtrics survey that combined demographic, quantitative, and qualitative questions. I wanted to understand who Spotify&apos;s users were, how many features they actually used, and where the gaps in awareness might be.
              </p>
              <p>
                After collecting 141 valid responses from users aged 18 to 44, I started uncovering patterns that would directly inform my design decisions.
              </p>
            </div>
          </section>

          {/* Survey Results Section */}
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Here are the results:</h3>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>87% of people that discovered features from in-app pop-ups, knew more than 60% of Spotify&apos;s features</li>
                <li>Only 33% of Spotify&apos;s features are used, with the primary demographic being Gen-Z</li>
                <li>Less than half of Spotify&apos;s features are known and even fewer are used across their key age demographic</li>
                <li>In-app pop-ups are the most effective at feature discovery, while the most popular are word of mouth, accidental discovery, and social media platforms</li>
              </ul>
              <p>
                As I analyzed the survey results, a clear pattern emerged. Most users discovered Spotify features through word of mouth or social media, not from the app itself. While younger users aged 18 to 24 were more aware of advanced features, older users aged 25 and up—Spotify&apos;s key demographic—were not.
              </p>
              <p>
                Since this group uses social media less frequently, they rely more on in-app guidance. Yet Spotify was not addressing them, missing a major opportunity to connect users to its most powerful tools.
              </p>
            </div>
          </section>

          {/* Finding and Testing Solution Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">Finding and testing a solution</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                After analyzing the data, three possible solutions came to mind in which I mocked up and tested:
              </p>
            </div>
          </section>

          {/* Features on Homepage Section */}
          <section className="flex flex-col gap-6">
            <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-medium">Features on Homepage</h3>
              <p>
                Why not place advanced features front and center? While this boosts visibility, it risks visual overload. The Baymard Institute notes that cluttered homepages confuse users, and Hick&apos;s Law shows that more choices lead to more friction. Greater visibility could come at the cost of usability.
              </p>
            </div>
          </section>

          {/* In-App Popups Section */}
          <section className="flex flex-col gap-6">
            <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-medium">In-App Popups</h3>
              <p>
                Spotify uses pop-ups sparingly for things like Wrapped and new releases, and it works because they&apos;re minimal and unobtrusive. But using them more often could disrupt that experience. Nielsen Norman Group ranks pop-ups among the most disliked patterns, making them a poor fit for Spotify&apos;s smooth, immersive design.
              </p>
            </div>
          </section>

          {/* Weekly Feature Highlight Section */}
          <section className="flex flex-col gap-6">
            <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
              <h3 className="text-2xl font-medium">Weekly Feature Highlight</h3>
              <p>
                This idea involved placing a small, scrollable banner just above the &quot;Made For You&quot; section on the home screen.
              </p>
              <p>
                It uses visual hierarchy and placement rooted in UX principles like the F-pattern and Gestalt. It&apos;s subtle, non-invasive, and blends into the listening experience—without getting in the way.
              </p>
            </div>
          </section>

          {/* Testing Results */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                To validate which solution best addressed the problem, I created low-fidelity prototypes for all three options and conducted A/B testing with a group of 20 users.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                  <div className="text-4xl font-bold">30%</div>
                  <p className="text-sm text-secondary-text">responded positively to pop-ups, citing disruption</p>
                </div>
                <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                  <div className="text-4xl font-bold">30%</div>
                  <p className="text-sm text-secondary-text">of users, who struggled to find their usual playlists</p>
                </div>
                <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                  <div className="text-4xl font-bold">85%</div>
                  <p className="text-sm text-secondary-text">of users noticed the weekly feature highlight without any prompt</p>
                </div>
              </div>
            </div>
          </section>

          {/* Weekly Feature Highlight Benefits */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p className="text-xl font-medium">Why Weekly Feature Highlight works:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Grounded in Design Principles: Built with Gestalt theory and the F-pattern to improve visibility without disrupting the experience.</li>
                <li>Boosts Engagement: Weekly rotation keeps things fresh and encourages users to explore more features.</li>
                <li>Validated by Testing: Proved to be the most effective and least disruptive option in A/B testing.</li>
                <li>Easy to Implement: Spotify already uses similar banners, making this scalable and practical.</li>
                <li>Drives Retention: More engagement means users are more likely to stay and convert to Premium.</li>
              </ul>
            </div>
          </section>

          {/* Solution Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col gap-8 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-normal">Solution</h3>
                <span className="text-2xl font-normal">03</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light leading-relaxed">
                    The weekly feature highlight clearly stood out as the most effective and least disruptive solution, blending awareness with a seamless user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Section */}
          <section className="flex flex-col gap-6" id="design">
            <h2 className="text-3xl font-medium">The result and impact</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                After rounds of research, prototyping, and testing, the solution became clear. I finalized the idea of In-App Weekly Feature Highlights, a simple and non-intrusive way to surface Spotify&apos;s most overlooked tools. It aligned perfectly with user behavior, design principles, and business goals.
              </p>
              <p>
                When designing the prototype, I focused on what makes Spotify, Spotify. Clean, friendly, effortless. Every interaction was built with that in mind, using consistent branding, intuitive flow, and brief descriptions to help users understand each feature without feeling overwhelmed.
              </p>
            </div>
          </section>

          {/* Solution Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col gap-8 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-normal">Result</h3>
                <span className="text-2xl font-normal">04</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light leading-relaxed">
                    The weekly feature highlight increased awareness, boosted engagement, and proved to be the most intuitive and non-disruptive solution through user testing.
                  </p>
                </div>
              </div>
            </div>

          {/* Future Improvements */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                Thinking about future improvements and given more time, I&apos;d expand testing across different user groups and track long-term engagement metrics. I&apos;d also explore launching this solution in a limited rollout to gather real user data and refine the experience even further.
              </p>
              <p>
                This project reminded me that sometimes the best solutions are the ones that feel like they were always meant to be there—quietly improving the experience, one tap at a time.
              </p>
            </div>
          </section>

          {/* Back to projects */}
          <div className="pt-8 border-t border-stroke">
            <Link 
              href="/#work" 
              className="text-base font-medium hover:opacity-60 transition-opacity inline-flex items-center gap-2"
            >
              ← Back to projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

