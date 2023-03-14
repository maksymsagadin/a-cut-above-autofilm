import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import bgMobileBlur from '../public/gt3-mobile-blur.jpg'
import bgDesktopBlur from '../public/gt3-desktop-blur.jpg'
import { ContactTabs } from '../components'



const HeroSection = ({ data }) => {
  const { heading, subheading, greeting, contact, bgMobile, bgDesktop } = data
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize() // Set initial width on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-screen overflow-hidden absolute -z-10'>
        <Image 
        className='brightness-75 md:filter-none'
        src={width < 768 ? bgMobile : bgDesktop} 
        blurDataURL={width < 768 ? bgMobileBlur : bgDesktopBlur} 
        placeholder='blur' 
        alt='' 
        layout='fill' 
        objectFit='cover' 
        objectPosition='center' 
        priority 
        quality={100}/>
      </div>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center text-center text-shadow h-full'>
        <h1 className='text-5xl sm:text-8xl font-bold text-yellow-400'>
          {heading}
        </h1>
        <h2 className='text-2xl sm:text-6xl font-bold text-[#d7e1f3]'>
          {subheading}
        </h2>
        <p className='my-4 max-w-[600px] font-semibold'>
          {greeting}
        </p>
        <div className='flex flex-row'>
          <LinkScroll to='services' offset={-15} smooth='true'>
            <button className='border-2 rounded-lg bg-[#3378ca] bg-opacity-50 px-6 py-3 my-1 transition duration-500 hover:bg-opacity-100 hover:border-[#3378ca]'>
              Get To Know Us
            </button>
          </LinkScroll>
        </div>
      </div>
      <ContactTabs contact={contact} />
    </div>
  )
}
export default HeroSection
