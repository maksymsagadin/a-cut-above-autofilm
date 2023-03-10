import React from 'react'
import { Link as LinkScroll, animateScroll } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import ScrollLink from './ScrollLink'

const Footer = ({ contact }) => {
  const { companyName, phone, address, instagram, affiliateLinks, logo } = contact
  return (
    <footer className='grid grid-cols-2 md:grid-cols-4 gap-2 m-2 my-4 md:m-8'>
      {/* Affiliate Links */}
      <div className='mx-auto order-1 md:order-1 md:col-span-1'>
        <span className='font-bold border-b-[2px] border-yellow-400 text-lg'>Affiliate Links</span>
        <ul>
          {affiliateLinks.map((affiliate) => (
            <li key={`${affiliate.name}`}>
              <a href={`${affiliate.url}`} target='_blank' rel="noreferrer">
                {affiliate.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Company Information */}
      <div className='flex flex-col items-center col-span-2 order-3 mb-8 md:mb-0 md:order-2'>
        <a
            href={`https://www.instagram.com/${instagram}/`}
            target='_blank'
            rel="noreferrer"
            >
            <FaInstagram size={40} />
        </a>
        <div className='flex flex-row justify-center items-center hover:cursor-pointer gap-2 text-center' onClick={animateScroll.scrollToTop}>
            <span className='cursor-pointer duration-500 ease-linear inline-block hover:translate-x-3'>
                <Image src={logo.url} alt={companyName} height={45} width={45}/>
            </span>
            <p className='text-xl sm:text-4xl text-yellow-400 font-bold'>{companyName}</p>
        </div>
        <address className='text-lg sm:text-xl text-[#d7e1f3] text-center'>{address}</address>
        <a href={`tel:+1-${phone}`} className='text-xl sm:text-xl text-[#d7e1f3]'>{phone}</a>
      </div>
      {/* Navigation Links */}
      <nav className='mx-auto order-2 md:order-3 md:col-span-1'>
        <span className='font-bold border-yellow-400 text-lg border-b-[2px]'>Quick Nav Links</span>
        <ul>
          <li>
            <ScrollLink to='services'>Services</ScrollLink>
          </li>
          <li>
            <ScrollLink to='findus'>Find Us</ScrollLink>
          </li>
          <li>
            <ScrollLink to='about'>About</ScrollLink>
          </li>
          <li>
            <Link href='/blog' passHref>Blog</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
