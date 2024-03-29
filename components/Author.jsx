import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-gray-200 bg-opacity-10'>
        <div className='absolute left-0 right-0 -top-14'>
            <Image
                alt={ author.name }
                unoptimized
                height= '100px'
                width='100px'
                className='rounded-full'
                src={ author.photo.url }
            />
        </div>
       <h3 className='text-gray-200 my-4 text-xl md:text-2xl font-bold'>{author.name}</h3>
       <p className='text-gray-200 text-lg md:text-xl'>{author.bio}</p>
    </div>
  )
}

export default Author