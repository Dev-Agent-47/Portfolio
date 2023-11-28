import React from 'react'

const Button = ({ name, icon, style }) => {
    return (
        <button className={`flex justify-center items-center p-4 px-5 gap-3 rounded-2xl ${style}`}>
            <h1 className='text-container-color text-base'>{name}</h1>
            {icon}
        </button>
    )
}

export default Button