import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result));
    } 
    else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-3 font-semibold border-b-2 pb-3'>
        { slug ? 'Related Posts' : 'Recent Posts' }
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4' >
          <div className='w-16 flex-none'>
            <img 
              alt={post.title}
              height='65px'
              width='65px'
              className='align-middle rounded-xl'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-300 text-xs'>
              {moment(post.CreatedAt).format('MMM DD, YYYY')}
            </p>
            <Link key={post.title} href={`/post/${post.slug}`} className='text-xs'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget