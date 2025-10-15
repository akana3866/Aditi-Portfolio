import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import FeaturedWork from 'components/FeaturedWork'
import Experience from 'components/Experience'
import Playground from 'components/Playground'
import Recognition from 'components/Recognition'
import Blog from 'components/Blog'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div className="w-full p-5 flex justify-center items-start">
      <Navbar />
      <div className="flex-1 bg-white rounded-[20px] border border-black/10 flex flex-col gap-16">
        <Hero />
        <FeaturedWork />
        <Experience />
        <Playground />
        <Recognition />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}