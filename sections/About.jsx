import React from 'react'
import Image from 'next/image'
import { SectionHeadline } from '../components'

const About = ({ data }) => {
  const {description, bannerImage} = data
  return (
    <SectionHeadline title='About' id='about' >
      <div className='grid md:grid-cols-2 gap-8 lg:gap-24 items-center justify-center md:px-4 lg:px-8 xl:px-16 mt-4'>
        {/* Left Section / Image */}
        <div className='flex justify-center'>
          <Image src={bannerImage} quality={100} height={400} width={550} objectFit={'cover'} className='rounded-lg' />
        </div>
        {/* Right Section / Description */}
        <div className='flex flex-col items-center indent-4 text-justify text-lg lg:text-2xl'>
          <p>{description}</p>
        </div>
      </div>
    </SectionHeadline>
  )
}

export default About