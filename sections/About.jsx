import React from 'react'
import Image from 'next/image'
import workshop from '../public/e46.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center px-8 h-full'>
        <div className='pb-8 pl-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-0 px-2'>
            <div className=''>
              <Image src={workshop} objectFit={'contain'} className='opacity-75 ' />
            </div>
            <div className='flex justify-center items-center pr-10'>
              <p className='xs:text-center sm:text-left'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/>
                <br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </p> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default About