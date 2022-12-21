import React from 'react'
import Image from 'next/image'
import { HiOutlinePhone } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import img from '../public/workshop-m3.png'

const FindUs = () => {
    return (
        <div id='findus' className='w-full h-full py-8 mt-8 relative'>
            <div className='flex flex-col justify-center px-8 '>
                <div className='pb-8 px-2'>
                    <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
                    Find Us
                    </p>
                </div>
                <div className='grid md:grid-cols-2 md:order-last gap-8 lg:gap-16 justify-center md:px-4 lg:px-8 xl:px-16 mt-4'>
                    <div className='flex justify-center'>
                        <Image src={img} optimize objectFit={'contain'} className='rounded' />
                    </div>
                    <div className='flex flex-col relative justify-around md:-order-1 lg:text-2xl'>
                        <p className='mb-8'>
                            Reach out with any questions you may have, we look forward to working with you! 
                        </p>
                        <address className='text-left text-base md:text-lg lg:text-xl text-[#d7e1f3]'>
                            <a href='tel:9252649707' className='flex items-center tracking-widest py-2'><HiOutlinePhone size={30}/> : 925-264-9709</a>
                            <a href='mailto:ACutAboveAutoFilms@gmail.com'  target='_blank' rel='noreferrer' className='flex whitespace-nowrap items-center py-2'><HiOutlineMail size={30}/> : ACutAboveAutoFilms@gmail.com</a>
                            <a href='https://www.instagram.com/acutaboveautofilms/' target='_blank' rel='noreferrer' className='flex whitespace-nowrap items-center tracking-widest py-2'><FaInstagram size={30}/> : @ACutAboveAutoFilms</a>
                            <div className='flex whitespace-nowrap'>
                                <HiOutlineOfficeBuilding size={30}/>: Modified Motorsports, LLC.<br />
                                318 Lindbergh Ave, Livermore, CA<br />
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindUs