import React from 'react';
import Image from 'next/image'; // Import the Image component from the 'next/image' library
import './payment.css';
import alphaletelogo from '../../assets/alphalete-logo.png';
import googleico from '../../assets/google.svg';
import paypal from '../../assets/paypal.svg';
import paypalWhite from '../../assets/paypal-white.svg';
import locksymbol from '../../assets/locksymbol1.png';
import elo from '../../assets/elo.svg';
import discover from '../../assets/discover.svg';
import bank from '../../assets/bank.svg';
import unionpay from '../../assets/unionpay.svg';
import isymbol from '../../assets/i_symbol.png';
import shopImg from '../../assets/shop-img.png';
import phoneImage from '../../assets/phoneImage.png';
import shareSymbol from '../../assets/shareSymbol.png';
import visaico from '../../assets/visa.svg';
import mastercardico from '../../assets/mastercard.svg';
import masterredcardico from '../../assets/redmaster.svg';
import bluecard from '../../assets/bluecard.svg';
import cartimg from '../../assets/cart-img.jpg';
const payment = () => {
  return (
    <>
      <div className="">
        <div className="flex xl:flex-nowrap flex-wrap justify-start ms-9 me-9 lg:ms-24">
          <div className="payment-main flex flex-wrap justify-start lg:justify-end ">
            <div className=" lg:p-[38px]  payment-insde max-w-[700px]">
              <div className="w-[150px] h-[22px]  mb-[2.6rem]">
                <Image
                  className="w-[150px] h-[22px] object-contain"
                  src={alphaletelogo}
                  alt="Logo Here"
                />
              </div>

              <div className="flex  gap-3 items-center  mt-3 justify-center lg:flex-nowrap flex-wrap  ">
                <p className="text-center text-[#707070] text-[13px] font-normal">
                  Express checkout
                </p>
              </div>

              <div className="flex lg:justify-start gap-3 items-center  mt-3 justify-center lg:flex-nowrap flex-wrap">
                <button>
                  <div className="w-[187px] h-[48px] bg-[#592ff4] flex justify-center items-center rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="inherit"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 341 80.035"
                      className="PrlUn"
                      style={{ fill: 'white' }} // Use double curly braces for inline styles
                      width="150" // Example width, adjust as needed
                      height="22" // Example height, adjust as needed
                    >
                      <path
                        fillRule="evenodd" // Use camelCase for attributes
                        d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z"
                        clipRule="evenodd" // Use camelCase for attributes
                      />
                      <path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z" />
                    </svg>
                  </div>
                </button>
                <button>
                  <div className="w-[187px] h-[48px] bg-[#ffc439] flex justify-center items-center rounded-md">
                    <Image src={paypal} className="w-[76px]" alt="paypal" />
                  </div>
                </button>
                <button>
                  <div className="w-[187px] h-[48px] bg-[#000000] flex justify-center items-center rounded-md">
                    <Image
                      src={googleico}
                      alt="Google Icon"
                      className="w-[35px] h-[25px] object-contain"
                    />{' '}
                    <h1 className="text-white text-[20px]">Pay</h1>
                  </div>
                </button>
              </div>

              <div className="or-sec flex justify-center mt-4">
                <p className="text-center text-[#707070] text-[13px]">OR</p>
              </div>

              <div className="flex justify-between  items-center mt-5">
                <div>
                  <h1 className="input-heading text-black">CONTACT</h1>
                </div>
                <div>
                  <a href="#" className="underline text-[13px] text-[#707070]">
                    Log in
                  </a>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex flex-col space-y-2 mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-md in-p"
                  placeholder="Email"
                />
                <label className="flex items-center space-x-2 pt-4 pb-4 ">
                  <input
                    type="checkbox"
                    name="offers"
                    className="h-4 w-4 email-check"
                  />
                  <span className="text-sm">Email me with news and offers</span>
                </label>
              </div>

              {/* Delivery Section */}
              <div className="text-black mb-3 input-heading">DELIVERY</div>

              {/* Country/Region Section */}
              <div className="drop-down-div flex flex-col space-y-2 mb-4">
                <span className="country-span text-gray-400 text-[12px]">
                  Country/Region
                </span>

                <select
                  id="country"
                  name="country"
                  className="border border-gray-300 rounded-md  w-full select-tag text-sm"
                >
                  <option value="united-kingdom" className="text-sm">
                    {' '}
                    United Kingdom
                  </option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Name Section */}
              <div className="flex space-x-4 mb-4">
                <div className="flex flex-col space-y-2 w-1/2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border border-gray-300 in-p rounded-md "
                    placeholder="First name"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-1/2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Company Section */}
              <div className="flex flex-col space-y-2 mb-4">
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border border-gray-300  in-p rounded-md "
                  placeholder="Company (optional)"
                />
              </div>

              {/* Address Section */}
              <div className="flex flex-col space-y-2 mb-4">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border border-gray-300  in-p rounded-md "
                  placeholder="Address"
                />
              </div>

              {/* Apartment, Suite, etc. Section */}
              <div className="flex flex-col space-y-2 mb-4">
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="border border-gray-300  in-p rounded-md "
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>

              {/* City and Postcode Section */}
              <div className="flex space-x-4 mb-4">
                <div className="flex flex-col space-y-2 w-1/2">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="City"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-1/2 mb-4">
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    className="border border-gray-300  in-p rounded-md "
                    placeholder="Postcode"
                  />
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col space-y-2 mb-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300  in-p rounded-md "
                  placeholder="Phone"
                />
              </div>

              {/* News and Offers Section */}
              <div className="flex items-center space-x-2 mb-4 border border-gray-300 p-2 rounded-md">
                <label className="text-[13px] flex items-center gap-3 space-x-2">
                  <input type="checkbox" className="border-gray-100 h-4 w-4" />
                  Text me with news and offers
                </label>
              </div>

              {/* Shipping Method Section */}
              <div className="mt-8">
                <div className="input-heading text-black text-[1rem]">
                  SHIPPING METHOD
                </div>

                <div className="bg-gray-100 text-gray-600 p-4 rounded-md mt-2 text-sm">
                  Enter your shipping address to view available shipping
                  methods.
                </div>
              </div>

              {/* Payment Section */}
              <div className="mt-8">
                <div className="input-heading text-black">PAYMENT</div>
                <div className="text-sm text-gray-600 mt-2">
                  All transactions are secure and encrypted.
                </div>

                {/* Payment Options Section */}
                <div className="mt-4">
                  {/* Credit Card Option */}
                  <div className="flex items-center space-x-2 p-4 rounded-md1  ">
                    <div className="flex justify-between w-full">
                      <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4"
                        />
                        Credit card
                      </label>
                      <div className="flex items-center space-x-2 hover-div relative">
                        {/* Add your icons here */}
                        <Image src={visaico} alt="Visa" className="h-5" />
                        <Image
                          src={mastercardico}
                          alt="MasterCard"
                          className="h-5"
                        />
                        <Image
                          src={masterredcardico}
                          alt="MasterCard"
                          className="h-5"
                        />
                        <Image src={bluecard} alt="BlueCard" className="h-5" />
                        <span className="four-plus ps-2 pe-2 text-gray-500 rounded-md">
                          +4
                        </span>
                        <div className="four-plus-div flex flex-wrap items-center ps-3 pe-3 rounded-md">
                          <Image src={elo} alt="BlueCard" className="h-5" />
                          <Image src={bank} alt="BlueCard" className="h-5" />
                          <Image
                            src={discover}
                            alt="BlueCard"
                            className="h-5"
                          />
                          <Image
                            src={unionpay}
                            alt="BlueCard"
                            className="h-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-phone-div flex flex-col  pt-5 pb-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border ms-[17px] me-[17px] border-gray-300 w-[545px] in-p mobile-phone-input rounded-md pl-5"
                      placeholder="Mobile phone number"
                    />
                    <Image
                      className="phoneImage"
                      src={phoneImage}
                      alt="phoneImage"
                    ></Image>
                    <div className="ps-5 pe-5">
                      <p className="text-red text-[13px] pt-3">
                        The specified phone number does not match the expected
                        pattern.
                      </p>
                      <p className="text-gray-500 text-[13px] pt-4 pe-5">
                        Next time you check out here or on other stores powered
                        by Shopify, you’ll receive a code by text message to
                        securely purchase with Shop Pay.
                      </p>
                      <p className="text-gray-500 text-[12px] pt-5 flex felx-wrap">
                        By continuing, you agree to Shop Pay’s&nbsp;
                        <a href="#" className="flex items-center gap-1">
                          <ins>Privacy Policy</ins>
                          <Image src={shareSymbol} alt="shareSymbol"></Image>
                        </a>
                        &nbsp; and &nbsp;
                        <a href="#" className="flex items-center gap-1">
                          <ins>Terms of Service</ins>
                          <span>
                            <Image src={shareSymbol} alt="shareSymbol"></Image>
                          </span>
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  {/* PayPal Option */}
                  <div className="flex items-center space-x-2 p-4 border rounded-md ">
                    <div className="flex justify-between w-full">
                      <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2">
                        <input
                          type="radio"
                          name="payment"
                          className="h-4 w-4"
                        />
                        PayPal
                      </label>
                      <div class="w-[100px] h-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          preserveAspectRatio="xMidYMid"
                          viewBox="0 0 196 50"
                          role="img"
                          aria-label="PayPal"
                          class="RULId"
                        >
                          <g clip-path="url(#paypal-logo_svg__a)">
                            <path
                              fill="#253B80"
                              fill-rule="evenodd"
                              d="M62.268 11.182h10.816c3.62 0 6.346 1 7.884 2.893 1.4 1.723 1.863 4.183 1.379 7.315-1.074 7.157-5.186 10.769-12.31 10.769h-3.425c-.738 0-1.37.563-1.483 1.33l-1.18 7.837c-.116.767-.745 1.33-1.485 1.33H57.3c-.555 0-.979-.516-.892-1.09l4.375-29.055c.115-.766.745-1.33 1.485-1.33Zm5.634 14.678c2.867 0 5.833 0 6.424-4.066.217-1.428.043-2.462-.525-3.158-.952-1.166-2.794-1.166-4.748-1.166h-.748c-.442 0-.822.338-.89.797L66.27 25.86zM100.235 21.664h5.179c.554 0 .976.518.887 1.09l-2.799 18.571c-.117.767-.743 1.33-1.485 1.33h-4.665c-.552 0-.976-.516-.89-1.093l.232-1.507s-2.558 3.106-7.17 3.106c-2.686 0-4.945-.812-6.523-2.76-1.721-2.12-2.425-5.158-1.93-8.336.952-6.37 5.84-10.912 11.564-10.912 2.496 0 4.996.57 6.118 2.275l.362.55.23-1.517a.91.91 0 0 1 .89-.797m-7.884 15.74c2.996 0 5.344-2.08 5.844-5.18.226-1.501-.087-2.863-.876-3.839-.788-.966-1.984-1.478-3.454-1.478-2.95 0-5.338 2.15-5.804 5.223-.244 1.507.047 2.86.812 3.812.772.958 1.974 1.463 3.478 1.463Z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill="#253B80"
                              d="M132.999 21.663h-5.204c-.497 0-.963.259-1.245.69l-7.179 11.079-3.042-10.646c-.192-.666-.779-1.123-1.443-1.123h-5.114c-.622 0-1.054.636-.856 1.25l5.733 17.625-5.39 7.97c-.424.629.003 1.492.736 1.492h5.198c.493 0 .955-.252 1.235-.676l17.312-26.178c.414-.626-.011-1.483-.741-1.483"
                            ></path>
                            <path
                              fill="#179BD7"
                              fill-rule="evenodd"
                              d="M139.415 11.182h10.818c3.62 0 6.345 1 7.88 2.893 1.4 1.723 1.867 4.183 1.381 7.315-1.075 7.157-5.186 10.769-12.312 10.769h-3.423c-.738 0-1.369.563-1.483 1.33l-1.242 8.237c-.08.537-.521.93-1.037.93h-5.551c-.552 0-.976-.516-.889-1.09l4.375-29.055c.115-.766.744-1.33 1.483-1.33Zm5.642 14.678c2.869 0 5.835 0 6.425-4.066.216-1.428.044-2.462-.524-3.158-.952-1.166-2.796-1.166-4.748-1.166h-.748c-.444 0-.821.338-.889.797l-1.146 7.593zM177.383 21.663h5.176c.555 0 .979.52.894 1.09l-2.801 18.572c-.116.767-.745 1.33-1.484 1.33h-4.664c-.555 0-.979-.516-.892-1.093l.231-1.508s-2.557 3.107-7.169 3.107c-2.687 0-4.942-.812-6.524-2.76-1.72-2.12-2.421-5.158-1.928-8.336.953-6.37 5.84-10.912 11.563-10.912 2.496 0 4.995.57 6.116 2.275l.364.55.229-1.518a.91.91 0 0 1 .889-.797m-7.881 15.742c2.995 0 5.347-2.081 5.844-5.181.229-1.501-.084-2.863-.877-3.84-.787-.965-1.983-1.477-3.454-1.477-2.949 0-5.334 2.149-5.804 5.222-.24 1.508.048 2.862.813 3.813.772.957 1.977 1.463 3.478 1.463"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill="#179BD7"
                              d="m188.67 11.979-4.44 29.588c-.087.573.337 1.09.889 1.09h4.463c.742 0 1.371-.563 1.485-1.33l4.378-29.055c.087-.573-.337-1.092-.889-1.092h-4.998c-.441.002-.82.34-.888.799"
                            ></path>
                            <path
                              fill="#253B80"
                              d="m11.493 48.304.827-5.504-1.842-.045H1.68L7.794 2.141a.54.54 0 0 1 .17-.318.5.5 0 0 1 .327-.126h14.834c4.925 0 8.324 1.073 10.098 3.193.832.994 1.362 2.032 1.618 3.176.27 1.2.274 2.632.011 4.38l-.019.128v1.12l.832.494c.7.39 1.258.835 1.685 1.345.711.85 1.172 1.93 1.366 3.211.2 1.317.134 2.885-.194 4.66-.38 2.04-.994 3.818-1.822 5.273-.763 1.34-1.734 2.452-2.887 3.314-1.1.818-2.408 1.44-3.887 1.837-1.433.391-3.067.588-4.859.588h-1.154c-.826 0-1.628.312-2.257.87a3.7 3.7 0 0 0-1.177 2.2l-.087.496-1.46 9.7-.067.357c-.018.112-.048.169-.092.207a.24.24 0 0 1-.152.058z"
                            ></path>
                            <path
                              fill="#179BD7"
                              d="M36.451 12.703q-.066.445-.152.911c-1.956 10.523-8.65 14.158-17.197 14.158h-4.353c-1.045 0-1.926.795-2.089 1.876l-2.228 14.805L9.8 48.65c-.106.709.416 1.349 1.099 1.349h7.72c.913 0 1.69-.696 1.834-1.64l.076-.412 1.453-9.662.094-.53c.142-.948.92-1.644 1.834-1.644h1.155c7.479 0 13.334-3.181 15.045-12.387.715-3.845.345-7.056-1.547-9.314-.572-.681-1.283-1.246-2.113-1.707Z"
                            ></path>
                            <path
                              fill="#222D65"
                              d="M34.4 11.847a15 15 0 0 0-1.902-.442c-1.173-.199-2.459-.293-3.836-.293H17.034c-.286 0-.558.068-.802.19-.536.27-.934.802-1.03 1.453l-2.475 16.413-.07.479c.162-1.08 1.043-1.876 2.089-1.876h4.352c8.548 0 15.241-3.637 17.197-14.158q.087-.466.152-.91a10 10 0 0 0-1.608-.712 15 15 0 0 0-.438-.144Z"
                            ></path>
                            <path
                              fill="#253B80"
                              d="M15.205 12.756a1.93 1.93 0 0 1 1.031-1.451c.245-.123.516-.19.802-.19h11.627c1.378 0 2.663.094 3.837.292a15 15 0 0 1 2.342.585q.867.3 1.609.711c.582-3.889-.005-6.536-2.012-8.934C32.228 1.13 28.235 0 23.125 0H8.29C7.247 0 6.356.795 6.195 1.877L.015 42.91c-.121.812.477 1.544 1.258 1.544h9.159l2.3-15.284z"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="paypal-logo_svg__a">
                              <path fill="#fff" d="M0 0h195.456v50H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="input-heading text-black text-[1rem] mt-4">
                    REMEMBER ME
                  </div>
                  <div className="flex flex-wrap flex-col items-start justify-center mb-4 border border-gray-300 pt-[17px] rounded-md">
                    <div className="">
                      <label className="cursor-pointer text-[13px] flex items-center gap-3 space-x-2 mb-4 ps-[17px] pe-[17px]">
                        <input
                          type="checkbox"
                          className="border-gray-100 h-4 w-4 save-num-chk"
                          id="save-num-chk"
                        />
                        Save my information for a faster checkout
                      </label>
                    </div>

                    <div className="mobile-phone-div flex flex-col bg-gray pt-5 pb-4">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="border ms-[17px] me-[17px] border-gray-300 w-[545px] in-p mobile-phone-input rounded-md pl-5"
                        placeholder="Mobile phone number"
                      />
                      <Image
                        className="phoneImage"
                        src={phoneImage}
                        alt="phoneImage"
                      ></Image>
                      <div className="ps-5 pe-5">
                        <p className="text-red text-[13px] pt-3">
                          The specified phone number does not match the expected
                          pattern.
                        </p>
                        <p className="text-gray-500 text-[13px] pt-4 pe-5">
                          Next time you check out here or on other stores
                          powered by Shopify, you’ll receive a code by text
                          message to securely purchase with Shop Pay.
                        </p>
                        <p className="text-gray-500 text-[12px] pt-5 flex felx-wrap">
                          By continuing, you agree to Shop Pay’s&nbsp;
                          <a href="#" className="flex items-center gap-1">
                            <ins>Privacy Policy</ins>
                            <Image src={shareSymbol} alt="shareSymbol"></Image>
                          </a>
                          &nbsp; and &nbsp;
                          <a href="#" className="flex items-center gap-1">
                            <ins>Terms of Service</ins>
                            <span>
                              <Image
                                src={shareSymbol}
                                alt="shareSymbol"
                              ></Image>
                            </span>
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between  items-center">
                    <div className="flex justify-start gap-2 items-center">
                      <Image src={locksymbol} alt="locksymbol"></Image>
                      <span className="text-xs">Secure and encrypted</span>
                    </div>
                    <Image src={shopImg} alt="shopImg"></Image>
                  </div>
                </div>

                {/* PayPal Button Section */}
                <div className="mt-6">
                  <button className="paypal-btn text-white py-4 px-6 rounded-md w-full text-lg flex flex-wrap justify-center items-center ">
                    <span>Pay with &nbsp; </span>
                    <span>
                      <Image
                        src={paypalWhite}
                        alt="paypal"
                        className="paypalWhite"
                      ></Image>
                    </span>
                  </button>
                  <button className="review-order-btn text-white py-4 px-6 rounded-md w-full text-lg mt-6">
                    Review order
                  </button>
                </div>
              </div>

              {/* Footer Links Section */}
              <div className="flex justify-start space-x-4 text-sm mt-10 border-t-2">
                <a href="#" className="text-gray-600 mt-3 underline">
                  Refund policy
                </a>
                <a href="#" className="text-gray-600 mt-3 underline">
                  Privacy policy
                </a>
                <a href="#" className="text-gray-600 mt-3 underline">
                  Terms of service
                </a>
              </div>
            </div>
          </div>

          <div className="checkout-main w-[604px] ">
            <div className="p-[38px] checkout-inside">
              {/* Product Summary Section */}
              <div className="flex space-x-4 items-center ">
                {/* Product Image */}
                <div className="buy-img-div w-16 h-16">
                  {/* Add your image here */}
                  <Image
                    src={cartimg}
                    alt="Product Image"
                    className="w-full h-full img-border object-cover rounded-md"
                  />
                  <div className="num-circle">
                    <span>1</span>
                  </div>
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-sm font-normal">
                    Tenacity Deep V Cady Bra - Heat
                  </p>
                  <span className="text-gray-500 font-light text-xs">M</span>
                </div>
                {/* Product Price */}
                <div className="text-sm font-normal">£36.00</div>
              </div>

              {/* Rewards Reminder Section */}
              <div className="dont-miss flex items-center space-x-2 p-4 bg-gray-100 rounded-md mt-4">
                <div className="text-gray-600 flex flex-wrap justify-center items-center gap-3">
                  {/* Icon for information */}
                  {/* <svg
                    class="w-10 h-10 inline-block mr-2"
                    fill="none"
                    stroke="#777777"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M12 18a6 6 0 110-12 6 6 0 010 12z"
                    ></path>
                  </svg> */}
                  <Image src={isymbol} alt="isymbol"></Image>
                  <span className="text-sm">
                    Don&apos;t miss out!{' '}
                    <a href="#" className="text-blue-600 link">
                      Log in
                    </a>{' '}
                    to earn and redeem rewards
                  </span>
                </div>
              </div>

              {/* Discount Code Section */}
              <div className="flex gap-3 mt-4">
                <input
                  type="text"
                  placeholder="Discount code or gift card"
                  className="border border-gray-300 p-2 rounded-md w-full discount-input"
                />
                <button className="text-sm px-4 rounded-md apply-btn">
                  APPLY
                </button>
              </div>

              {/* Subtotal Section */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">£36.00</span>
              </div>

              {/* Shipping Section */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Shipping</span>
                <span className="text-xs text-gray-400">
                  Enter shipping address
                </span>
              </div>
              {/* Total Section */}
              <div className="flex justify-between items-center mt-4 ">
                <span className="font-semibold text-lg">Total</span>
                <div className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-xs font-normal text-gray-500 mr-2">
                    GBP
                  </span>
                  £36.00
                </div>
              </div>

              {/* Tax Information Section */}
              <div className="mt-2 text-xs text-gray-500">
                Including £6.00 in taxes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default payment;
