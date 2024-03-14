'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


function DarkModeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme();
    const[mounted,setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(()=>{
        setMounted(true)
    },[])
  return (
    <div>
        {
            mounted && 
        (
            currentTheme === 'dark' ?
            (
                <MdLightMode onClick={()=>setTheme('light')} className='text-2xl cursor-pointer'/>
            )
            :
            (
                <MdDarkMode onClick={()=>setTheme('dark')} className='text-2xl cursor-pointer'/>
            )
        )
            }
    </div>
  )
}

export default DarkModeSwitch