import React from 'react'

export const Button = ({ text, className }) => {
    return (
        <div>
            <button className={`bg-[#6F2CFF] hover:bg-[#643abf] active:bg-[#52309c] py-2 px-3 ${className}`}>
                <span className='font-sans'>{text}</span>
            </button>
        </div>
    )
}