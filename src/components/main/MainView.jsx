import React from 'react';
import { Button } from '../Button/Button';

export const MainView = () => {
    return (
        <div className="flex bg-main max-w-[90rem] bg-center bg-no-repeat p-[90px] mx-auto">
            <div className="flex flex-col">
                <div className='text-[15px]'>
                    <span>Driving growth with personalization.</span>
                </div>
                <div className='text-[54px] pt-5 font-bold leading-[55px]'>
                    <span>Make ecommerce<br></br><span className='text-[#6F2DFF]'>More personal.</span></span>
                </div>
                <div className='pt-8 text-[18px]'>
                    <span>Hundreds of brands use <span className='font-bold'>Qubit CommerceAI</span>  to power <br></br> the next generation of product recommendations, <br></br> badging and insights to build exceptional customer <br></br> experiences.</span>
                </div>
                <div className='flex pt-5 '>
                    <div>
                        <input
                            placeholder='Enter your email'
                            className='py-3 px-10 rounded-l-2xl focus:outline-none'
                        />
                    </div>
                    <div>
                        <Button text='Book a demo' className='text-white rounded-r-2xl py-3 px-8 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}