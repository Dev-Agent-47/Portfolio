import React from 'react'
import { Frontend, Backend } from '../Data.jsx'
import { SiTailwindcss } from "react-icons/si";

const SkillCard = ({ title, data }) => {

    return (
        <div className='bg-container-color rounded-3xl border-text-color border-[1px] h-[350px] w-[400px] mob:w-[300px]'>
            <div className='py-5 px-10 mob:px-5'>
                <h1 className='text-center text-lg font-semibold my-5'>{title}</h1>
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-2 gap-x-16 gap-y-5 mob:gap-x-10'>
                        {
                            data.map((item) => {
                                return (
                                    <div className='flex justify-start items-center gap-2'>
                                        {item.icon}
                                        <div>
                                            <h1 className='text-sm font-[600]'>{item.name}</h1>
                                            <h1 className='text-xs'>{item.level}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard