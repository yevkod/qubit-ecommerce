import React from 'react';
import { industryArray } from './IndustryArray';


export const IndustryView = () => {
    return (
        <div className='pt-[45px] lg:pt-[90px] pb-[90px]'>
            <div className='text-center'>
                <div className='text-[25px] lg:text-[40px] font-bold'>
                    <span>We specialize in your industry.</span>
                </div>
                <div className='text-[18px]'>
                    <span>Learn how we are delivering personalization at scale across sectors.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 max-w-[980px] pt-10'>
                {industryArray.map((item) => (
                    <div key={item.id} className='flex flex-col text-left bg-[#17002E] rounded-lg text-white p-5'>
                        <div className='flex items-center gap-4 max-w-[400px]'>
                            <div className='flex justify-center'>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div>
                                <span>{item.title}</span>
                            </div>
                        </div>
                        <div className='pt-3 h-14'>
                            <span>{item.description}</span>
                        </div>
                        <div className='underline pt-3'>
                            <span>{item.explore}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
