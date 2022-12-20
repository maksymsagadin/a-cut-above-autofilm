import React from 'react'
import Image from 'next/image'
import img from '../public/test.png'

const FindUs = () => {
    return (
        <div id='findus' className='w-full h-full py-8 mt-8 relative'>
            <div className='flex flex-col justify-center px-8 '>
                <div className='pb-8 px-2'>
                    <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
                    Find Us
                    </p>
                </div>
                <div className='grid md:grid-cols-2 md:order-last gap-8 lg:gap-16 justify-center px-2 md:px-4 lg:px-8 xl:px-16 mt-4'>
                    <div className='flex justify-center'>
                        <Image src={img} optimize objectFit={'contain'} className='rounded' />
                    </div>
                    <div className='flex flex-col relative justify-around md:-order-1 text-justify text-lg lg:text-2xl'>
                        <p className='mb-8'>
                            Feel free to reach out with any questions you may have, we look forward to working with you! 
                        </p>
                        <address className='text-left text-xl sm:text-lg text-[#d7e1f3]'>
                            Phone: <a href='tel:9252649707' >925-264-9709</a><br />
                            Email: <a href='mailto:ACutAboveAutoFilms@gmail.com'  target='_blank' rel='noreferrer'>ACutAboveAutoFilms@gmail.com</a><br />
                            Instagram: <a href='https://www.instagram.com/acutaboveautofilms/' target='_blank' rel='noreferrer' >@acutaboveautofilms</a><br />
                            <br />
                            Address: Modified Motorsports, LLC.<br />
                            318 Lindbergh Ave, Livermore, CA<br />
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindUs