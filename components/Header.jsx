import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import logo  from '../public/knife-white.png'

const Header = () => {
    const router = useRouter()
    return (
        <div className='container top-0'>
            <div className='absolute top-0 left-0 sm:px-8 px-4 w-full py-4'>
                <div className='float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer duration-500 ease-linear inline-block hover:-translate-x-4'>
                            <Image src={logo} height={64} width={64} />
                        </span>
                    </Link>
                </div>
                <div className='content'>
                    {router.pathname == '/' && 
                    <Link href='/blog'>
                        <span className='float-right sm:text-2xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Blog
                        </span>
                    </Link> }
                    {router.pathname == '/' && 
                    <LinkScroll to='findus' offset={-15} smooth='true'>
                        <span className='float-right sm:text-2xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Find Us
                        </span>
                    </LinkScroll>}
                    {router.pathname == '/' && 
                    <LinkScroll to='services' offset={-15} smooth='true'>
                        <span className='float-right sm:text-2xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Services
                        </span>
                    </LinkScroll>}
                    {router.pathname == '/' && 
                    <LinkScroll to='about' offset={-15} smooth='true'>
                        <span className='float-right sm:text-2xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            About
                        </span>
                    </LinkScroll>}
                    {router.pathname != '/' && <Link href='/'>
                        <span className='float-right sm:text-2xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Home
                        </span>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default Header

// <LinkScroll to='about' offset={-15} smooth='true'>
                    //     <span className='float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                    //         About
                    //     </span>
                    // </LinkScroll>