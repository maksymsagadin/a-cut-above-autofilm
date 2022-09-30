import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center text-center h-full'>
        {/* <p className='text-green-200'>Autofilms</p> */}
        <h1 className='text-5xl sm:text-8xl font-bold text-yellow-400'>
          A Cut Above
        </h1>
        <h2 className='text-2xl sm:text-6xl font-bold text-[#d7e1f3]'>
          Protection like no other.
        </h2>
        <p className='py-4 max-w-[600px] text-[#eaf1f9]'>
        We have an extensive range of stunning, unique design options, the STEK DYNOseries redefines the possibilities of an automotive customization.
        </p>
        <div>
          <button className='border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-[#3378ca] hover:border-[#3378ca]'>
            View Work
          </button>
        </div>
      </div>
    </div>
  )
}
export default HeroSection

// Le mans color code - text-[#336c98] or #3378ca