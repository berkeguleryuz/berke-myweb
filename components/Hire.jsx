import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'


const Hire = (e) => {
  return (
    <div className='left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-black animate-spin-slow"}/>
            <a href="mailto:berkeguleryuz@hotmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black'>
                Hire Me
            </a>
        </div>
    </div>
  );
}

export default Hire