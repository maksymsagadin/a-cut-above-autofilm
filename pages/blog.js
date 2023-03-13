import Head from 'next/head'
import { Header, Footer, PostCard, Categories, CategoriesFilter, PostWidget } from '../components'
import { getBlog } from '../services'
import { FeaturedPosts } from '../sections'
import { SectionHeadline } from '../components'


export default function Home({ posts, categories, contact, featuredPosts }) {
  return (
    <div className="mt-28 lg:mb-10">
      <Header logoURL={contact.logo.url} />
      <FeaturedPosts posts={featuredPosts} />
      <SectionHeadline title='Blog'>
        {/* <Categories /> */}
        <CategoriesFilter categories={categories} />
        <div className='md:columns-2 lg:columns-3 gap-4 lg:gap-8'>
          {posts.map((post) => 
            <div key={post.title} className='break-inside-avoid'>
              <PostCard post={post} />
            </div>
          )}
        </div>
      </SectionHeadline>
      <Footer contact={contact}/>
    </div>
  )
}

export async function getStaticProps() {
  const blogData = (await getBlog()) || []
  return {
    props: { posts: blogData.posts, categories: blogData.categories, contact: blogData.data.contact, featuredPosts: blogData.postsConnection.edges }
  }
}