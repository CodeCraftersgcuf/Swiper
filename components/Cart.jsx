'use client';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
import '@/app/styles/main.scss';
import { FaPlus } from 'react-icons/fa6';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// const slides = Array.from({ length: 40 }, (_, index) => index + 1);

// const slides2 = Array.from({ length: 8 }, (_, index) => index + 1);
const slides2 = [1, 2, 3, 4, 5, 6, 7, 8]


const Cart = () => {
    const [women, setWomen] = useState(true);
    // const [men, setMen] = useState(false);
    // const swiperRef = useRef();
    // const swiperRef2 = useRef();

    // const innerSwiperRef = useRef();

    const [hoveredIndex, setHoveredIndex] = useState(null);
    // const horizontalSlides = [1, 2, 3, 4]; // Array for horizontal slides

    const slideimages = {
        images: [
            'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
            'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
        ],
    };
    const images = [
        'https://cdn.shopify.com/s/files/1/1752/8007/products/TrilogyCropHoodieCelestialBlue4_400x.jpg',
        'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    // console.log(hoveredIndex)
    return (
        <div className='w-screen h-screen flex justify-between bg-white text-black'>
            <div className='h-full w-9/12 flex flex-col'>
                <div className="sliders">
                    <div className="slider-buttons">
                        <span
                            onClick={() => setWomen(true)}
                            className={`${women ? 'bg-gray' : ''}`}
                        >
                            Recommended
                        </span>
                        <span
                            onClick={() => setWomen(false)}
                            className={!women ? 'bg-gray' : ''}
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
                                        <div className="item-info">
                                            <h5 className="hide">Amplify Gemini Bra</h5>
                                            <p className="hide">
                                                Gliese <span> 4 colors</span>
                                            </p>
                                            <p className="hide">£120.00</p>
                                            <div className="item-sizes-box">
                                                <div>
                                                    <p>QUICK ADD</p>
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
                                            <div className="item-images">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>))}

                    </div>
                </div>
            </div>
            <div className='flex flex-col w-3/12 text-black border border-black justify-between'>
                <div className='flex items-center justify-center h-12 border-b border-black'>
                    YOUR BAG
                </div>
                <div className=''>
                    {/* Content for the second div */}
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center h-12 border-t border-black'>
                        Free Standard Shipping Unlocked
                    </div>
                    <div className='border-y border-black py-4'>
                        <div className='flex justify-between px-6'>
                            <span>Total:</span>
                            <span>$933</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='text-sm py-2 px-24 rounded-full bg-green-400'>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart
