'use client'
import React, { useRef, useState } from 'react';
import AbsolutePart from '@/components/ProductDetails-subcomponents/AbsolutePart';
import DetailsSwiper from '@/components/ProductDetails-subcomponents/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/ProductDetails-subcomponents/ProductsGrid';

export default function DetailsPage() {

    return (
        <WithHeaderWrapper>
            <div className='h-[87vh] w-screen relative'>
                <DetailsSwiper />
                <AbsolutePart />
            </div>
            <ProductsGrid />
        </WithHeaderWrapper>
    );
}
