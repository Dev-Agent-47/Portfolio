import React from 'react'
import SectionTitle from './SectionTitle'
import { IoHourglassOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const QualificationSection = () => {
    return (
        <>
            <div>
                <SectionTitle title='Qualification' subtitle='My personal journey' />
            </div>
            <div className='flex justify-center items-center h-auto mt-10 mb-24'>
                <div>
                    <div className='mb-20'>
                        <div className='flex gap-1 items-center justify-center'>
                            <FaGraduationCap size={30} />
                            <h1 className='text-xl cursor-pointer font-[600]'>Education</h1>
                        </div>
                        {/* <div className='flex gap-1 items-center justify-center'>
                            <IoHourglassOutline size={30} />
                            <h1 className='text-xl cursor-pointer font-[600]'>Experience</h1>
                        </div> */}
                    </div>

                    <div className='flex justify-center relative w-[300px]'>
                        <div className=''>
                            <div className='flex flex-col justify-start items-start absolute left-3 -top-8 rounded-xl border-[1px] border-title p-3 bg-container-color'>
                                <h1 className='text-base font-[600]'>SSC</h1>
                                <p className='text-text-color text-sm font-[500]'>64 Percent</p>
                                <div className='flex justify-center items-center mt-3'>
                                    <CiCalendar size={15} color='#333333' />
                                    <p className='text-text-color text-sm font-[500] ml-1'> 2016</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-start absolute -left-3 -bottom-10 rounded-xl border-[1px] border-title p-3 bg-container-color'>
                                <h1 className='text-base font-[600]'>BCA</h1>
                                <p className='text-text-color text-sm font-[500]'>8.6 - C.G.P.A</p>
                                <div className='flex justify-center items-center mt-3'>
                                    <CiCalendar size={15} color='#333333' />
                                    <p className='text-text-color text-sm font-[500] ml-1'>2018 - 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[2px] h-[250px] bg-text-color'>
                            <div className='flex flex-col justify-between items-center h-[250px]'>
                                <div className='w-[12px] h-[12px] rounded-full bg-text-color'></div>
                                <div className='w-[12px] h-[12px] rounded-full bg-text-color'></div>
                                <div className='w-[12px] h-[12px] rounded-full bg-text-color'></div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex flex-col justify-start items-start absolute -right-3 top-20 rounded-xl border-[1px] border-title p-3 bg-container-color'>
                                <h1 className='text-base font-[600]'>HSC</h1>
                                <p className='text-text-color text-sm font-[500]'>58 Percent</p>
                                <div className='flex justify-center items-center mt-3'>
                                    <CiCalendar size={15} color='#333333' />
                                    <p className='text-text-color text-sm font-[500] ml-1'>2016 - 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QualificationSection