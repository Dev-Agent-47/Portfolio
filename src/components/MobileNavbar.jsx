import React, { useState } from 'react'
import { IoGridOutline } from "react-icons/io5";
import { CiHome, CiImageOn, CiLocationArrow1, CiUser, CiBoxList } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoDocumentTextOutline, IoBriefcaseOutline } from "react-icons/io5";

const icons = [
    {
        id: '1',
        icon: <CiHome size={20} />,
        name: 'Home',
    },
    {
        id: '2',
        icon: <CiUser size={20} />,
        name: 'About',
    },
    {
        id: '3',
        icon: <IoDocumentTextOutline size={20} />,
        name: 'Skills',
    },
    {
        id: '4',
        icon: <CiBoxList size={20} />,
        name: 'Service',
    },
    {
        id: '5',
        icon: <CiImageOn size={20} />,
        name: 'Portfolio',
    },
    {
        id: '6',
        icon: <CiLocationArrow1 size={20} />,
        name: 'Contact',
    },
]

const MobileNavbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={`z-20 hidden mob:block bg-container-color fixed w-full -bottom-[160px] ${toggle ? "-translate-y-[160px]" : ""} transition-all ease-in-out duration-500`}>
            <div className='flex  justify-between items-center border-[1px] border-text-color'>
                <a href="#Home"> <h1 className='text-2xl font-semibold py-2 ml-6'>Hariom</h1></a>
                {
                    toggle ? <MdOutlineCancel className='ml-auto mr-5' size={22} onClick={() => setToggle(false)} /> :
                        <IoGridOutline className='mr-6' size={20} onClick={() => setToggle(true)} />
                }
            </div>
            <div className='bg-container-color'>
                <div className='grid grid-cols-3 py-4'>
                    {
                        icons.map((item, id) => {
                            return (
                                <a href={`#${item.name}`}>
                                    <div key={id} className='flex-center flex-col py-3'>
                                        {item.icon}
                                        <h1 className='text-sm'>{item.name}</h1>
                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default MobileNavbar