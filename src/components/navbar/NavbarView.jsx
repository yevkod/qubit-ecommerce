import React from 'react';
import { Button } from '../Button/Button';
import burger from '../../assets/img/burgerIcon.svg';
import { Link } from 'react-scroll';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex h-[60px] fixed rounded-b-lg p-5 z-[10000] bg-white shadow-md w-full justify-between items-center mx-auto'>
            <div className='font-sans text-3xl font-bold cursor-pointer hover:scale-110 transition-all'> <Link to="mainView" smooth={true} duration={500}>Qubit.</Link></div>
            <ul className='hidden lg:flex gap-10 font-sans'>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="growView" smooth={true} duration={500}>Why Qubit?</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="commerceView" smooth={true} duration={500}>Growth</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="campaignView" smooth={true} duration={500}>Solutions</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="doView" smooth={true} duration={500}>Case studies</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="industryView" smooth={true} duration={500}>Resources</Link>
                </li>
                <li className='hover:underline hover:scale-110 transition-all'>
                    <Link to="bookView" smooth={true} duration={500}>More</Link>
                </li>
            </ul>
            <div className='flex lg:hidden mr-5 justify-end w-10 cursor-pointer' onClick={handleMenu}>
                <img src={burger} alt='burger' />
            </div>
            <div className='hidden lg:flex gap-5 items-center'>
                <div>
                    <Button text='Book a demo' className='text-white rounded-3xl px-6 hover:scale-110 transition-all' />
                </div>
                <div className='cursor-pointer hover:underline'>
                    <span className='font-sans text-black'>Log In</span>
                </div>
            </div>
        </div>
    )
}
