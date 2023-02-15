import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

const Header = ({ logoURL }) => {
    const router = useRouter()
    return (
        <nav className='container top-0'>
            <div className='absolute top-0 left-0 md:px-8 px-4 w-full py-4'>
                <div className='float-left'>
                    <Link href='/'>
                        <span className='cursor-pointer duration-500 ease-linear inline-block hover:translate-x-4'>
                            <Image src={logoURL} alt='A Cut Above Logo' height={64} width={64} />
                        </span>
                    </Link>
                </div>
                <div className='container'>
                    {router.pathname !== '/blog' && 
                    <Link href='/blog'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Blog
                        </span>
                    </Link> }
                    {router.pathname === '/' && 
                    <LinkScroll to='findus' offset={-15} smooth='true'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Find Us
                        </span>
                    </LinkScroll>}
                    {router.pathname === '/' && 
                    <LinkScroll to='services' offset={-15} smooth='true'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Services
                        </span>
                    </LinkScroll>}
                    {router.pathname === '/' && 
                    <LinkScroll to='about' offset={-15} smooth='true'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            About
                        </span>
                    </LinkScroll>}
                    {/* Everywhere else but home */}
                    {router.pathname !== '/' && <Link href='/'>
                        <span className='float-right text-lg p-1 md:text-2xl md:p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Home
                        </span>
                    </Link>}
                </div>
            </div>
        </nav>
    )
}

export default Header
