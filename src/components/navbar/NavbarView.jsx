import React from 'react';
import { Button } from '../Button/Button';
import burger from '../../assets/img/burgerIcon.svg';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex h-[60px] w-full fixed p-3 z-[10000] bg-white shadow-md max-w-[90rem] justify-between items-center mx-auto'>
            <div className='font-sans text-3xl font-bold cursor-pointer'>Qubit.</div>
            <ul className='hidden lg:flex gap-10 font-sans'>
                <li className='hover:underline'>Why Qubit?</li>
                <li className='hover:underline'>Products</li>
                <li className='hover:underline'>Solutions</li>
                <li className='hover:underline'>Case studies</li>
                <li className='hover:underline'>Resources</li>
                <li className='hover:underline'>More</li>
            </ul>
            <div className='flex lg:hidden mr-5 justify-end w-10 cursor-pointer' onClick={handleMenu}>
                <img src={burger} alt='burger' />
            </div>
            <div className='hidden lg:flex gap-5 items-center'>
                <div>
                    <Button text='Book a demo' className='text-white rounded-3xl px-6' />
                </div>
                <div className='cursor-pointer hover:underline'>
                    <span className='font-sans text-black'>Log In</span>
                </div>
            </div>
        </div>
    )
}
