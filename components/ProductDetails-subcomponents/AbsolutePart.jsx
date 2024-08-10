import React from 'react'
import AnimatingButtons from './animatingButtons'
import { motion } from 'framer-motion'

const animatingButtons = ['Description', 'Fit Suggestions', 'Materials and Washing Directions']
const buttonSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
const smallImages = [1, 2, 3, 4, 5]

const AbsolutePart = () => {
    return (
        <div className='absolute bg-white p-4 top-[5%] right-[4.5rem] z-50 w-[24rem] h-[33rem] border border-gray-400 rounded-lg overflow-scroll scrollbar-hide'>
            <div className='flex flex-col gap-3 w-full text-black justify-between'>
                <div className='flex flex-col gap-1 border-b pb-3 border-gray-400'>
                    <div className='flex items-center justify-center h-10'>
                        TENACITY OLIVIA SCULPT BRA
                    </div>
                    <div className='flex justify-between text-sm'>
                        <span>Flex Short</span>
                        <span>$42</span>
                    </div>
                    <span className='text-xs text-gray-400'>Tight Fitting with greater comfot</span>
                    <span className='text-xs font-normal p-[0.15rem] border border-gray-400 w-12 text-center'>NEW</span>
                </div>
                <span className='text-xs text-gray-400'>6 colors available</span>
                <div className='flex gap-1'>
                    {smallImages.map((image, index) => (
                        <div key={index} className='w-14 border border-gray-400 rounded-lg hover:scale-[103%] hover:cursor-pointer'>
                            <img className='rounded-lg' src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400" alt="image" />
                        </div>
                    ))}

                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between text-[12px]'>
                        <span>Sizes guide</span>
                        <span className='text-gray-400'>Sizes not available?</span>
                    </div>
                    <div className=" w-fit flex items-center space-x-2 px-[0.1rem] py-[0.1rem]">
                        {buttonSizes.map((size, index) => (
                            <button key={size} className="flex items-center justify-center w-8 h-8 text-gray-600 text-[10px]  rounded-lg hover:bg-gray-200 transition">
                                {size}
                            </button>
                        ))}

                    </div>

                </div>

                <div className='flex flex-col text-sm'>
                    <div className='flex items-center justify-center h-12 border-t border-gray-400'>
                        Free Standard Shipping Unlocked
                    </div>
                    <div className='flex flex-col gap-3 border-y h-32 border-b border-gray-400 py-4 '>
                        <div className='flex justify-between px-6'>
                            <span>Total:</span>
                            <span>$933</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <motion.button
                                className='text-[0.75rem] font-bold py-2 px-24 rounded-full bg-green-400'
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 800, damping: 10 }}

                            >
                                CHECKOUT
                            </motion.button>
                        </div>
                        <div className=' mt-10 px-6'>
                            <ul className='flex flex-col gap-1 list-disc'>
                                {smallImages.map((image, index) => (
                                    <li key={index} className='text-xs text-gray-400'>Tight Fitting with greater comfot</li>

                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            {animatingButtons.map((text, index) => (
                                <AnimatingButtons key={index} text={text} />
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AbsolutePart
