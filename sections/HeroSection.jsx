import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link as LinkScroll } from 'react-scroll'

const HeroSection = ({ data }) => {
  const { heading, subheading, greeting, contact } = data
  return (
    <div className='hero-section'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center text-center h-full'>
        <h1 className='text-5xl sm:text-8xl font-bold text-yellow-400'>
          {heading}
        </h1>
        <h2 className='text-2xl sm:text-6xl font-bold text-[#d7e1f3]'>
          {subheading}
        </h2>
        <p className='py-4 max-w-[600px]'>
          {greeting}
        </p>
        <div className='flex flex-row'>
          <LinkScroll to='about' offset={-15} smooth='true'>
            <button className='border-2 rounded-lg bg-[#3378ca] bg-opacity-50 px-6 py-3 my-1 transition duration-500 hover:bg-opacity-100 hover:border-[#3378ca]'>
              Get To Know Us
            </button>
          </LinkScroll>
        </div>
      </div>
      <div className='flex absolute flex-col bottom-[5%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] rounded-lg flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full'
              href={`https://www.instagram.com/${contact.instagram}/`}
              target='_blank'
              rel='noopener noreferrer'
              >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] rounded-lg flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full'
              href={`mailto:${contact.email}`}
              target='_blank'
              rel='noopener noreferrer'
              >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default HeroSection
