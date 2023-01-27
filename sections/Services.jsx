import React from 'react'
import { SectionHeadline } from '../components'

const Services = ({ data }) => {
    const { greeting, services } = data
    return (
        <SectionHeadline title='Services' id='services'>
            {/* Center Text */}
            <div className='flex justify-center text-lg lg:text-2xl indent-4 text-justify md:text-center md:w-2/3 mx-auto my-4 md:my-8 lg:my-12 '>
                {greeting}
            </div>
            <div className='grid md:grid-cols-3 gap-8 lg:gap-10  md:px-4 lg:px-8 xl:px-16 mt-4 text-center'>
                {services.map((service) => (
                    <div key={service.serviceTitle} className='sm:text-lg lg:text-2xl border-2 border-yellow-400 p-4 rounded-lg'>
                        <p className='mb-2 font-bold'>{service.serviceTitle}</p>
                        <span className='text-base'>{service.serviceDescription}</span>
                    </div>
                ))}
            </div>
        </SectionHeadline>
    )
}

export default Services