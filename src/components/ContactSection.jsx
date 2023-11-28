import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import { IoSendOutline } from "react-icons/io5";
import { Contact } from '../Data'

const ContactSection = () => {
    return (
        <>
            <div id='Contact'>
                <SectionTitle title='Contact Me' subtitle='Get in touch' />
            </div>
            <div className='flex justify-center items-center mb-16'>
                <div className='flex gap-32 mt-10 tab1:gap-12 tab1:flex-col '>
                    <div className='pt-12 tab1:pt-0 flex-center flex-col'>
                        {
                            Contact.map((item, id) => {
                                return (
                                    <div key={id} className='flex flex-col items-center justify-center bg-container-color w-[250px] rounded-xl border-[1px] border-text-color my-5 py-5'>
                                        {item.icon}
                                        <h1 className='text-[14px] font-semibold mt-3'>{item.name}</h1>
                                        <h1 className='text-[12px]'>{item.userid}</h1>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div>
                        <h1 className='text-center text-lg font-semibold mb-6'>Write me your project</h1>
                        <div className='mb-5'>
                            <label className='text-title ml-3 text-base' htmlFor="">Name</label>
                            <div className='mob:w-[250px] px-4 rounded-lg border-[2px] border-text-color overflow-hidden w-[350px] h-12 flex-center'>
                                <input className='bg-body-color outline-none h-10 w-full text-text-color' type="text" placeholder='Insert your name' />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className='text-title ml-3 text-base' htmlFor="">Email</label>
                            <div className='mob:w-[250px] px-4 rounded-lg border-[2px] border-text-color overflow-hidden w-[350px] h-12 flex-center'>
                                <input className='bg-body-color outline-none h-10 w-full text-text-color' type="email" placeholder='Insert your email' />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className='text-title ml-3 text-base' htmlFor="">Project</label>
                            <div className='mob:w-[250px] px-4 rounded-lg border-[2px] border-text-color overflow-hidden w-[350px] h-[200px] flex-center'>
                                <textarea rows="7" cols="" className='bg-body-color outline-none h-auto w-full text-text-color' type="text" placeholder='Write your project' />
                            </div>
                        </div>
                        <div className='mob:flex-center'>
                            <Button name="Send Message" icon={<IoSendOutline style={{ color: 'white', fontSize: '20px' }} />} style="bg-title hover:bg-title-dark text-container-color" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection