import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const CategoriesFilter = ({ categories }) => {
    // console.log(categories)
    return (
        <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-8 mb-8 pb-12'>
            <h3 className='text-xl mb-3 font-semibold border-b-2 pb-3'>
                { categories.length < 2 ? 'Category' : 'Categories' }
            </h3>
            <div>
                {categories.map((category,index) => (
                    <div key={category.name}>
                        <input type='checkbox' id={category.name} name={category.name} value={category.name} />
                        <label for={category.name} className='px-4'>{category.name}</label>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default CategoriesFilter