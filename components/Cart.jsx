'use client';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
import '@/app/styles/main.scss';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
// const slides = Array.from({ length: 40 }, (_, index) => index + 1);

// const slides2 = Array.from({ length: 8 }, (_, index) => index + 1);
const slides2 = [1, 2, 3, 4, 5, 6, 7, 8]
const cartPricingOverflow = [1, 2, 3, 4, 5]

const Cart = () => {
    const [women, setWomen] = useState(true);

    const slideimages = {
        images: [
            'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
            'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
        ],
    };

    return (
        <div className='w-screen h-[82vh] flex justify-between bg-white text-black '>
            <div className=' w-9/12 flex flex-col overflow-x-auto scrollbar-hide'>
                <div className="sliders">
                    <div className="slider-buttons ">
                        <span
                            onClick={() => setWomen(true)}
                            className={`${women ? 'bg-gray' : 'txt-black'}`}
                        >
                            Recommended
                        </span>
                        <span
                            onClick={() => setWomen(false)}
                            className={!women ? 'bg-gray' : 'txt-black'}
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
                                                    <FaPlus className="plus" />
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
            <div className='flex flex-col w-3/12 text-black border border-black justify-between'>
                <div className='flex items-center justify-center h-20 border-b border-black'>
                    YOUR BAG
                </div>
                <div className='h-full overflow-y-scroll scrollbar-hide'>
                    {cartPricingOverflow.map((item, index) => (
                        <div key={index} className='h-[16rem] overflow-clip flex flex-col p-4 border border-b-black'>
                            <div className='flex gap-4 p-4'>
                                <div className='w-24 border border-gray-400 rounded-lg'>
                                    <img className='rounded-lg' src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400" alt="image" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span>Flex Short</span>
                                    <span className='text-sm text-gray-400'>Blackout - XXXL</span>
                                    <span>$42</span>
                                    <span className='text-sm font-normal p-[0.15rem] border border-gray-400 w-12 text-center'>NEW</span>
                                </div>
                            </div>
                            <span class="block mx-auto w-[276px] h-px bg-gray-300"></span>
                            <div className='flex justify-between items-center p-4'>
                                <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-400 transition">
                                        <MdDelete className="text-gray-600 w-6" />
                                    </button>
                                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                                        <MdModeEdit className="text-gray-600 w-6" />
                                    </button>
                                </div>
                                <span>$56</span>
                                <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem] rounded-full border border-gray-400">
                                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                                        <FaMinus className="text-gray-600 w-3" />
                                    </button>
                                    <span>1</span>
                                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                                        <FaPlus className="text-gray-600 w-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center h-12 border-t border-black'>
                        Free Standard Shipping Unlocked
                    </div>
                    <div className='flex flex-col gap-3 border-y h-32 border-b border-black py-4 '>
                        <div className='flex justify-between px-6'>
                            <span>Total:</span>
                            <span>$933</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='text-[0.75rem] font-bold py-2 px-24 rounded-full bg-green-400 hover:scale-105'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart