import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full h-full my-10 relative'>
            <div className='flex flex-col justify-center md:text-right px-8'>
                <div className='pb-8 px-2'>
                    <p className='text-4xl px-2 font-bold border-b-4 border-yellow-400'>
                    Services
                    </p>
                </div>
                {/* Center Text */}
                <div className='flex justify-center text-lg lg:text-2xl indent-4 text-justify md:text-center md:w-2/3 mx-auto my-4 md:my-8 lg:my-16 '>
                    We offer many types of automotive film wrapping services, from full color changes to custom applications wrapping for a unique style that matches everyone's taste.
                </div>
                <div className='grid md:grid-cols-3 gap-8 lg:gap-16  md:px-4 lg:px-8 xl:px-16 mt-4 text-center'>
                    <div className='sm:text-lg lg:text-2xl border-2 p-4 rounded-lg'>
                        <p className='mb-2 font-bold'>
                            Color Change
                        </p>
                        <p className='text-base'>
                            This can be as simple as using a colored PPF or as complex as removing body panels to vinyl wrap the door jambs for a complete color change.
                        </p>
                    </div>
                    <div className='sm:text-lg lg:text-2xl border-2 p-4 rounded-lg'>
                        <p className='mb-2 font-bold'>
                            Paint Protection Film
                        </p>
                        <p className='text-base'>
                            Stek offers their Paint Protection Film in various colors & patterns as well as the traditional clear for those who simply want to protect the factory paint.
                        </p>
                    </div>
                    <div className='sm:text-lg lg:text-2xl border-2 p-4 rounded-lg'>
                        <p className='mb-2 font-bold'>
                            Custom Wraps
                        </p>
                        <p className='text-base'>
                            If you have a particular design in mind that you want to come alive or simply are tired of looking at a certain trim piece and want to upgrade it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services