import React from 'react';
import campaign from '../../assets/img/campaign.png';
import { Button } from '../Button/Button';

export const CampaignView = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#F5F5F5] p-4 pt-[45px] lg:pt-[90px] pb-[90px]'>
            <div>
                <div className='text-[25px] lg:text-[45px] leading-[45px] font-bold text-center'>
                    <span>All the power. Easy to use.</span>
                </div>
                <div className='text-[15px] text-center pt-8'>
                    <span>By collaborating with real ecommerce teams we have built the next-gen personalization tool. No code. No clunkiness.</span>
                </div>
            </div>
            <div className='pt-16 max-w-[100%] hover:scale-110 transition-all'>
                <img src={campaign} alt='campaign' />
            </div>
            <div className='flex gap-6 pt-10 text-[10px] lg:text-[16px]'>
                <div>
                    <Button text='See products' className='text-white rounded-3xl px-6 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                </div>
                <div>
                    <Button text='Book a demo' className='text-[#6F2CFF] hover:bg-gray-200 active:bg-gray-300 bg-white rounded-3xl px-6 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                </div>
            </div>
        </div>
    )
}
