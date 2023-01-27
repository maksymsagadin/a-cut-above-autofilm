import React from 'react'

const SectionHeadline = ({ children, title, id}) => {
    return (
        <div id={id} className='w-full h-full my-10 lg:my-16 relative'>
            <div className='flex flex-col justify-center px-8'>
                <div className='pb-8 px-2'>
                    <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
                        {title}
                    </p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default SectionHeadline