import React from 'react'
import Image from 'next/image'
import img from '../public/spray.jpg'

const About = () => {
  return (
    <div id='about' className='w-full h-full py-8 mt-8 relative'>
      <div className='flex flex-col justify-center text-right px-8 '>
        <div className='pb-8 px-2'>
          <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
            About
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-24 items-center justify-center md:px-4 lg:px-8 xl:px-16 mt-4'>
          <div className='flex justify-center'>
            <Image src={img} optimize objectFit={'contain'} className='rounded' />
          </div>
          <div className='flex flex-col items-center indent-4 text-justify text-lg lg:text-2xl'>
            <p>
              A Cut Above was created out of the need for a high quality vinyl wrap and paint protection film install shop in the Livermore area. We hold ourselves accountable to my Nona's motto, "Whether the job be big or small do it right or not at all." We only offer services that we excel at and we're always learning to expand that list. Wrapping is an experimental art, not an exact science and we like pushing our ability and testing the limits of film!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About