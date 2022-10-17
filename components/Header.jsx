import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo  from '../public/knife-color.png'
import {
    FaBars,
    FaTimes,
    FaInstagram,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa'
  import { HiOutlineMail } from 'react-icons/hi'
  import { BsFillPersonLinesFill } from 'react-icons/bs'


const Header = () => {

    return (
        <div className='container bg-black sticky top-0 z-10 mx-auto px-2 rounded-xl bg-opacity-50 lg:px-8 '>
            <div className='absolute top-0 left-0 lg:px-8 px-4 w-full inline-block my-4 py-2'>
                <div className='sm:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer  hover: inline-block transition duration-500 transform hover:translate-x-4'>
                            <Image src={logo} height={64} width={64} />
                        </span>
                    </Link>
                </div>
                <div className='hidden sm:contents'>
                    <Link href='/blog'>
                        <span className='sm:float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Blog
                        </span>
                    </Link>
                    <Link href='/'>
                        <span className='sm:float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Home
                        </span>
                    </Link>
                </div>
            </div>
            <div className='hidden sm:flex fixed flex-col bottom-[5%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                        className='flex justify-between items-center w-full  text-gray-300'
                        href='https://www.instagram.com/acutaboveautofilms/'
                        target='_blank'
                        rel="noreferrer"
                        >
                        Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex px-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='mailto:ACutAboveAutoFilms@gmail.com'
                        target='_blank'
                        rel="noreferrer"
                        >
                        Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header