import React from 'react'
import { Button } from '../Button/Button'
import { growArray } from './GrowArray'

export const GrowView = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto px-12'>
            <div className='flex flex-col justify-center'>
                <div className='text-[40px] font-bold font-sans leading-[45px]'>
                    <span>Grow 2.5x faster than<br></br>your competitors.</span>
                </div>
                <div className='flex items-center gap-8 pt-12'>
                    <div>
                        <Button text='Book a demo' className='text-white rounded-3xl px-14 py-2.5 shadow-xl transform transition duration-300 hover:-translate-y-1' />
                    </div>
                    <div className='text-[16px] font-bold hover:underline hover:text-[#6F2CFF] cursor-pointer underline-offset-4'>
                        <span>Meet our customers {">"}</span>
                    </div>
                </div>
                <div className='flex flex-col pt-10'>
                    <div>
                        <span>*PwC audited methodology.</span>
                    </div>
                    <div className='pt-3 underline cursor-pointer hover:'>
                        <span>Read the report</span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-x-36 gap-y-20'>
                {growArray.map((item) => (
                    <div key={item.id} className='grid grid-cols-1 '>
                        <div className='text-[40px] font-bold font-sans'>{item.rate}</div>
                        <div className='text-[15px]'>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
