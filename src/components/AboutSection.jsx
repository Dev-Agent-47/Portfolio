import React from 'react'
import SectionTitle from './SectionTitle'
import Hero from '../assets/hero.jpg'
import { AboutInfo } from '../Data.jsx'
import { BsFiletypePdf } from "react-icons/bs";
import Button from './Button.jsx';
import resume from '../assets/resume.pdf'

const AboutSection = () => {
    return (
        <>
            <div id='About'>
                <SectionTitle title='About Me' subtitle='My introduction' />
            </div>
            <div className='flex justify-center items-center h-auto tab1:h-auto mt-16 mob:mt-0 mb-24'>
                <div className='flex gap-32 web:gap-16 justify-center items-center tab1:flex-col tab1:gap-12 tab1:mt-12'>
                    <div className={` h-[320px] w-[320px] mob:h-[220px] mob:w-[220px] rounded-3xl object-cover overflow-hidden object-center`}>
                        <img className='object-cover' src={Hero} alt="hero-img" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex-center flex-col px-3'>
                            <div className='flex gap-3 w-[100%]'>
                                {
                                    AboutInfo.map((item) => {
                                        return <div className='flex-1 text-center flex-col justify-center items-center bg-container-color p-5 rounded-xl border-[1px] border-text-color '>
                                            <span className='flex justify-center items-center mb-2'>{item.icon}</span>
                                            <h1 className='text-sm mob:text-xs font-[600] my-1'>{item.title}</h1>
                                            <h1 className='text-[12px] mob:text-[10px] text-text-color'>{item.subtitle}</h1>
                                        </div>
                                    })
                                }
                            </div>
                            <div className='mob:px-6 mob:flex-center mob:flex-col'>
                                <p className='mb-14 mt-5 w-[400px] mob:w-auto text-[15px] text-text-color'>Frontend Developer, I create web pages with UI/UX interfaces. I have years of experience and many clients are happy with the Projects carried out by me.</p>
                                <a href={resume} target='_blank' download="resume"><Button name="Download CV" icon={<BsFiletypePdf style={{ color: 'white', fontSize: '20px' }} />} style="bg-title hover:bg-title-dark text-container-color" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection