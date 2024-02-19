import React from 'react';
import { Button } from '../Button/Button';

export const MainView = () => {
    return (
        <div className="flex relative bg-main bg-center bg-cover bg-no-repeat w-full p-5 pt-20 lg:p-[90px]">
            <div className='max-w-full'>
                <div className="flex flex-col max-w-[90rem] mx-auto">
                    <div className='text-[15px]'>
                        <span>Driving growth with personalization.</span>
                    </div>
                    <div className='text-[29px] lg:text-[3.5rem] pt-5 font-bold leading-[55px]'>
                        <span>Make ecommerce<br></br><span className='text-[#6F2DFF]'>More personal.</span></span>
                    </div>
                    <div className='text-[15px] pt-4 lg:pt-8 lg:text-[18px]'>
                        <span>Hundreds of brands use <span className='font-bold'>Qubit CommerceAI</span>  to power <br></br> the next generation of product recommendations, <br></br> badging and insights to build exceptional customer <br></br> experiences.</span>
                    </div>
                    <div className='flex pt-5 text-[12px] md:text-[15px]'>
                        <div>
                            <input
                                placeholder='Enter your email'
                                className='py-2 px-3 md:py-3 md:px-10 rounded-l-2xl focus:outline-none'
                            />
                        </div>
                        <div>
                            <Button text='Book a demo' className='text-white rounded-r-2xl md:py-3 md:px-8 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
