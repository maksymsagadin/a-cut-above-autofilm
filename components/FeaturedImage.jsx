import React from 'react'
import Link from 'next/link'

const FeaturedImage = ({ post }) => {
  return (
    <Link  href={`/post/${post.slug}`}>
        <div className='cursor-pointer bg-center relative bg-no-repeat bg-cover w-[350px] h-[500px]' style={{ backgroundImage: `url('${post.featuredImage.url}')` }} >
          <p className='cursor-pointer h-full w-full flex justify-center items-center opacity-0 hover:opacity-50 bg-black text-[#d7e1f3]'>{post.title}</p>
        </div>
    </Link>
  )
}

export default FeaturedImage