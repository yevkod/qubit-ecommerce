import React from 'react';
import ecosystem from '../../assets/img/ecosystem.png';
import { Button } from '../Button/Button';

export const EcoSystemView = () => {
    return (
        <div className='pt-[35px] lg:pt-[60px] pb-[60px] bg-[#F5F5F5] p-5 lg:p-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[90rem] mx-auto'>
                <div className='flex flex-col justify-center max-w-[610px]'>
                    <div className='text-[25px] lg:text-[40px] font-bold'>
                        <span>A connected ecosystem.</span>
                    </div>
                    <div className='text-[13px] pt-6'>
                        <span>The Qubit personalization platform is designed with enterprise and high-growth businesses in mind.</span>
                    </div>
                    <div className='text-[13px] pt-5'>
                        <span>Our open ecosystem approach means you can connect any data source and deliver personalization across any channel.</span>
                    </div>
                    <div className='flex justify-center lg:justify-start pt-14'>
                        <Button text='See our integrations' className='rounded-3xl px-8 text-white shadow-xl transform transition duration-300 hover:-translate-y-1' />
                    </div>
                </div>
                <div className='flex relative justify-center hover:scale-110 transition-all'>
                    <img src={ecosystem} alt='ecosystem' />
                </div>
            </div>
        </div>
    )
}
