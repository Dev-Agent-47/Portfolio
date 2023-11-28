import React from 'react'
import SectionTitle from './SectionTitle'
import { useState } from 'react'
import app1 from '../assets/app1.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { Projects } from '../Data.jsx'

const PortfolioSection = () => {

    const [hover, setHover] = useState('all');
    const [project, setProject] = useState(Projects);

    const handleClick = (value) => {
        if (value === 'all') {
            const project = Projects;
            setHover(value)
            console.log(project)
            return setProject(project);
        } else {
            const project = Projects.filter(e => e.cat === value);
            setHover(value)
            console.log(project)
            return setProject(project);
        }
    }

    return (
        <>
            <div id='Portfolio'>
                <SectionTitle title='Portfolio' subtitle='My projects' />
            </div>
            <div className='flex justify-center items-center mb-16'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='flex gap-5 my-10'>
                        <div onClick={() => handleClick('all')} className={`text-[15px] font-[500] cursor-pointer px-3 py-1 rounded-xl ${hover === 'all' ? "active" : ""} hover:active`}>
                            All
                        </div>
                        <div onClick={() => handleClick('webapp')} className={`text-[15px] font-[500] cursor-pointer px-3 py-1 rounded-xl ${hover === 'webapp' ? "active" : ""} hover:active`}>
                            Web App
                        </div>
                        <div onClick={() => handleClick('mobileapp')} className={`text-[15px] font-[500] cursor-pointer px-3 py-1 rounded-xl ${hover === 'mobileapp' ? "active" : ""} hover:active`}>
                            Mobile App
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 mob:grid-cols-1'>

                        {
                            project.map((item, id) => {
                                return (
                                    <div key={id} className='bg-container-color rounded-2xl border-[1px] px-4 py-4 border-title overflow-hidden'>
                                        <div className='w-[250px] h-[150px] object-cover overflow-hidden rounded-xl border-[1px] border-title'>
                                            <img className='w-[250px] h-[150px]' src={item.img} alt="" />
                                        </div>
                                        <div className='ml-2 pt-5 cursor-pointer'>
                                            <h1 className='text-[18px] font-[600]'>{item.name}</h1>
                                            <span className='flex justify-start items-center gap-2 text-text-color'>
                                                <h1 className='text-[14px] text-text-color ml-1 font-medium'>View</h1>
                                                <FaArrowRight size={11} />
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioSection