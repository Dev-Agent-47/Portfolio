import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <h1 className='text-sm text-text-color'>{subtitle}</h1>
        </div>
    )
}

export default SectionTitle