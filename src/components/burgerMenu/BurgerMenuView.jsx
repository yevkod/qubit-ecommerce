import React from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-scroll'

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }
    
    return (
        <div className='flex z-50 flex-col py-10 pl-24 pr-16 min-h-screen shadow-md rounded-lg'>
            <ul className='flex flex-col justify-center text-[24px] text-center py-5 w-48 gap-3'>
                <li className='hover:underline hover:scale-110  transition-all border-b-2 border-gray-300'>
                    <Link to="growView" smooth={true} duration={500} onClick={handleMenu}>Why Qubit?</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="commerceView" smooth={true} duration={500} onClick={handleMenu}>Growth</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="campaignView" smooth={true} duration={500} onClick={handleMenu}>Solutions</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="doView" smooth={true} duration={500} onClick={handleMenu}>Case studies</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="industryView" smooth={true} duration={500} onClick={handleMenu}>Resources</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all border-b-2 border-gray-300'>
                    <Link to="bookView" smooth={true} duration={500} onClick={handleMenu}>More</Link>
                </li>
            </ul>
            <div className='flex flex-col pt-5 gap-5 items-center'>
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
