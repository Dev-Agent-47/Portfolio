import React from 'react'
import SectionTitle from './SectionTitle'
import { FaMobileAlt } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";

const ServiceSection = () => {
    return (
        <>
            <div id='Service'>
                <SectionTitle title='Services' subtitle='What I offer' />
            </div>
            <div className='flex justify-center items-center  h-auto mb-24 mob:h-auto mt-16'>
                <div className='flex gap-32 mob:gap-12 mob:mt-12 mob:flex-col'>
                    <div className='flex flex-col justify-center items-center rounded-2xl w-[200px] h-[250px] bg-container-color border-text-color border-[1px]'>
                        <LuMonitorCheck size={50} />
                        <h1 className='text-lg mt-5 font-[500]'>Website Apps</h1>
                        <p className='text-[15px] text-text-color text-center mt-5'>Full stack Web applications.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-2xl w-[200px] h-[250px] bg-container-color border-text-color border-[1px]'>
                        <FaMobileAlt size={50} />
                        <h1 className='text-lg mt-5 font-[500]'>Mobile Apps</h1>
                        <p className='text-[15px] text-text-color text-center mt-5'>Mobile apps for android and ios device.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection