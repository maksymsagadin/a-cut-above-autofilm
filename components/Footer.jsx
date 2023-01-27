import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import Image from 'next/image'
import logo  from '../public/knife-white.png'

const Footer = ({ contact }) => {
  return (
    <footer className='flex flex-col justify-center items-center gap-4 m-8'>
        <a  
            className=''
            href={`https://www.instagram.com/${contact.instagram}/`}
            target='_blank'
            rel="noreferrer"
            >
            <FaInstagram size={40} />
        </a>
        <div className='flex flex-row justify-center items-center hover:cursor-pointer gap-2' onClick={animateScroll.scrollToTop}>
            <span className='cursor-pointer duration-500 ease-linear inline-block hover:-translate-x-4'>
                <Image src={contact.logo.url?contact.logo.url:logo} alt={contact.companyName} height={45} width={45} />
            </span>
            <p className='text-xl sm:text-4xl text-yellow-400 font-bold'>{contact.companyName}</p>
        </div>
        <address className='text-lg sm:text-xl text-[#d7e1f3]'>{contact.address}</address>
        <a href={`tel:+1-${contact.phone}`} className='text-xl sm:text-xl text-[#d7e1f3]'>{contact.phone}</a>
    </footer>
  )
}

export default Footer