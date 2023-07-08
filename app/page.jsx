"use client"
import Image from 'next/image'
import "@/styles/globals.css";
import profilePic from "@/public/images/profile/berke0yeni.png"
import AnimatedText from '@/components/AnimatedText';
import Hire from '@/components/Hire';
import Layout from '@/components/Layout';


export default function Home() {
  const ReactRotatingText = require('react-rotating-text');
  return (
    <>
    <div className="flex items-center w-full min-h-screen">
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-center w-full h-full lg:flex-col md:self-center'>
          <div className='w-1/3 ml-20 lg:w-1/2 md:w-2/5 md:mr-24 md:justify-center sm:w-2/4'>
            <Image src={profilePic} alt="Berke" className='w-full h-auto lg:hidden md:inline-block' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
          </div>
            <div className='w-1/2 flex flex-col items-center self-center p-12 xl:p-24 lg:p-16 lg:w-full md:p-1 sm:p-8'>
            <AnimatedText text="I'm making future visions and dreams come true." className='!text-5xl xl:!text-3xl lg:!text-4xl md:!text-2xl sm:!text-2xl' />
            <div className='static'>
            <p className='font-bold text-center items-center my-2 text-base'>
              As a Developer, I am <span className="text-[#5651e5]"><ReactRotatingText items={['turning your ideas into innovative web projects.', 'creating websites for you.', 'building web applications.']} /></span>
            </p>
            </div>
              <div className='flex items-center self-center mt-2 lg:self-center'>
                <Hire />
              </div>
            </div>  
          </div>
        </Layout>
    </div>
    </>
  );
}
