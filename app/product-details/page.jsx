'use client'
import React, { useRef, useState } from 'react';
import AbsolutePart from '@/components/details/AbsolutePart';
import DetailsSwiper from '@/components/details/DetailsSwiper';

export default function DetailsPage() {

    return (
        <div className='h-[87vh]  relative ms-auto me-auto'>
            <DetailsSwiper />
            <AbsolutePart />
        </div>
    );
}
