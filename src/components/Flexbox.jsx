import React from 'react'
import bg from '../assects/bg.jpg';

export default function Flexbox() {
  return (
    <div className='flex flex-col pt-14 '>
      <img src={bg} alt='bg' className='w-full md:h-[550px]' />

      <div className='md:pl-16 md:pr-16 pl-4 pr-4 text-center'>
        <h3 className='md:text-3xl text-xl pt-7 md:pt-24 pb-9 font-bold'>Launch fast your great products.</h3>

        <div className='md:flex md:justify-between gap-16 text-start'>
          <div className='md:w-1/3 mb-8 md:mb-0 shadow-md hover:shadow-[#638889]'>
            <div className='bg-cover rounded-md' style={{ backgroundImage: `url(${bg})`, height: '200px' }}></div>
            <div className='pl-2 pr-2'>
              <div className='pt-6 md:pt-12 md:text-3xl text-xl font-bold'>Launch fast your great products.</div>
              <div className='pb-6 pt-4 '>Start saving your time with Framer Wireframe Web UI Kit. Hundreds of premade layouts and templates.</div>
              <div className='pb-4 text-center'><button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-sm  transition ease-in-out delay-150 hover:text-black  hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300'>BUTTON</button> </div>
            </div>
          </div>

          <div className='md:w-1/3 mb-8 md:mb-0 shadow-md hover:shadow-[#638889]'>
            <div className='bg-cover rounded-md' style={{ backgroundImage: `url(${bg})`, height: '200px' }}></div>
            <div className='pl-2 pr-2'>
              <div className='pt-6 md:pt-12 md:text-3xl text-xl font-bold'>Launch fast your great products.</div>
              <div className='pb-6 pt-4 '>Start saving your time with Framer Wireframe Web UI Kit. Hundreds of premade layouts and templates.</div>
              <div className='pb-4 text-center'><button className='rounded pb-2  pt-2 pl-10 pr-10 bg-[#638889] text-white font-semibold text-sm  transition ease-in-out delay-150  hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300'>BUTTON</button> </div>
            </div>
            </div>
          

            <div className='md:w-1/3 mb-8 md:mb-0 shadow-md hover:shadow-[#638889]'>
            <div className='bg-cover rounded-md' style={{ backgroundImage: `url(${bg})`, height: '200px' }}></div>
            <div className='pl-2 pr-4'>
              <div className='pt-6 md:pt-12 md:text-3xl text-xl font-bold'>Launch fast your great products.</div>
              <div className='pb-6 pt-4 '>Start saving your time with Framer Wireframe Web UI Kit. Hundreds of premade layouts and templates.</div>
              <div className='pb-4 text-center'><button className='rounded pb-2 pt-2 pl-10 pr-10 bg-[#638889] text-white font-semibold text-sm  transition ease-in-out delay-150  hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300'>BUTTON</button> </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    

  
  )
}
