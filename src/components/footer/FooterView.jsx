import React from 'react'
import { companyArray, featuredArray, productsArray, resourcesArray } from './FooterArray'

export const FooterView = () => {
    return (
        <div className='flex flex-col bg-[#20003C] pt-[90px] pb-[60px] text-white p-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-32'>
                <ul className='flex flex-col gap-3'>
                    <li className='text-[16px] font-bold'>Featured Capabilities</li>
                    {featuredArray.map((item) => (
                        <div key={item.id} className='gap-3'>
                            <li className='text-[14px] hover:underline'>{item.title}</li>
                        </div>
                    ))}
                </ul>
                <ul className='flex flex-col gap-3'>
                    <li className='text-[16px] font-bold'>Products</li>
                    {productsArray.map((item) => (
                        <div key={item.id} className='gap-3'>
                            <li className='text-[14px] hover:underline'>{item.title}</li>
                        </div>
                    ))}
                </ul>
                <ul className='flex flex-col gap-3'>
                    <li className='text-[16px] font-bold'>Resources</li>
                    {resourcesArray.map((item) => (
                        <div key={item.id} className='gap-3'>
                            <li className='text-[14px] hover:underline'>{item.title}</li>
                        </div>
                    ))}
                </ul>
                <ul className='flex flex-col gap-3'>
                    <li className='text-[16px] font-bold'>Company</li>
                    {companyArray.map((item) => (
                        <div key={item.id} className='gap-3'>
                            <li className='text-[14px] hover:underline'>{item.title}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col text-center justify-center pt-16'>
                <div className='text-[27px] font-bold'>
                    <span>Qubit.</span>
                </div>
                <div className='pt-5'>
                    <span>© 2021 Qubit. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
