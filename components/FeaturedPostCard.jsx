import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-40 hover:bg-none from-gray-800 via-gray-400 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-end absolute w-full h-full">
        <p className="text-gray-200 mb-4 text-shadow font-semibold text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <p className="text-gray-200 mb-4 text-shadow font-semibold text-xs text-right">{post.title}</p>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;