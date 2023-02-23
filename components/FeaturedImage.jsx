import React from 'react'
import Link from 'next/link'

const FeaturedImage = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref >
        <div className='cursor-pointer bg-center bg-no-repeat bg-cover w-[250px] h-[400px] lg:w-[400px] lg:h-[550px]' style={{ backgroundImage: `url('${post.featuredImage.url}')` }} >
          {/* <img src={`${post.featuredImage.url}`} alt={`${post.alt}`} className='h-full' /> */}
          <p className='cursor-pointer h-full w-full flex justify-center items-center opacity-0 hover:opacity-50 bg-black text-[#d7e1f3]'>{post.title}</p>
        </div>
    </Link>
  )
}

export default FeaturedImage

