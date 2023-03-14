import { useState, useCallback, useMemo } from 'react'
import { Header, Footer, PostCard, CategoriesFilter} from '../components'
import { getBlog } from '../services'
import { FeaturedPosts } from '../sections'
import { SectionHeadline } from '../components'


export default function Home({ posts, categories, contact, featuredPosts }) {
  const [Posts, setPosts] = useState({
    filteredPosts: posts,
    filters: new Set(),
  })

  const handleFilterChange = useCallback(event => {
    setPosts(previousState => {
      let filters = new Set(previousState.filters)
      let filteredPosts = posts

      // Update Filter list with checked values
      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      // Filter posts based on filters
      if (filters.size) {
        filteredPosts = filteredPosts.filter(post => {
          for (const filter of filters) {
            if (!post.categories.some(category => category.name === filter)) {
              return false
            }
          }
          return true
        })
      }
      return { filteredPosts, filters }
    })
  }, [setPosts]);

  // Sorting Categories Alphabetically
  const sortedCategories = useMemo(() => {
    return categories.sort(function(a,b) {
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
  }, [categories])

  return (
    <div className="mt-28 lg:mb-10">
      <Header logoURL={contact.logo.url} />
      <FeaturedPosts posts={featuredPosts} />
      <SectionHeadline title='Blog'>
        {/* <Categories /> */}
        <CategoriesFilter categories={categories} onFilterChange={handleFilterChange} />
        <div className='md:columns-2 lg:columns-3 gap-4 lg:gap-8'>
          {Posts.filteredPosts.map((post) => 
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
  // Cache the data for 1 hour (3600 seconds)
  return {
    props: { 
      posts: blogData.posts,
      categories: blogData.categories,
      contact: blogData.data.contact,
      featuredPosts: blogData.postsConnection.edges
    },
    revalidate: 3600 // Regenerate the page every hour
  }
}