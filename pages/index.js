import Head from 'next/head'
import { PostCard } from '../components'
import { getPosts } from '../services'
import { HeroSection, About } from '../sections'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto lg:mb-10">
      <Head>
        <title>A Cut Above Autofilm</title>
        <meta name="description" content="Paint Protection Film" />
        <link rel="icon" href="/star.png" />
      </Head>
      <HeroSection />
      <About />
      {/* <h2 className='text-4xl text-gray-200 font-bold py-3 px-3'>Recent Work</h2>
      <div className='grid lg:grid-cols-12 lg:gap-8'>
        <div className='lg:col-span-12'>
          {posts.map((post) => <PostCard post={post.node} key={post.node.title} />)}
        </div>
      </div> */}
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  
  return {
    props: { posts }
  }
}