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
        <div className='container mx-auto px-2 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-6'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-x-4'>
                            <p>A Cut Above</p>
                            <p className='text-2xl'>AutoFilms</p>
                        </span>
                    </Link>
                </div>
                <div className='hidden lg:float-left lg:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right text-3xl p-4 font-semibold cursor-pointer text-gray-200 hover:text-blue-300 inline-block transition duration-500 transform hover:translate-y-2'>
                               {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header