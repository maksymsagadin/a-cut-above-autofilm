import Head from 'next/head'
import { getFeaturedPosts } from '../services'
import { HeroSection, About, WorkGallery } from '../sections'

export default function Home({ featuredposts }) {
  
  return (
    <div className="container mx-auto lg:mb-10">
      <Head>
        <title>A Cut Above Autofilm</title>
        <meta name="description" content="Paint Protection Film" />
        <link rel="icon" href="/knife-color.png" />
      </Head>
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