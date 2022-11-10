import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo  from '../public/knife-white.png'

const Header = () => {

    return (
        <div className='container sticky top-0 z-10 mx-auto'>
            <div className='absolute bg-black bg-opacity-20 top-0 left-0 lg:px-8 px-4 w-full py-4'>
                <div className='float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer  hover: inline-block transition duration-500 transform hover:translate-x-4'>
                            <Image src={logo} height={64} width={64} />
                        </span>
                    </Link>
                </div>
                <div className='content'>
                    <Link href='/blog'>
                        <span className='float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Blog
                        </span>
                    </Link>
                    <Link href='/'>
                        <span className='float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header