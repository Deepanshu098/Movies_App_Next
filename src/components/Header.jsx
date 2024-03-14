import React from 'react'
import MenuItem from './MenuItem'
import { IoMdHome } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";


function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-3'>
            <MenuItem title="home" address="/" Icon={IoMdHome}/>
            <MenuItem title="about" address="/about" Icon={IoInformationCircle}/>
        </div>
        <div className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-orange-500 py-1 px-2 rounded-lg'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </div>
    </div>
  )
}

export default Header