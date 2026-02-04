import React from 'react'
import { ArrowDown } from 'lucide-react';

const Header = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-center gap-5 p-4 items-center font-Fontext shadow-xl ">
        <img className='cursor-pointer' src="public\assets\asset 0.svg" alt='logo' />
        <p className='hover:bg-slate-400 transition-[200] duration-200 p-3 rounded'>Ticket Booking</p>
        <p className='hover:bg-slate-400 transition-[200] duration-200 p-3 rounded' >Recharge & Bills</p>
        <p className='hover:bg-slate-400 transition-[200] duration-200 p-3 rounded'>Payments & Services</p>
        <p className='hover:bg-slate-400 transition-[200] duration-200 p-3 rounded'>Paytm for Business</p>
        <p className='hover:bg-slate-400 transition-[200] duration-200 p-3 rounded'>Company</p>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1'>
            <ArrowDown size={18} />
            <span>Download</span>
          </div>
          <buttton className=' px-3 flex items-center gap-1 bg-darkblue rounded-full '>
            <img className='ml-[-0.5rem]' src="public\assets\asset 2.svg" alt="logo" />
            <span className='text-white'>Sig in</span>
          </buttton>
        </div>
      </div>
    </nav>
    
  )
}

export default Header




