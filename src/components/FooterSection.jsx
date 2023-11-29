import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
    return (
        <div className='bg-container-color border-t-[1px] h-auto pb-5 flex-center flex-col'>
            <h1 className='text-2xl font-semibold cursor-pointer my-10'>Hariom</h1>
            <ul className='flex gap-5 flex-wrap flex-center mob:hidden'>
                <a href="#Home"> <li className='cursor-pointer hover:text-title-dark'>Home</li></a>
                <a href="#About"><li className='cursor-pointer hover:text-title-dark'>About</li> </a>
                <a href="#Skills"><li className='cursor-pointer hover:text-title-dark'>Skills</li></a>
                <a href="#Service"><li className='cursor-pointer hover:text-title-dark'>Services</li></a>
                <a href="#Portfolio"><li className='cursor-pointer hover:text-title-dark'>Portfolio</li></a>
                <a href="#Contact"><li className='cursor-pointer hover:text-title-dark'>Contact</li></a>
            </ul>
            <div className='flex-center gap-5 mt-10 mob:mt-0'>
                <span className='bg-title p-2 rounded-lg  cursor-pointer'> <a target="_blank" rel="noopener noreferrer" href="https://github.com/Im-ScrappyTheCholo?tab=repositories"> <FaGithub color='white' size={20} /></a></span>
                <span className='bg-title p-2 rounded-lg cursor-pointer'>  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hariom-gaud-aa5986206/"> <FaLinkedin color='white' size={20} /></a></span>
            </div>
            <h1 className='text-[12px] mt-10 mob:mb-10'>  <span className='mr-2'>&#169;</span>Hariom | Portfolio.</h1>
        </div>
    )
}

export default FooterSection