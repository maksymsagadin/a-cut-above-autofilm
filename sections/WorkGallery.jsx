import Link from 'next/link'
import { SectionHeadline, ImageCarousel } from '../components'

const WorkGallery = ({ data }) => {
    const { featuredPosts, heading, subheading, description } = data

    return (
        <SectionHeadline title={'Proof of Work'}>
            <div className='relative overflow-hidden flex flex-col gap-8 md:px-4 lg:flex-row lg:pr-0'>
                {/* Left Column */}
                <div className='flex flex-col items-start justify-center w-full lg:max-w-[33%]'>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#d7e1f3]'>
                        {heading}
                    </h2>
                    <h1 className='text-2xl md:text-5xl font-bold text-yellow-400'>
                        {subheading}
                    </h1>
                    <p className='py-4 max-w-[600px] md:text-lg text-justify'>
                        {description}
                    </p>
                    <Link href='/blog'>
                        <button className='border-2 rounded-lg px-6 py-3 my-1 transition duration-500 hover:bg-[#3378ca] hover:border-[#3378ca]'>
                            View Our Work
                        </button>
                    </Link>
                </div>
                {/* Right Column / Carousel */}
                <div className='h-full relative rounded-lg overflow-hidden mx-auto w-full lg:max-w-[66%] my-4'>
                    <ImageCarousel posts={featuredPosts} />
                </div>
            </div>
        </SectionHeadline>
    )
}

export default WorkGallery
