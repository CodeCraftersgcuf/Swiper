'use client'

import React from 'react';
import Image from 'next/image'; // Import the Image component from the 'next/image' library
import './payment.css';
import alphaletelogo from '../../assets/alphalete-logo.png';

import paypalWhite from '../../assets/paypal-white.svg';
import locksymbol from '../../assets/locksymbol1.png';
import elo from '../../assets/elo.svg';
import discover from '../../assets/discover.svg';
import bank from '../../assets/bank.svg';
import unionpay from '../../assets/unionpay.svg';
import isymbol from '../../assets/i_symbol.png';
import cartimg from '../../assets/cart-img.jpg';
import shopImg from '../../assets/shop-img.png';
import phoneImage from '../../assets/phoneImage.png';
import shareSymbol from '../../assets/shareSymbol.png';
import visaico from '../../assets/visa.svg';
import mastercardico from '../../assets/mastercard.svg';
import masterredcardico from '../../assets/redmaster.svg';
import bluecard from '../../assets/bluecard.svg';
import Link from 'next/link';
import EmailSection from '@/components/Payment-subcomponents/EmailSection';
import DeliverySection from '@/components/Payment-subcomponents/DeliverySection';
import PaymentTypeButtons from '@/components/Payment-subcomponents/PaymentTypeButtons';
import NoHeaderWrapper from '@/components/NoHeaderWrapper';
import PaymentDetails from '@/components/Payment-subcomponents/PaymentDetails';
import OrderCheckout from '@/components/Payment-subcomponents/OrderCheckout';
const payment = () => {

  const hanldeSubmit = async (formData) => {
    const inputs = Object.fromEntries(formData.entries())
    const options = formData.getAll('options')
    const data = { inputs, options }
    console.log(data)
  }

  const hanldeApply = (formData) => {
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return (
    <NoHeaderWrapper>
      <div className="bg-white h-full w-full">
        <div className="flex xl:flex-nowrap flex-wrap justify-start ms-9 me-9 lg:ms-24">
          <PaymentDetails onSubmit={hanldeSubmit} />
          <OrderCheckout onApply={hanldeApply} />
        </div>
      </div>
    </NoHeaderWrapper>
  );
};

export default payment;
