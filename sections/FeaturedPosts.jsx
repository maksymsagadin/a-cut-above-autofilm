import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FeaturedPostCard } from '../components'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}


const FeaturedPosts = ({ posts }) => {
  return (
    <div className="mb-8">
      <Carousel infinite={true} autoPlay={true} autoPlaySpeed={4000} customTransition={'transform 2000ms ease-in-out'} transitionDuration={2000} arrows={true}  responsive={responsive} itemClass="px-4" >
        {posts && posts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts;