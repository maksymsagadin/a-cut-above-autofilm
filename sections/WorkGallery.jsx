import React from 'react'
import { CgChevronDoubleLeftR, CgChevronDoubleRightR } from 'react-icons/cg'
import { FeaturedImage } from '../components'

const WorkGallery = ({ posts }) => {
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
        <div className='container overflow-hidden flex flex-col lg:flex-row py-16 pr-0 '>
            {/* Left Column */}
            <div className='flex flex-col items-start justify-center px-16 py-4 w-full lg:max-w-[33%]'>
                <h2 className='text-2xl sm:text-4xl font-bold text-[#d7e1f3]'>
                    A Cut Above.
                </h2>
                <h1 className='text-3xl sm:text-5xl font-bold text-yellow-400'>
                    Protection like no other.
                </h1>
                <p className='py-4 max-w-[600px] text-[#eaf1f9]'>
                    We have an extensive range of stunning, unique design options, the STEK DYNOseries redefines the possibilities of an automotive customization.
                </p>
                <button className='border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-[#3378ca] hover:border-[#3378ca]'>
                    <a href='https://www.instagram.com/acutaboveautofilms/' target='_blank' rel="noreferrer" className='text-[#eaf1f9]'>
                        View Instagram
                    </a>
                </button>
            </div>
            {/* Right Column / Carousel */}
            <div className='h-full bg-white mx-auto relative w-[90%] lg:max-w-[66%] lg:my-20  '>
                <div className='flex flex-row item-start' ref={scrollRef}>
                {[posts[0], posts[1], posts[2], posts[3]].map( (post, index) => (
                    <div className=''  key={index}>
                        <FeaturedImage post={post} />
                    </div>
                ))}
                </div> 
                <div className='flex justify-between px-2 absolute w-full bottom-[5%]'>
                    <CgChevronDoubleLeftR className=' rounded cursor-pointer text-4xl text-[#d7e1f3]' onClick={() => scroll('left')}/>
                    <CgChevronDoubleRightR className=' rounded cursor-pointer text-4xl text-[#d7e1f3]' onClick={() => scroll('right')}/>
                </div> 
            </div>
        </div>
    )
}

export default WorkGallery
