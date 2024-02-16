import React from 'react'
import { commerceArray } from './CommerceArray'

export const CommerceView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='flex flex-col items-center'>
                <div className='text-[40px] font-bold'>
                    <span>Qubit CommerceAI.</span>
                </div>
                <div className='text-[18px] pt-5'>
                    <span>The new way to drive growth.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {commerceArray.map((item) => (
                    <div key={item.id} className='flex flex-col mx-auto items-center pt-10 text-center max-w-[316px]'>
                        <div><img src={item.icon} alt={item.title} /></div>
                        <div className='text-[19px] font-bold pt-5'>{item.title}</div>
                        <div className='text-[15px] pt-5'>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
