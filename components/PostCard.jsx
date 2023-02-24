import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  
  return (
    <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-0 pb-8  lg:p-8 mb-8'>
      <div className='relative overflow-hidden mb-6'>
        <Link href={`/post/${post.slug}`} passHref>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='cursor-pointer max-h-[600px] w-full object-bottom object-cover shadow-lg rounded-t-lg xl:max-h-[900px] lg:min-h-full lg:rounded-lg'
          />
        </Link>
      </div>
      <h1 className='transition duration-500 text-center mb-4 cursor-pointer hover:text-blue-500 text-xl font-semibold'>
        <Link href={`/post/${post.slug}`} passHref>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-4 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img 
            alt={post.author.name}
            src={post.author.photo.url}
            height='40px'
            width='40px'
            className='align-middle rounded-full'
          />
          <p className='align-middle inline text-sm ml-2'>{post.author.name}</p>
        </div>
        <div className='font-medium'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 inline mr-2 ' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className='align-middle text-sm'>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg font-normal mb-4 px-8 lg:px-14'>{post.description}</p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`} passHref>
          <span className='transition duration-500 transform hover:-translate-y-2 inline-block bg-gray-600 hover:bg-indigo-800 rounded-xl text-gray-200 text-lg px-4 py-2 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard