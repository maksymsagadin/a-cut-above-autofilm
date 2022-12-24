import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'


export default function Home({ posts }) {
  return (
    <div className="px-4 mt-28 sm:px-8 lg:mb-10">
      <FeaturedPosts />
      <div className='grid lg:grid-cols-12 grid-cols-1 lg:gap-8'>
        {/* Left Section */}
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post.node} key={post.node.title} />)}
        </div>
        {/* Right Section */}
        <div className='col-span-1 lg:col-span-4'>
            <div className='lg:sticky relative text-gray-200'>
              <Categories />
              <PostWidget />
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  
  return {
    props: { posts }
  }
}