import { getFeaturedPosts } from '../services'
import { HeroSection, About, WorkGallery } from '../sections'

export default function Home({ featuredposts }) {
  
  return (
    <div className="container mx-auto lg:mb-10">
      <HeroSection />
      <About />
      <WorkGallery posts={featuredposts} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredposts = (await getFeaturedPosts()) || []
  return {
    props: { featuredposts }
  }
}