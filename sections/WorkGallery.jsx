import React from 'react'
import Link from 'next/link'
import { CgChevronDoubleLeftR, CgChevronDoubleRightR } from 'react-icons/cg'
import { FeaturedImage, SectionHeadline } from '../components'

const WorkGallery = ({ data }) => {
    const { featuredPosts, heading, subheading, description } = data
    const scrollRef = React.useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;
    
        if (direction === 'left') {
          current.scrollLeft -= 300
        } else {
          current.scrollLeft += 300
        }
    }

    return (
        <SectionHeadline title={'Proof of Work'}>
            <div className='relative overflow-hidden flex flex-col gap-8 lg:flex-row px-8 lg:pr-0'>
                {/* Left Column */}
                <div className='flex flex-col items-start justify-center w-full lg:max-w-[33%]'>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#d7e1f3]'>
                        {heading}
                    </h2>
                    <h1 className='text-2xl md:text-5xl font-bold text-yellow-400'>
                        {subheading}
                    </h1>
                    <p className='py-4 max-w-[600px] md:text-lg text-justify indent-4'>
                        {description}
                    </p>
                    <Link href='/blog'>
                        <button className='border-2 rounded-lg px-6 py-3 my-1 transition duration-500 hover:bg-[#3378ca] hover:border-[#3378ca]'>
                            View Our Work
                        </button>
                    </Link>
                </div>
                {/* Right Column / Carousel */}
                <div className='h-full relative rounded-lg overflow-hidden mx-auto w-full lg:rounded-r-none lg:max-w-[66%] lg:my-8'>
                    <div className='flex no-scrollbar relative overflow-x-scroll rounded-lg' ref={scrollRef}>
                    {featuredPosts && [featuredPosts[0], featuredPosts[1], featuredPosts[2], featuredPosts[3], featuredPosts[4]].map((post, index) => (
                        <div key={index}>
                            <FeaturedImage post={post} />
                        </div>
                    ))}
                    </div> 
                    <div className='flex justify-between px-6 absolute w-full bottom-[5%]'>
                        <CgChevronDoubleLeftR className='rounded cursor-pointer text-4xl text-[#d7e1f3]' onClick={() => scroll('left')}/>
                        <CgChevronDoubleRightR className='rounded cursor-pointer text-4xl text-[#d7e1f3]' onClick={() => scroll('right')}/>
                    </div> 
                </div>
            </div>
        </SectionHeadline>
    )
}

export default WorkGallery
