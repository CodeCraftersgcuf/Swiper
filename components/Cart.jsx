'use client';
import '@/app/styles/main.scss';
import { useEffect, useRef, useState } from 'react';
import { modalActions } from '@/store/openModel';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion"
import ExtraItems from './Cart-subcomponents/ExtraItems';
import OrdersManagementBox from './Cart-subcomponents/OrdersManagementBox';


const Cart = ({ isOpen }) => {
    const dispatch = useDispatch()
    const closeDiv = (e) => {
        if (e.target.id === 'modal-background') {
            dispatch(modalActions.closeModal())
        }
    };


    const handleAddItem = (index) => {
        console.log(index)
    };

    return (
        <motion.div
            initial={{ y: "20%", opacity: 0 }}  // Start from below the screen
            animate={{ y: isOpen ? "0%" : "20%", opacity: isOpen ? 1 : 0 }} // Slide up when open, slide down when closing
            exit={{ y: "20%", opacity: 0 }} // Exit with slide down and fade out
            transition={{ duration: 0.5 }} // Animation duration
            id="modal-background"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            onClick={closeDiv}
        >
            <div className='w-screen h-[90vh] flex justify-between bg-white text-black '>
                <ExtraItems />
                <OrdersManagementBox />
            </div>
        </motion.div>
    )
}

export default Cart