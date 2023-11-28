import React from 'react'


const Navbar = () => {
    return (
        <>
            <div className='flex justify-between px-44 tab1:px-10 py-5 sticky top-0 z-10 bg-body-color border-b-[1px] border-title mob:hidden'>
                <div>
                    <h1 className='text-3xl font-semibold cursor-pointer'>Hariom</h1>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <a href="#Home"> <li className='cursor-pointer hover:text-title-dark'>Home</li></a>
                        <a href="#About"><li className='cursor-pointer hover:text-title-dark'>About</li> </a>
                        <a href="#Skills"><li className='cursor-pointer hover:text-title-dark'>Skills</li></a>
                        <a href="#Service"><li className='cursor-pointer hover:text-title-dark'>Services</li></a>
                        <a href="#Portfolio"><li className='cursor-pointer hover:text-title-dark'>Portfolio</li></a>
                        <a href="#Contact"><li className='cursor-pointer hover:text-title-dark'>Contact</li></a>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar