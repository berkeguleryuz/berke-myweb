"use client"
import { useState } from 'react';
import Logo from '@/components/Logo'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SiHyperledger } from "react-icons/si";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Hire from './Hire';


const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
       {title}
      <span className="h-1 inline-block bg-black absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <Link href={href} className={`${className} relative group text-black`} onClick={handleClick}>
       {title}
      <span className="h-1 inline-block bg-black absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">&nbsp;</span>
    </Link>
  )
}

const Nav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }; 

  const isOpen = () => {
    if(nav) {
    return <AiOutlineClose />
  } else {
    return <AiOutlineMenu />
  }
}

  return (
    <header className='flex w-full h-20 font-bold items-center justify-between px-32 py-8 text-xl relative lg:px-16 md:px-12 sm:px-8'>
    
    <button className="flex-col justify-start items-center p-2 hidden lg:flex sm:absolute" onClick={handleNav}>
     {isOpen()}
    </button>


    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav className='flex'>
        <Link href="/">
          <SiHyperledger className='mr-4 mt-1'/>
        </Link>
          <CustomLink href="/" title="Berke Güleryüz" className='mr-7'/>
      </nav>

      <div className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://twitter.com/BerkeGuleryuz" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 mx-3'><TwitterIcon /></motion.a>
        <motion.a href="https://linkedin.com/in/berke-guleryuz/" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 mx-3'><LinkedInIcon /></motion.a>
        <motion.a href="https://github.com/berkeguleryuz" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 ml-3'><GithubIcon /></motion.a>
      </div>
    </div>

    { 
      nav ? 
      <div className='min-w-[60vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300/75 rounded-lg backdrop-blur-md py-32'>
        <div className='mb-5'>
          <Link href="/" toggle={handleNav} >
            <SiHyperledger />
          </Link>
        </div>
      <nav className='flex items-center text-center justify-center mb-5 ml-2'>
            <CustomMobileLink href="/" title="Berke Güleryüz" className='' toggle={handleNav} />
        </nav>
  
        <div className='flex mr-2 items-center justify-between text-center'>
          <motion.a href="https://twitter.com/BerkeGuleryuz" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 mx-3'><TwitterIcon /></motion.a>
          <motion.a href="https://linkedin.com/in/berke-guleryuz/" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 mx-3'><LinkedInIcon /></motion.a>
          <motion.a href="https://github.com/berkeguleryuz" target="_blank" whileHover={{ y:-2, x:-1}} whileTap={{ scale:0.9 }} className='w-6 ml-3'><GithubIcon /></motion.a>
        </div>
        <Hire />
          <button className=" justify-center items-center p-2 ml-1 hidden lg:flex" onClick={handleNav}><AiOutlineClose /></button>
      </div>

      : null
    }


      <div className='absolute left-[48%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Nav;