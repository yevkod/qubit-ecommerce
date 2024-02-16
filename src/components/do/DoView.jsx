import React from 'react'
import { doArray } from './DoArray'

export const DoView = () => {
    return (
        <div className='pt-[40px] lg:pt-[80px] p-4 pb-[90px]'>
            <div className='text-center text-[25px] lg:text-[40px] font-bold'>
                <span>What you can do with Qubit.</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-16 '>
                {doArray.map((item) => (
                    <div key={item.id} className='flex flex-col text-center max-w-[265px] mx-auto'>
                        <div className='flex justify-center'>
                            <img src={item.icon} />
                        </div>
                        <div className='text-[19px] font-bold pt-4' >{item.title}</div>
                        <div className='text-[15px] pt-5'>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
