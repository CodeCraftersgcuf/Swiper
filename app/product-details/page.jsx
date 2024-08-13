'use client'
import React, { useRef, useState, useEffect } from 'react';
import AbsolutePart from '@/components/ProductDetails-subcomponents/AbsolutePart';
import DetailsSwiper from '@/components/ProductDetails-subcomponents/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/ProductDetails-subcomponents/ProductsGrid';
import { DUMMY_DETAILS } from '@/utils.js'


export default function DetailsPage() {
    const swiperRef = useRef(null);
    const [product, setProduct] = useState(null)

    const handleCenterSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const slideWidth = swiper.slides[index].offsetWidth;
            const halfContainerWidth = swiper.width / 2;
            const slidePosition = swiper.slides[index].offsetLeft + slideWidth / 2;

            // Calculate the translateX value to center the slide
            const translateX = slidePosition - halfContainerWidth;

            swiper.setTranslate(-translateX); // Manually set the translate to center the slide
            swiper.updateProgress(); // Update Swiper's internal state
        }
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
        console.log(id)
        const loadedProduct = DUMMY_DETAILS.find((product) => product.id === +id);
        setProduct(loadedProduct)
    }, [])
    return (
        <WithHeaderWrapper>
            <div className='h-[87vh] relative'>
                <DetailsSwiper
                    productImages={product && product.images}
                    ref={swiperRef}
                />
                <AbsolutePart
                    product={product}
                    centerSlide={handleCenterSlide}
                />
            </div>
            <ProductsGrid />
        </WithHeaderWrapper>
    );
}
