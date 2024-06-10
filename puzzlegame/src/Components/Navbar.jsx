import React, { useState } from 'react'
import icon from '../Assets/images/icon.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log('navtoggle')
    setIsOpen(!isOpen);
  }
  return (
    <div className='md:flex pt-5 w-full sticky md:justify-between md:items-center '>
        <div className='flex items-center gap-1 md:gap-4'>
            <h3 className='text-5xl flex items-center justify-center font-Slackey text-white hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>
                Puzzlit
            </h3>
        </div>
        <div className=' md:opacity-100 hidden md:flex md:flex-row lg:gap-16 gap-8 text-white'>
                <h4 className='text-xl hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>HOME</h4>
                <h4 className='text-xl hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>GAME</h4>
                <h4 className='text-xl hover:cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out'>ABOUT US</h4>
        </div>
        <img src={icon} onClick={toggleNavbar} alt="" className='hover:cursor-pointer h-10 md:hidden absolute top-5 right-0'/>
       
        {isOpen && (
         <div className='flex-col p-3 bg-backgroundSecondary flex gap-3 shadow md:hidden mt-4 justify-start sm:items-center  text-black'>
              <h4 className='text-xl sm:text-2xl  hover:cursor-pointer'>HOME</h4>
              <h4 className='text-xl sm:text-2xl  hover:cursor-pointer'>GAME</h4>
              <h4 className='text-xl sm:text-2xl  hover:cursor-pointer'>ABOUT US</h4>
              
          </div>
     
        )}
    </div>
  )
}
