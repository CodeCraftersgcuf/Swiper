import React from 'react'
import { useEffect, useRef, useState } from 'react';
import '@/app/styles/main.scss';

//swiper imports
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Grid, Navigation, Pagination, Mousewheel } from 'swiper/modules';

//icons import 
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const slideimages = {
    images: [
        'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
        'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
    ],
};
const slides2 = [1, 2, 3, 4, 5, 6, 7, 8]

const ExtraItems = () => {
    const [recommended, setRecommended] = useState(true);
    return (
        <div className=' w-9/12 flex flex-col overflow-x-auto scrollbar-hide'>
            <div className="sliders">
                <div className="slider-buttons ">
                    <span
                        onClick={() => setRecommended(true)}
                        className={`${recommended ? 'bg-gray' : 'txt-black'}`}
                    >
                        Recommended
                    </span>
                    <span
                        onClick={() => setRecommended(false)}
                        className={!recommended ? 'bg-gray' : 'txt-black'}
                    >
                        Recently viewed
                    </span>
                </div>

                <div className='grid p-6 grid-cols-4 gap-6'>
                    {slides2.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="slider-items"
                            // style={
                            //     index === 0 ? { margin: '30px 20px', zIndex: '100' } : {}
                            // }
                            >
                                <div className="slider-item">
                                    <div className="item-image-box">
                                        <Swiper
                                            className="imageSwiper"
                                            cssMode={true}
                                            // onBeforeInit={(swiper) => {
                                            //   innerSwiperRef.current = swiper;
                                            // }}
                                            slidesPerView={1}
                                            navigation={true}
                                            modules={[Navigation]}
                                        >
                                            <div className="button-overlay prev-button-overlay">
                                                <GrFormPrevious />
                                            </div>
                                            {slideimages.images.map((image, imgIndex) => (
                                                <SwiperSlide className="imageSlide" key={imgIndex}>
                                                    <img
                                                        className="item-image"
                                                        src={image}
                                                        alt={image.alt}
                                                    />
                                                </SwiperSlide>
                                            ))}
                                            <div className="button-overlay next-button-overlay">
                                                <GrFormNext />
                                            </div>
                                        </Swiper>
                                        <p className="new">NEW</p>
                                        <p className="plus">
                                            <FaPlus />
                                        </p>
                                    </div>
                                    <div className="flex flex-col h-[40px] transition-all duration-300 relative cursor-pointer">
                                        <div className='flex flex-col bg-white py-2 z-10'>
                                            <h5 className="text-[12px] text-black">Amplify Gemini Bra</h5>
                                            <p className="text-[10px] text-gray-600">
                                                Gliese <span> 4 colors</span>
                                            </p>
                                            <p className="text-[10px] text-black ">£120.00</p>
                                        </div>
                                        <div className="item-sizes-box">
                                            <div>
                                                <p className='text-[10px]'>QUICK ADD</p>
                                                <FaPlus
                                                    onClick={() => handleAddItem(index)}
                                                    className="plus"
                                                />
                                            </div>
                                            <div className="separator"></div>
                                            <div className="item-sizes">
                                                <p>XXS</p>
                                                <p>XS</p>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                                <p>XL</p>
                                                <p>XXL</p>
                                            </div>
                                        </div>
                                        {/* <div className="item-images">
                                <img
                                    src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                                    alt=""
                                />
                                <img
                                    src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                                    alt=""
                                />
                                <img
                                    src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                                    alt=""
                                />
                                <img
                                    src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                                    alt=""
                                />
                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))}

                </div>
            </div>
        </div>
    )
}

export default ExtraItems