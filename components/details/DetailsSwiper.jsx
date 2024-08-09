import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../app/styles/swiper6.scss';
import { FreeMode, Pagination } from 'swiper/modules';
const images = [
  'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
  'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
  'https://cdn.shopify.com/s/files/1/1752/8007/products/TrilogyCropHoodieCelestialBlue4_400x.jpg',
  'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
]

const DetailsSwiper = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt="product"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DetailsSwiper
