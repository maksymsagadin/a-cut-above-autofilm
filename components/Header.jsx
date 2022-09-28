import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((results) => setCategories(results));
    }, []);

    return (
        <div className='container bg-black sticky top-0 z-10 mx-auto px-2 rounded-xl bg-opacity-50 lg:px-8 '>
            <div className='absolute top-0 left-0 lg:px-8 px-4 w-full inline-block my-4 py-2'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-x-4'>
                            <p>A Cut Above</p>
                            <p className='text-2xl'>AutoFilms</p>
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    <Link href='/blog'>
                        <span className='md:float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Blog
                        </span>
                    </Link>
                    <Link href='/'>
                        <span className='md:float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                            Home
                        </span>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header