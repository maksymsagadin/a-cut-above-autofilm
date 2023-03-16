import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-0 pb-4 mb-4 md:p-6 lg:p-8 lg:mb-8'>
      <div className='relative overflow-hidden mb-6'>
        <Link href={`/post/${post.slug}`} passHref>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='cursor-pointer max-h-[600px] w-full object-bottom object-cover shadow-lg rounded-t-lg xl:max-h-[900px] md:rounded-lg'
          />
        </Link>
      </div>
      <h1 className='transition duration-500 text-center mb-4 cursor-pointer hover:text-blue-500 text-xl font-semibold'>
        <Link href={`/post/${post.slug}`} passHref>
          {post.title}
        </Link>
      </h1>
      <p className='text-center text-lg font-normal mb-4 px-4 md:px-0'>{post.description}</p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`} passHref>
          <button className='transition duration-500 transform lg:hover:-translate-y-1 inline-block bg-gray-600 hover:bg-indigo-800 rounded-xl text-gray-200 text-lg px-4 py-2 cursor-pointer'>
            Continue Reading
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PostCard