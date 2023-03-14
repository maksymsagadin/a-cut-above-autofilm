const CategoriesFilter = ({ categories, onFilterChange }) => {
    return (
        <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-4 mb-4 lg:mb-8'>
            <h3 className='text-xl mb-3 font-semibold border-b-2 border-yellow-400 pb-3'>
                { categories.length < 2 ? 'Category' : 'Categories' }
            </h3>
            <ul className='columns-2 sm:columns-3 items-start lg:flex lg:justify-evenly gap-4'>
                {categories.map((category) => (
                    <li key={category.name} className='flex lg:flex-col items-center py-1 md:p-2'>
                        <input type='checkbox' onChange={onFilterChange} id={category.name} name={category.name} value={category.name} className='w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                        <label htmlFor={category.name} className='px-2 lg:pt-2 text-center'>{category.name}</label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoriesFilter