import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ScrollLink from './ScrollLink'

const Header = ({ logoURL }) => {
    const router = useRouter()
    return (
        <nav className='container top-0'>
            <div className='absolute top-0 left-0 md:px-8 px-4 w-full py-4 lg:bg-black/25'>
                <div className='float-left'>
                    <Link href='/' passHref>
                        <span className='cursor-pointer duration-500 ease-linear inline-block hover:translate-x-4'>
                            <Image src={logoURL} alt='A Cut Above Logo' height={64} width={64} fetchpriority='high' />
                        </span>
                    </Link>
                </div>
                <div className='container text-shadow text-gray-200 font-bold cursor-pointer'>
                    {router.pathname !== '/blog' && 
                    <Link href='/blog' passHref>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4  inline-block transition duration-500 transform md:hover:translate-y-2 md:hover:text-blue-300'>
                            Blog
                        </span>
                    </Link> }
                    {router.pathname === '/' && 
                    <ScrollLink to='about'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4   inline-block transition duration-500 transform md:hover:translate-y-2 md:hover:text-blue-300'>
                            About
                        </span>
                    </ScrollLink>}
                    {router.pathname === '/' && 
                    <ScrollLink to='findus'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 inline-block transition duration-500 transform md:hover:translate-y-2 md:hover:text-blue-300'>
                            Find Us
                        </span>
                    </ScrollLink>}
                    {router.pathname === '/' && 
                    <ScrollLink to='services'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 inline-block transition duration-500 transform md:hover:translate-y-2 md:hover:text-blue-300'>
                            Services
                        </span>
                    </ScrollLink>}
                    {/* Not Home */}
                    {router.pathname !== '/' && <Link href='/' passHref>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 inline-block transition duration-500 transform md:hover:translate-y-2  md:hover:text-blue-300'>
                            Home
                        </span>
                    </Link>}
                </div>
            </div>
        </nav>
    )
}

export default Header
