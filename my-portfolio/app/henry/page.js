'use client'

import Link from 'next/link'
import Navbar from 'components/Navbar'

export default function HenryCaseStudy() {
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
              <p>henry</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight">
                Henry AI Shopping Flow
              </h1>
              <div className="rounded-[20px] overflow-hidden">
            <img src="/images/henry-header.png" alt="Henry" width="100%" height="100%" />
            </div>
            {/* Project Details and Buttons */}
            <div className="flex flex-row items-center justify-between gap-6 flex-wrap">
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Date</span>
                  <span className="font-medium">February 2025</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Role</span>
                  <span className="font-medium">Product Designer</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Skills</span>
                  <span className="font-medium">UI/UX Design</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-secondary-text">Tools</span>
                  <span className="font-medium">Figma</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="https://www.loom.com/share/71a6de0ba6074da8be46a03675395023?sid=ceff2271-6c23-4f3a-a535-d0c3950b44cd" target="_blank" rel="noopener noreferrer" className="w-fit px-5 py-2.5 rounded-lg border border-stroke transition-colors flex items-center gap-2 font-medium text-sm hover:opacity-60">
                  <span>For lazy readers</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link href="#design" className="w-fit px-5 py-2.5 rounded-lg border border-stroke transition-colors flex items-center gap-2 font-medium text-sm hover:opacity-60">
                  <span>Skip to design</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.596 7.7l2.925-.856M12.813 2.239l-.777 2.897M15.596 7.7l-2.925-.856M6.813 17.761l-.777-2.897M5.596 12.3l2.925.856M12.813 17.761l.777-2.897M15.596 12.3l-2.925.856" />
                  </svg>
                </Link>
              </div>
            </div>

              <p className="text-xl text-secondary-text leading-relaxed">
              Are users able to discover products on Henry? When users landed on the platform, most didn&apos;t stay long. With high cart abandonment and low session times, something was off. This case study explores how a redesigned discovery experience focused on the homepage and AI search helped turn passive browsing into confident buying.
              </p>
            </div>
          </div>

          {/* Problem Discovery Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">Problem Discovery</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                What happens when a platform offers great rewards, but users struggle to find what they&apos;re looking for?
              </p>
              <p>
                Henry is built to give users up to 50% crypto cashback on purchases but that value only matters if users can actually discover products. Research showed that core pages like the homepage and search experience created too much friction.
              </p>
              <p>
                When product discovery is unclear, users lose interest, abandon their carts, and leave without converting. And for a growing platform, that means missed revenue and lost engagement.
              </p>
              <img src="/images/weekend-img.gif" alt="Henry" className="w-full h-auto rounded-lg" />
            </div>

          </section>

          {/* Initial Mobile Metrics */}
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Initial Mobile Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">&lt;2</div>
                <p className="text-sm text-secondary-text">minutes were spent on the app on average</p>
              </div>
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">1.38%</div>
                <p className="text-sm text-secondary-text">of users purchase something per session</p>
              </div>
              <div className="p-6 bg-secondary-card-bg rounded-2xl flex flex-col gap-2">
                <div className="text-4xl font-bold">73%</div>
                <p className="text-sm text-secondary-text">of carts that are abandoned</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              This shows Henry was experiencing low user engagement, impacting the rate of interactions and purchases within the app. Why were users not engaging with the app that much?
              </p>
            </div>
            <div className="flex flex-col gap-12 text-lg leading-relaxed">
            <p>
              When exploring the app and conducting some huerstic analysis on the user flow, I saw two main stopping points:
              </p>
            <img src="/images/henry-findings.png" alt="Henry" className="w-full h-auto rounded-lg" />
              <p>
              Through these findings we can see that Henry was not optimized to help users discover products long enough to lead them to make purchases and this was specifically apparent pages on the homepage and search page
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
                    Users found it difficult to discover and explore products on Henry. With multiple steps before reaching any listings and a static, unintuitive search experience, many abandoned the app before making a purchase.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-normal">Business Problem</h4>
                  <p className="text-lg font-light leading-relaxed">
                    Henry&apos;s value lies in its cashback rewards, but poor product discovery led to low engagement, short session times, and high cart abandonment. This limited the platform&apos;s ability to convert users and generate revenue.
                  </p>
                </div>
              </div>
            </div>
          {/* Testing Section*/}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium">Finding and testing a solution</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
              To tackle this, I led a brainstorming session with engineers and founders using Crazy Eights and FigJam, coming up with different solutions to tackle the user and business problem. From there, I prototyped and tested multiple ideas, with a focus on simplifying the user journey and reducing the time it takes to find and explore products.</p>
              <img src="/images/testing-crazy8.png" alt="Crazy Eights" className="w-full h-auto rounded-lg" />
              <p>
              From there, I prototyped and tested multiple ideas, with a focus on simplifying the user journey and reducing the time it takes to find and explore products.</p>
              <p>
              As a team, honing down on the two major problems of the user flow we decided to hone on improving those two aspects. I used heuristic analysis and A/B testing to evaluate which concepts aligned best with both user needs and product outcomes of those two aspects.</p>
            </div>

          </section>

          {/* A Smarter Homepage Section*/}
          <section className="flex flex-col gap-6">
              <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
                <div className="bg-[#44C67F] text-background rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 relative">
                  <h3 className="text-4xl md:text-4xl font-medium max-w-md text-center">1. A Smarter Homepage</h3>
                </div>
                <img src="/images/wireframes-homepage.png" alt="Wireframes 1" className="w-full h-auto rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
                <p>After testing multiple layouts, we chose Store Recommendations, which displayed store pages as modal cards with sample products. A/B testing showed users spent more time browsing and exploring, which directly supports business goals by increasing time-on-platform and likelihood of purchase.</p>
              </div>
          </section>

          {/* AI Search Section*/}
          <section className="flex flex-col gap-6">
              <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
                <div className="bg-[#44C67F] text-background rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 relative">
                  <h3 className="text-4xl md:text-4xl font-medium max-w-md text-center">2. Rethinking AI Search</h3>
                </div>
                <img src="/images/wireframes-ai.png" alt="Wireframes 1" className="w-full h-auto rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col gap-4 text-lg leading-relaxed">
                <p>Another challenge was optimizing the AI search interface. We tested horizontal vs. vertical product layouts.</p>

                <p>Users overwhelmingly preferred horizontal scrolling, which allowed for faster skimming and smoother interaction. In contrast, vertical layouts led to user fatigue and drop-off—many users quit the AI chat entirely when forced to scroll down too long.</p>
              </div>
          </section>
          <div className="flex flex-col gap-4 text-lg leading-relaxed">
          <p>These insights helped us choose designs that not only improved usability, but also encouraged deeper exploration and sustained engagement—key to boosting conversions on a shopping platform like Henry.</p>
          </div>

          {/* Solution Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col gap-8 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-normal">Solution</h3>
                <span className="text-2xl font-normal">02</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light leading-relaxed">
                  Users responded best to Store Reccomendations. Store pages displayed as modal cards, each previewing sample products. This gave users more context up front, encouraging them to explore stores without committing to a full product view.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light leading-relaxed">
                  We also redesigned the AI search experience. Horizontal product scrolling outperformed vertical layouts, as users preferred quick, swipeable results. In contrast, vertical scrolling led to drop-offs as users grew fatigued.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Section */}
          <section className="flex flex-col gap-6" id="design">
            <h2 className="text-3xl font-medium">The result and impact</h2>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
              Another challenge was optimizing the AI search interface. We tested horizontal vs. vertical product layouts.</p>
              <p>
              Users overwhelmingly preferred horizontal scrolling, which allowed for faster skimming and smoother interaction. In contrast, vertical layouts led to user fatigue and drop-off—many users quit the AI chat entirely when forced to scroll down too long.
              </p>
              <p>
              These insights helped us choose designs that not only improved usability, but also encouraged deeper exploration and sustained engagement—key to boosting conversions on a shopping platform like Henry.
              </p>
              <div className="bg-[#44C67F] text-background rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 relative">
                  <p className="text-lg text-center">Session length grew by an average of 1–2 minutes indicating users were more engaged on the app</p>
            </div>
            <img src="/images/solution-homepage.png" alt="Solution Homepage" className="w-full h-auto rounded-lg" />
            
            <div className="bg-[#44C67F] text-background rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 relative">
                  <p className="text-lg text-center">Product exploration increased by 23.2%, interaction more with the AI chat and returned users increased by 10.6%</p>
            </div>
            <img src="/images/solution-ai.png" alt="AI Solution" className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
            100% of tested users felt more informed when making purchase decisions. These results came from testing with both original and new users. The new experience allowed users to interact more fluidly with products while being supported by AI, reducing the effort needed to browse, compare, and commit.</p>
              <p>
              By making features more accessible and intuitive, we laid the groundwork for increased engagement, higher retention, and ultimately, more conversions. This directly supports Henry’s business goals of growing its user base and driving revenue.
              </p>
              <p>
              The redesigned experience is currently in development. As we roll it out, we will continue tracking key metrics such as cart abandonment, and begin monitoring additional indicators like AI-to-purchase rate, homepage scroll time, and overall app engagement to measure success and identify future improvements.</p>
            </div>
          </section>

          {/* Solution Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col gap-8 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-normal">Result</h3>
                <span className="text-2xl font-normal">03</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-light leading-relaxed">
                  The redesigned discovery flow led to a 23.2% increase in product exploration, longer session times, and improved user confidence—laying the foundation for higher engagement, retention, and revenue growth.
                  </p>
                </div>
              </div>
            </div>

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

