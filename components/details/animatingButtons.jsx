import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatingButtons = ({ text }) => {
    const controls = useAnimation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        controls.start(isOpen ? "collapsed" : "open");
    };

    const listItemsVariants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
        collapsed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    };

    const addSignVariants = {
        open: { rotate: 45, transition: { duration: 0.5 } },
        collapsed: { rotate: 0, transition: { duration: 0.5 } }
    };

    return (
        <ul className="p-2 border-y list-disc font-semibold">
            <div
                className="flex justify-between items-center text-[12px] text-gray-800 cursor-pointer"
                onClick={toggleOpen}
            >
                <span>{text}</span>
                <motion.span
                    className='text-lg'
                    animate={controls}
                    variants={addSignVariants}
                >
                    +
                </motion.span>
            </div>
            <motion.li
                className="text-[12px] text-gray-400 block overflow-hidden"
                initial="collapsed"
                animate={controls}
                variants={listItemsVariants}
            >
                its a nice skirt
            </motion.li>
            <motion.li
                className="text-[12px] text-gray-400 block overflow-hidden"
                initial="collapsed"
                animate={controls}
                variants={listItemsVariants}
            >
                its very cool to wear and safe to use even in the direct sunlight where
                absolutekskjkjsjf skjfsdkjs
            </motion.li>
        </ul>
    );
};

export default AnimatingButtons;
