// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper';
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
// import { FaPlus } from 'react-icons/fa';

// const CartModal = () => {
//     const swiperRef = useRef(null);
//     const slides2 = Array.from({ length: 8 }, (_, index) => index + 1);
//     const slideimages = {
//         images: [
//             'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
//             'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
//         ]
//     };

//     return (
//         <div className='w-screen h-screen flex justify-between bg-white'>
//             <div className='h-full w-9/12 flex flex-col'>
//                 <div className='grid p-6 grid-cols-4 gap-6'>
//                     {slides2.map((_, index) => (
//                         <div className='relative flex flex-col gap-1 rounded-lg group' key={index}>
//                             <div className='w-full rounded-lg'>
//                                 <Image className='rounded-lg' src={slideimages.images[0]} width={1000} height={1000} alt="image" />
//                             </div>
//                             <p className='text-black'>Reform Compression Short</p>
//                             <p className='text-sm'>White * 3 colors</p>
//                             <p className='text-black text-sm'>$34</p>

//                             {/* Swiper Container */}
//                             <div className="absolute top-0 left-0 w-full h-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
//                                 <Swiper
//                                     modules={[Navigation]}
//                                     navigation={{
//                                         prevEl: `.swiper-button-prev-${index}`,
//                                         nextEl: `.swiper-button-next-${index}`
//                                     }}
//                                     className="w-full h-full"
//                                 >
//                                     {slideimages.images.map((imgSrc, imgIndex) => (
//                                         <SwiperSlide key={imgIndex}>
//                                             <Image src={imgSrc} width={1000} height={1000} alt={`slide image ${imgIndex}`} />
//                                         </SwiperSlide>
//                                     ))}
//                                 </Swiper>
//                                 <div className={`swiper-button-prev-${index} absolute left-0`}>
//                                     <GrFormPrevious size={30} />
//                                 </div>
//                                 <div className={`swiper-button-next-${index} absolute right-0`}>
//                                     <GrFormNext size={30} />
//                                 </div>
//                             </div>

//                             {/* Style Bar */}
//                             <div className="absolute bottom-0 left-0 w-full p-4 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-4">
//                                 <button className="p-2 bg-gray-200 rounded-full"><FaPlus /></button>
//                                 {/* Add other buttons here */}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className='w-3/12'></div>
//         </div>
//     );
// }

// CartModal.displayName = 'CartModal';
// export default CartModal;
