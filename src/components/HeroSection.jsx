import React from 'react'
import Hero from '../assets/hero.jpg'
import Button from './Button'
import { IoSendOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from '../assets/resume.pdf'

const HeroSection = () => {
    return (
        <>
            <div id='Home' className='flex items-center justify-center relative h-auto tab1:h-auto mt-16 mb-24 mob:mt-0'>
                <div className='flex justify-center items-center gap-32 tab1:gap-14 tab1:mt-10 tab1:flex-col-reverse'>
                    <div className='absolute left-28 tab1:top-36 web:left-5'>
                        <FaGithub size={25} className='mb-5 cursor-pointer' />
                        <a href="https://www.linkedin.com/in/hariom-gaud-aa5986206/">  <FaLinkedin size={25} className='cursor-pointer' /></a>
                    </div>
                    <div className='absolute flex justify-center items-center gap-2 bottom-9 tab1:-bottom-[50px] tab1:mb-16 tab1:hidden web:left-[300px] left-[450px]'>
                        <div className='h-9 w-5 rounded-xl border-title border-2 flex justify-center items-start'>
                            <div className='h-[9px] w-[2px] bg-title rounded-full mt-2 animate-bounce'></div>
                        </div>
                        <h1 className='text-xs'>Scroll Down</h1>
                    </div>
                    <div className='flex-1 mob:flex-center flex-col mob:px-5 tab1:mt-10'>
                        <span className='flex justify-center items-center gap-2 mob:w-full'>
                            <div className=' border-[1px] border-title rounded-md'><img className='w-12 h-12' src="https://media.tenor.com/yWSRmymbuBkAAAAC/waving-hi.gif" alt="" /></div>
                            <h1 className='text-5xl mob:text-3xl font-[600]'>Hariom Gaud</h1>
                        </span>
                        <div className='flex justify-start items-center my-3 mob:w-full mob:justify-center'>
                            <div className='h-[1.4px] mob:w-[40px] w-[90px] bg-text-color mr-5' />
                            <h1 className='text-xl mob:text-[14px] font-[500]'>Full Stack Developer</h1>
                            <div className='hidden mob:block  h-[1.4px] mob:w-[40px] w-[90px] bg-text-color ml-4' />
                        </div>
                        <p className='mb-14 w-[400px] mob:w-auto mob:text-[15px] text-[15px] text-text-color mob:ml-5'>I'm creative designer based in Mumbai, and I'm very passionate and dedicated to my work.</p>
                        <a href={resume} download="resume">  <Button name="Download CV" icon={<IoSendOutline style={{ color: 'white', fontSize: '20px' }} />} style="bg-title hover:bg-title-dark text-container-color" /></a>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <div className={`h-[320px] w-[320px] mob:h-[220px] mob:w-[220px] object-cover object-center`}>
                            <img className='anime' src={Hero} alt="hero-img" />
                        </div>
                    </div>
                </div>

            </div>
            {/* mobile navbar */}

        </>
    )
}

export default HeroSection