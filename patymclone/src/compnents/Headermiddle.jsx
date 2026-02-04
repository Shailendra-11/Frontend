import React from 'react'
import Container from './Container';

const HeaderMiddle = () => {
  return (
    <>
    <div className='w-full h-[400px] pt-6 bg-backC'>
      <div className=' w-[85%]  flex justify-between'>
       <div className=' min-w-[65%] flex justify-center gap-6'>
      <div className='group'>
        <div className='flex flex-row items-center text-[1rem] font-semibold gap-1 group'>
        <img src="/assets/asset 3.svg" alt="Flights" className='w-6 h-6' />
        <p>Flights</p> 
        </div>
        <div className='w-[100%] h-[0.1rem] group-hover:bg-blue translate-x-1 duration-200 mt-1'>
        </div>
      </div>
      <div className='group'>
        <div className='flex flex-row items-center text-[1rem] font-semibold gap-1 group'>
        <img src="/assets/asset 3.svg" alt="Flights" className='w-6 h-6' />
        <p>Flights</p> 
        </div>
        <div className='w-[100%] h-[0.1rem] group-hover:bg-blue translate-x-1 duration-200 mt-1'>
        </div>
      </div>
      <div className='group'>
        <div className='flex flex-row items-center text-[1rem] font-semibold gap-1 group'>
        <img src="/assets/asset 4.svg" alt="Flights" className='w-6 h-6' />
        <p>Train</p> 
        </div>
        <div className='w-[100%] h-[0.1rem] group-hover:bg-blue translate-x-1 duration-200 mt-1'>
        </div>
      </div>
      <div className='group'>
        <div className='flex flex-row items-center text-[1rem] font-semibold gap-1 group'>
        <img src="/assets/asset 5.svg" alt="Flights" className='w-6 h-6' />
        <p>Buses</p> 
        </div>
        <div className='w-[100%] h-[0.1rem] group-hover:bg-blue translate-x-1 duration-200 mt-1'> 
        </div>
      </div>
      </div>

        <div className=''>
          <img src="/assets/asset 0.svg" alt="" />
          </div>

      </div>
      <Container/>
    </div> 
    </>
  )
}

export default HeaderMiddle;
