import React from 'react';
import adoption from '../../assets/img/user.png';
import { connectArray } from './ConnectArray';

export const ConnectView = () => {
    return (
        <div className='flex flex-col items-center pt-[20px] pb-[60px]'>
            <div>
                <div className='flex justify-center'>
                    <img src={adoption} alt='adoption' />
                </div>
                <div className='text-center pt-5'>
                    <span>Connect with us</span>
                </div>
                <div className='flex gap-9 pt-7'>
                    {connectArray.map((item) => (
                        <div key={item.id} className='flex'>
                            <img src={item.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
