import React from 'react';
import Carousel, { arrowsPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { brandsArray } from './BrandsArray';
import arrowleft from '../../assets/img/arrow-left.png';
import arrowright from '../../assets/img/arrow-right.png';

export const BrandsView = () => {
    return (
        <div className='pt-[45px] lg:pt-[90px] pb-[90px] bg-[#F5F5F5] p-16'>
            <div className='text-[26px] lg:text-[40px] font-bold text-center'>
                <span>Trusted by leading brands.</span>
            </div>
            <div className='flex max-w-[90rem] mx-auto'>
                <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: <button><img src={arrowleft} /></button>,
                                arrowRight: <button><img src={arrowright} /></button>,
                                addArrowClickHandler: true,
                            }
                        },
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    },

                                },
                                {
                                    resolve: arrowsPlugin,
                                    options: {
                                        arrowLeft: <button><img src={arrowleft} /></button>,
                                        arrowRight: <button><img src={arrowright} /></button>,
                                        addArrowClickHandler: true,
                                    }
                                },
                            ]
                        },
                        900: {
                            plugins: [
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                                {
                                    resolve: arrowsPlugin,
                                    options: {
                                        arrowLeft: <button><img src={arrowleft} /></button>,
                                        arrowRight: <button><img src={arrowright} /></button>,
                                        addArrowClickHandler: true,
                                    }
                                },
                            ]
                        }
                    }}
                >
                    {brandsArray.map((item) => (
                        <div key={item.id} className='relative rounded-xl mt-8 max-w-[320px] h-full bg-white hover:scale-110 transition-all'>
                            <div>
                                <img className='' src={item.icon} />
                            </div>
                            <div className='flex justify-center pt-6'>
                                <img src={item.icon_title} />
                            </div>
                            <div className='text-[#6F2CFF] text-[18px] pt-5 font-bold text-center pb-10'>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
