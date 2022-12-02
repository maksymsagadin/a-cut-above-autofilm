import React from 'react'
import Image from 'next/image'
import img from '../public/spray.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-full py-8 mt-8 relative text-gray-300'>
      <div className='flex flex-col justify-center md:items-center px-8 '>
        <div className='pb-8 px-2'>
            <p className='text-4xl px-2 font-bold border-b-4 border-yellow-600'>
              About
            </p>
        </div>
        <div className='grid md:grid-cols-2 gap-6 justify-around px-2'>
            <div className='py-4'>
              <Image src={img} objectFit={'contain'} className='opacity-75 rounded' />
            </div>
            <div className='flex flex-col justify-center items-center indent-4 text-left'>
              <p>
                What started off as a part time job vinyl wrapping at SFG Wraps while I was finishing school, turned into a fine art of heating and stretching vinyl to it's limits, learning the hard way how to take apart cars from the bumpers to the doors to even the small little trim pieces that often break upon removal.
              </p>
              <br/>
              <p>
                With years of experience working with Vinyl, I decided to take on the next toughest challenge: shaping thick PPF to become the shape of a car. While working with PPF can sometimes feel like it's more difficult, the results always leave me blown away and excited to start the next job!
              </p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default About