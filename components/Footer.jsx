import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import Image from 'next/image'
import logo  from '../public/knife-white.png'



const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-8'>
        <a  
            className=''
            href='https://www.instagram.com/acutaboveautofilms/'
            target='_blank'
            rel="noreferrer"
            >
            <FaInstagram size={40} />
        </a>
        <div className='flex flex-row justify-center items-center hover:cursor-pointer' onClick={animateScroll.scrollToTop}>
            <span className='cursor-pointer duration-500 ease-linear inline-block hover:-translate-x-4'>
                <Image src={logo} height={45} width={45} />
            </span>
            <p className='text-xl sm:text-4xl text-yellow-400 font-bold'>A Cut Above</p>
        </div>
        <address className='text-xl sm:text-xl text-[#d7e1f3]'>318 Lindbergh Avenue, Livermore, CA</address>
        <a href='tel:9252649707' className='text-xl sm:text-xl text-[#d7e1f3]'>925-264-9709</a>
    </div>
  )
}

export default Footer