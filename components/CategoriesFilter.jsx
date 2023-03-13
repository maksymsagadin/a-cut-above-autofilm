import React, { useState, useEffect } from 'react'

const CategoriesFilter = ({ categories }) => {
    // Sorting Categories Alphabetically
    categories.sort(function(a,b) {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })
    return (
        <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-4 mb-4 lg:mb-8'>
            <h3 className='text-xl mb-3 font-semibold border-b-2 border-yellow-400 pb-3'>
                { categories.length < 2 ? 'Category' : 'Categories' }
            </h3>
            <ul className='columns-2 sm:columns-3 items-start lg:flex lg:justify-evenly gap-4'>
                {categories.map((category) => (
                    <li key={category.name} className='flex lg:flex-col items-center p-2'>
                        <input type='checkbox' id={category.name} name={category.name} value={category.name} className='w-4 h-4 bg-gray-600 border-gray-700 rounded focus:ring-yellow-400 focus:bg-yellow-600'/>
                        <label for={category.name} className='px-2 lg:pt-2 text-center'>{category.name}</label>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default CategoriesFilter