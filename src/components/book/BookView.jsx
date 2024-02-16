import React from 'react';
import { Button } from '../Button/Button';

export const BookView = () => {
    return (
        <div className='flex flex-col items-center bg-demo  max-w-[90rem] bg-center bg-no-repeat p-[90px] mx-auto'>
            <div className='text-[40px] font-bold text-white'>
                <span>Book a demo today.</span>
            </div>
            <div className='flex pt-8'>
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
    )
}
