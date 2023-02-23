import React from 'react'
import Image from 'next/image'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { SectionHeadline } from '../components'

const FindUs = ({ data }) => {
    const { contact, greeting, bannerImage} = data
    return (
        <SectionHeadline title='Find Us' id='findus'>
            <div className='grid md:grid-cols-2 md:order-last gap-8 lg:gap-16 justify-center md:px-4 lg:px-8 xl:px-16 mt-4'>
                <div className='flex justify-center'>
                    <Image src={bannerImage} quality={100} height={1500} width={2000} objectFit={'cover'} className='rounded-lg' />
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
        </SectionHeadline>
    )
}

export default FindUs