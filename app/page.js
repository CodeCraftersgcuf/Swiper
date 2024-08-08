'use client';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
import './styles/main.scss';
import { FaPlus } from 'react-icons/fa6';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { FreeMode, Grid, Navigation, Pagination } from 'swiper/modules';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const slides = Array.from({ length: 40 }, (_, index) => index + 1);

const slides2 = Array.from({ length: 8 }, (_, index) => index + 1);

const HomePage = () => {
  const [women, setWomen] = useState(true);
  const [men, setMen] = useState(false);
  const swiperRef = useRef();
  const swiperRef2 = useRef();

  const innerSwiperRef = useRef();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const horizontalSlides = [1, 2, 3, 4]; // Array for horizontal slides

  const slideimages = {
    images: [
      'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
      'https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400',
    ],
  };
  const images = [
    'https://cdn.shopify.com/s/files/1/1752/8007/products/TrilogyCropHoodieCelestialBlue4_400x.jpg',
    'https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400',
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  // const container = useRef();

  // useGSAP(
  //   () => {
  //     ScrollTrigger.create({
  //       trigger: '.box-c',
  //       pin: true,
  //       start: 'center center',
  //       end: '+=300',
  //     });
  //   },
  //   {
  //     scope: container,
  //   }
  // );
  //https://cdn.shopify.com/videos/c/o/v/331b4aa9d8cb4d3b984bd160fa65030b.mp4
  return (
    <main className="home">
      <div className="topPage">
        <aside className="video-background">
          <video className="video-overlay" autoPlay muted loop>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/331b4aa9d8cb4d3b984bd160fa65030b.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </aside>
        <div className="content">
          <h1>New Arrivals</h1>
          <p>Amplify Reimagined</p>
          <button className="button">Shop Women</button>
          <button className="button">Shop Men</button>
        </div>
      </div>
      <div className="slider-heading">
        <h2>
          <span>{`Women's`}</span> NEW ARRIVALS
        </h2>
        <button className="button">SHOP ALL</button>
      </div>
      <div className="sliders">
        <div className="slider-buttons">
          <span
            onClick={() => setWomen(true)}
            className={women ? 'bg-gray' : ''}
          >
            Women's
          </span>
          <span
            onClick={() => setWomen(false)}
            className={!women ? 'bg-gray' : ''}
          >
            Men's
          </span>
        </div>

        <Swiper
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 2,
            },
            680: {
              slidesPerView: 2.5,
            },
            920: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 4.5,
            },
          }}
        >
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev swiper-button-prev2"
          >
            <GrFormPrevious />
          </button>
          {slides2.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slider-items"
                style={
                  index === 0 ? { margin: '30px 20px', zIndex: '100' } : {}
                }
              >
                <div className="slider-item">
                  <div className="item-image-box">
                    <Swiper
                      className="imageSwiper"
                      cssMode={true}
                      // onBeforeInit={(swiper) => {
                      //   innerSwiperRef.current = swiper;
                      // }}
                      slidesPerView={1}
                      navigation={true}
                      modules={[Navigation]}
                    >
                      <div className="button-overlay prev-button-overlay">
                        <GrFormPrevious />
                      </div>
                      {slideimages.images.map((image, imgIndex) => (
                        <SwiperSlide className="imageSlide" key={imgIndex}>
                          <img
                            className="item-image"
                            src={image}
                            alt={image.alt}
                          />
                        </SwiperSlide>
                      ))}
                      <div className="button-overlay next-button-overlay">
                        <GrFormNext />
                      </div>
                    </Swiper>
                    <p className="new">NEW</p>
                    <p className="plus">
                      <FaPlus />
                    </p>
                  </div>
                  <div className="item-info">
                    <h5 className="hide">Amplify Gemini Bra</h5>
                    <p className="hide">
                      Gliese <span> 4 colors</span>
                    </p>
                    <p className="hide">£120.00</p>
                    <div className="item-sizes-box">
                      <div>
                        <p>QUICK ADD</p>
                        <FaPlus className="plus" />
                      </div>
                      <div className="separator"></div>
                      <div className="item-sizes">
                        <p>XXS</p>
                        <p>XS</p>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                      </div>
                    </div>
                    <div className="item-images">
                      <img
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <img
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <img
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <img
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next"
          >
            <GrFormNext />
          </button>
        </Swiper>

        <div class="container">
          <div
            class="item1"
            style={{
              backgroundImage: `url(https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400)`,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
          <div
            class="item2"
            style={{
              backgroundImage: `url(https://alphalete.uk/cdn/shop/files/web_2mensshorts-graphic.jpg?crop=center&v=1714233659&width=1400)`,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
          <div
            class="item3"
            style={{
              backgroundImage: `url(https://alphalete.uk/cdn/shop/files/DSC06397.jpg?crop=center&v=1714233714&width=1400)`,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
        </div>

        <div className="slider-heading">
          <h2>
            <span>Women's</span> NEW ARRIVALS
          </h2>
          <button className="button">SHOP ALL</button>
        </div>

        <div className="slider-buttons">
          <span onClick={() => setMen(true)} className={men ? 'bg-gray' : ''}>
            Women's
          </span>
          <span onClick={() => setMen(false)} className={!men ? 'bg-gray' : ''}>
            Men's
          </span>
        </div>

        <Swiper
          slidesPerView={7.5}
          grid={{
            rows: 3,
            fill: 'row',
          }}
          spaceBetween={30}
          onBeforeInit={(swiper) => {
            swiperRef2.current = swiper;
          }}
          navigation={true}
          freeMode={true}
          modules={[Grid, Navigation, FreeMode]}
          className="mySwiper2"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
            },
            808: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
        >
          <button
            onClick={() => swiperRef2.current?.slidePrev()}
            className="swiper-button-prev swiper-button-prev2"
          >
            <GrFormPrevious />
          </button>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="item-image-box"
                style={{ width: '150px', height: '190px' }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="item-image"
                  src={hoveredIndex === index ? images[1] : images[0]}
                  alt=""
                />
                <p className="plus">
                  <FaPlus />
                </p>
              </div>
            </SwiperSlide>
          ))}
          <button
            onClick={() => swiperRef2.current?.slideNext()}
            className="swiper-button-next"
          >
            <GrFormNext />
          </button>
        </Swiper>

        <div class="container2">
          <div
            class="item1"
            style={{
              backgroundImage: `url(https://alphalete.uk/cdn/shop/files/aa24-apr27-36.jpg?crop=center&v=1714233923&width=1400)`,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
          <div
            class="item2"
            style={{
              backgroundImage: `url(https://alphalete.uk/cdn/shop/files/aa24-apr27-34.jpg?crop=center&v=1714233984&width=1400)`,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
          <div class="item3">
            <aside className="video-background2">
              <video className="video-overlay2" autoPlay muted loop>
                <source
                  src="https://cdn.shopify.com/videos/c/o/v/9d4812a2c25248fbbff2509f4093f0ad.mp4"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </aside>
            <div className="banner-info">
              <h1>New Arrivals</h1>
              <p>Amplify Reimagined</p>
              <button className="button">Shop Women</button>
              <button className="button">Shop Men</button>
            </div>
          </div>
        </div>

        <Swiper
          className="mySwiper4 swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="swiper-v2">
            <div className="shopLook shop1">
              <div className="shopLook-img">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://alphalete.uk/cdn/shop/files/4U8A0519_115c8311-a184-49e8-8c08-ed9fa1473b64_800x.jpg?v=1714234121"
                />
                <div className="point1 points"></div>
                <div className="point2 points"></div>
                <div className="point3 points"></div>
                <div className="point4 points"></div>
              </div>
            </div>
            {/* <div className='vertical-container'> */}
            <Swiper
              className="swiper-v"
              direction={'vertical'}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide className="swiper-part">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-part">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-part">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="swiper-v2">
            <div className="shopLook shop1">
              <div className="shopLook-img">
                <img src="https://alphalete.uk/cdn/shop/files/aa24-apr13-01_800x.jpg?v=1713021766" />
                <div className="point5 points"></div>
                <div className="point6 points"></div>
                <div className="point7 points"></div>
                <div className="point8 points"></div>
                <div className="point9 points"></div>
              </div>
            </div>
            <Swiper
              className="swiper-v"
              direction={'vertical'}
              spaceBetween={50}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide className="swiper-part fst-swiper">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-part">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-part">
                <div className="slider-items">
                  <div className="slider-item">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                        alt=""
                      />
                      <p className="new">NEW</p>
                      <p className="plus">
                        <FaPlus />
                      </p>
                    </div>
                    <div className="item-info">
                      <h5 className="hide">Amplify Gemini Bra</h5>
                      <p className="hide">
                        Gliese <span> 4 colors</span>
                      </p>
                      <p className="hide">£120.00</p>
                      <div className="item-sizes-box">
                        <div>
                          <p>QUICK ADD</p>
                          <FaPlus className="plus" />
                        </div>
                        <div className="separator"></div>
                        <div className="item-sizes">
                          <p>XXS</p>
                          <p>XS</p>
                          <p>S</p>
                          <p>M</p>
                          <p>L</p>
                          <p>XL</p>
                          <p>XXL</p>
                        </div>
                      </div>
                      <div className="item-images">
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                        <img
                          src="https://alphalete.uk/cdn/shop/files/4U8A0538.jpg?crop=center&v=1714233619&width=1400"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>

        <div className="preFooter">
          <aside className="video-background">
            <video autoPlay muted loop>
              <source
                src="https://cdn.shopify.com/s/files/1/1752/8007/files/alphaland-drone-loop-land.mp4?v=1654961662"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </aside>
          <div className="content">
            <h1>New Arrivals</h1>
            <p>Amplify Reimagined</p>
            <button className="button">Shop Women</button>
            <button className="button">Shop Men</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
