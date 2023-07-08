"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" 
        className='w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold' 
        whileHover={{ 
            backgroundColor:["#121212", "#FF7F50","#9ACD32","#ADD8E6","#6495ED", "#ed7611", "#121212"],
            transition: {duration:1, repeat: Infinity}
         }}>
            BG
        </MotionLink>
    </div>
  )
}

export default Logo