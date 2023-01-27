import React from 'react'
import Image from 'next/image'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import img from '../public/workshop-m3.png'

const FindUs = ({ data }) => {
    const { contact, greeting, bannerURL} = data
    return (
        <div id='findus' className='w-full h-full my-10 lg:my-16 relative'>
            <div className='flex flex-col justify-center px-8'>
                <div className='pb-8 px-2'>
                    <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
                    Find Us
                    </p>
                </div>
                <div className='grid md:grid-cols-2 md:order-last gap-8 lg:gap-16 justify-center md:px-4 lg:px-8 xl:px-16 mt-4'>
                    <div className='flex justify-center'>
                        <Image src={img} optimize='true' objectFit={'contain'} className='rounded-lg' />
                    </div>
                    <div className='flex flex-col relative justify-around md:-order-1 sm:text-lg lg:text-2xl'>
                        <p className='mb-8'>
                            {greeting}
                        </p>
                        <address className='text-left text-base md:text-lg lg:text-xl text-[#d7e1f3]'>
                            <a href={`tel:+1-${contact.phone}`} className='flex items-center tracking-widest py-2'><HiOutlinePhone size={30}/>&nbsp;: {contact.phone}</a>
                            <a href={`mailto:${contact.email}`}  target='_blank' rel='noopener noreferrer' className='flex whitespace-nowrap items-center py-2'><HiOutlineMail size={30}/>&nbsp;: {contact.email}</a>
                            <a href={`https://www.instagram.com/${contact.instagram}/`} target='_blank' rel='noopener noreferrer' className='flex whitespace-nowrap items-center tracking-wider py-2'><FaInstagram size={30}/>&nbsp;: @{contact.instagram}</a>
                            <div className='flex tracking-wider py-2'>
                                <HiOutlineOfficeBuilding size={30}/>&nbsp;: Modified Motorsports, LLC.<br />
                                &nbsp;{contact.address}<br />
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindUs