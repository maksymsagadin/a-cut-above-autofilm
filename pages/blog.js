import Head from 'next/head'
import { Header, Footer, PostCard, Categories, PostWidget } from '../components'
import { getBlog } from '../services'
import { FeaturedPosts } from '../sections'


export default function Home({ posts, contact }) {
  return (
    <div className="px-4 mt-28 sm:px-8 lg:mb-10">
      <Header logoURL={contact.logo.url} />
      <FeaturedPosts />
      <div className='grid lg:grid-cols-12 grid-cols-1 lg:gap-8'>
        {/* Left Section */}
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        {/* Right Section */}
        <div className='col-span-1 lg:col-span-4'>
            <div className='lg:sticky relative text-gray-200'>
              <Categories />
              <PostWidget />
            </div>
        </div>
      </div>
      <Footer contact={contact}/>
    </div>
  )
}

export async function getStaticProps() {
  const blogData = (await getBlog()) || []
  return {
    props: { posts: blogData.posts, contact: blogData.data.contact }
  }
}