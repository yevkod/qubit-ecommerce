import React from 'react';
import { Button } from '../Button/Button';

export const BookView = () => {
    return (
        <div className='flex flex-col items-center bg-demo  max-w-[90rem] bg-center bg-no-repeat p-5 lg:p-[90px] mx-auto'>
            <div className='text-[25px] lg:text-[40px] font-bold text-white'>
                <span>Book a demo today.</span>
            </div>
            <div className='flex pt-8 text-[12px] lg:text-[15px]'>
                <div>
                    <input
                        placeholder='Enter your email'
                        className='py-2 px-4 lg:py-3 lg:px-10 rounded-l-2xl focus:outline-none'
                    />
                </div>
                <div>
                    <Button text='Book a demo' className='text-white rounded-r-2xl py-2 px-3 lg:py-3 lg:px-8 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                </div>
            </div>
        </div>
    )
}
