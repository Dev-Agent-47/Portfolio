import React from 'react'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'
import { Frontend, Backend } from '../Data.jsx'

const frontend_data = Frontend;
const backend_data = Backend;

const SkillSection = () => {
    return (
        <>
            <div id='Skills'>
                <SectionTitle title='Skills' subtitle='My technical level' />
            </div>
            <div className='flex justify-center items-center  h-auto tab1:h-auto mb-24 mt-16'>
                <div className='flex justify-center items-center gap-20 tab1:flex-col tab1:gap-12 tab1:mt-12'>
                    <SkillCard title='Frontend' data={frontend_data} />
                    <SkillCard title='Backend' data={backend_data} />
                </div>
            </div>
        </>
    )
}

export default SkillSection