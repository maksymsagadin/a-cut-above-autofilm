import React from 'react'

const FeaturedImage = ({ post }) => {
  return (
    <>
        <div className=' bg-center relative bg-no-repeat bg-cover w-[350px] h-[500px]' style={{ backgroundImage: `url('${post.featuredImage.url}')` }} >
          <p className='h-full w-full flex justify-center items-center opacity-0 hover:opacity-50 bg-black text-[#d7e1f3]'>{post.title}</p>
        </div>
    </>
  )
}

export default FeaturedImage