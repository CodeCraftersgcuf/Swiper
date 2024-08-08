'use client'
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../app/header.scss'
import { FaSearch } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import CartModal from "./CartModal";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Cart from "./Cart";


const Header = () => {
  const cartModal = useRef()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check scroll position
    if (window.scrollY > 100) { // Change 100 to whatever scroll position you prefer
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      <header>
        {!isScrolled && (
          <div className='preheader'>
            <Swiper className="mySwiper" loop={true} autoplay={true}>
              <SwiperSlide><p>Free Domestic Shipping over £120 and 30 Day Returns</p></SwiperSlide>
              <SwiperSlide><p>Free Domestic Shipping over £120 and 30 Day Returns</p></SwiperSlide>
            </Swiper>
            <div className="example05">
              <Link href="/">Info</Link>
              <Link href="/">Login</Link>
            </div>
          </div>
        )}
        <div className="separator"></div>
        <div className="header">
          <h3>ALPHALETE</h3>
          <div className="example05">
            <Link style={{ padding: '0 10px' }} href="/"><p>MEN</p></Link>
            <Link href="/"><p>WOMEN</p></Link>
          </div>
          <div>
            <FaSearch />
            <SlBag className="cart" />
            <p className="p">1</p>
            <RxHamburgerMenu color="white" className="burger" />
          </div>
        </div>
      </header>
      <Cart />
    </>
  );
};

export default Header;
