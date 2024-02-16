import React from 'react'
import { Button } from '../Button/Button'

export const BurgerMenuView = () => {
    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md rounded-lg'>
            <ul className=''>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Why Qubit?</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Products</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Solutions</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Case studies</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Resources</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>More</li>
            </ul>
            <div className='flex flex-col pt-5 gap-5'>
                <div>
                    <Button text='Book a demo' className='text-white rounded-3xl px-6' />
                </div>
                <div className='cursor-pointer text-center hover:underline'>
                    <span className='font-sans text-black'>Log In</span>
                </div>
            </div>
        </div>
    )
}
