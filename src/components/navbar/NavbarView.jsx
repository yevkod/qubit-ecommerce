import React from 'react'
import { Button } from '../Button/Button'

export const NavbarView = () => {
    return (
        <div className='flex h-[60px] max-w-[90rem] bg-white justify-between items-center mx-auto'>
            <div className='font-sans text-3xl font-bold cursor-pointer'>Qubit.</div>
            <ul className='flex gap-10 font-sans'>
                <li className='hover:underline'>Why Qubit?</li>
                <li className='hover:underline'>Products</li>
                <li className='hover:underline'>Solutions</li>
                <li className='hover:underline'>Case studies</li>
                <li className='hover:underline'>Resources</li>
                <li className='hover:underline'>More</li>
            </ul>
            <div className='flex gap-5 items-center'>
                <div>
                    <Button text='Book a demo' className='text-white rounded-3xl px-6' />
                </div>
                <div className='cursor-pointer'>
                    <span className='font-sans text-black'>Log In</span>
                </div>
            </div>
        </div>
    )
}
