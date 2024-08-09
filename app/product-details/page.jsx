'use client'
import React, { useRef, useState } from 'react';
import AbsolutePart from '@/components/details/AbsolutePart';
import DetailsSwiper from '@/components/details/DetailsSwiper';
import WithHeaderWrapper from '@/components/WithHeaderWrapper';
import ProductsGrid from '@/components/details/ProductsGrid';

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
