import React from 'react'
import { trustedArray } from './TrustedArray'
import Marquee from 'react-fast-marquee'

export const TrustedView = () => {
    return (
        <div className='flex flex-col w-[100%] mx-auto pt-[40px] pb-[90px]'>
            <div className='text-[18px] font-bold text-center'>
                <span>Trusted by world-class brands.</span>
            </div>
            <div className='w-full px-5 mx-auto'>
                <Marquee autoFill play>
                    <div className='flex justify-center pt-8 gap-16 first:pr-10'>
                        {trustedArray.map((item) => (
                            <div key={item.id}><img src={item.icon} alt='' /></div>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className='flex justify-center pt-8 text-[16px] font-bold hover:underline hover:text-[#6F2CFF] cursor-pointer underline-offset-4'>
                <span>Meet our customers {">"}</span>
            </div>
        </div>
    )
}
