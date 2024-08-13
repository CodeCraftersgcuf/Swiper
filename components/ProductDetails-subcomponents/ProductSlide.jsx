import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import '@/app/styles/main.scss';
import { useRouter } from 'next/navigation';

const ProductSlide = ({ product, addItem }) => {
    const [quantity, setQuantity] = useState(0)
    const router = useRouter()
    const handleNavigateDetails = (product) => {
        return router.push('/product-details?id=' + product.id)
    }



    const incrementItem = () => {
        setQuantity(quantity + 1)
    }

    const decrementItem = () => {
        setQuantity(quantity - 1)
    }
    return (
        <SwiperSlide>
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
                            {product.image.map((image, imgIndex) => (
                                <SwiperSlide className="imageSlide" key={imgIndex}>
                                    <img
                                        className="item-image"
                                        src={image}
                                        alt={image.alt}
                                        onClick={() => handleNavigateDetails(product)}
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
                        <div className='flex flex-col bg-white py-2'>
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
                                    onClick={() => {
                                        if (quantity > 0) {
                                            addItem({ product, quantity });
                                        }
                                    }}
                                    className={`plus ${quantity === 0 ? 'hover:cursor-not-allowed' : ''}`}

                                />
                            </div>
                            <div className="separator"></div>
                            <div className="item-sizes">
                                <p
                                    onClick={() => incrementItem({ product })}
                                >
                                    <FaPlus />
                                </p>
                                <div>{quantity}</div>
                                <p
                                    onClick={() => decrementItem({ product })}
                                >
                                    <FaMinus />
                                </p>
                            </div>
                        </div>
                        <div className="item-images">
                            {product.image.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt="image" />
                            ))}
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
        </SwiperSlide>
    )
}

export default ProductSlide
