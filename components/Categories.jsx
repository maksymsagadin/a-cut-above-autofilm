import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((results) => setCategories(results));
  }, []);

  return (
    <div className='bg-gray-200 bg-opacity-40 text-gray-200 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-3 font-semibold border-b-2 pb-3'>
        { categories.length < 2 ? 'Category' : 'Categories' }
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} >
          <span className='cursor-pointer block pb-2'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories