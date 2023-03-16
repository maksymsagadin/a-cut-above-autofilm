import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedImage = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`} passHref >
        <div className='cursor-pointer z-10 w-[250px] h-[400px] lg:w-[400px] lg:h-[550px]'>
          <Image src={post.featuredImage.url} alt={post.title} layout='fill' objectFit='cover'/>
          <p className='cursor-pointer font-semibold absolute h-full w-full flex items-end p-2 opacity-0 hover:bg-opacity-30 hover:opacity-90 bg-black'>{post.title}</p>
        </div>
    </Link>
  )
}

export default FeaturedImage

