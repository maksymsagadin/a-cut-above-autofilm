import Head from 'next/head'
import { Header, Footer, PostCard, Categories, PostWidget } from '../components'
import { getBlog } from '../services'
import { FeaturedPosts } from '../sections'


export default function Home({ posts, contact, featuredPosts }) {
  return (
    <div className="px-4 mt-28 sm:px-8 lg:mb-10">
      <Header logoURL={contact.logo.url} />
      <FeaturedPosts posts={featuredPosts} />
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8'>
        {/* Left Section */}
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        {/* Right Section */}
        <div className='col-span-1 lg:col-span-4'>
            <div className='relative text-gray-200 lg:sticky top-8'>
              <Categories />
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
    props: { posts: blogData.posts, contact: blogData.data.contact, featuredPosts: blogData.postsConnection.edges }
  }
}