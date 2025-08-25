'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
// internal
import slider_img_1 from '@assets/img/slider/2/slider-1.png';
import slider_img_2 from '@assets/img/slider/2/slider-2.png';
import slider_img_3 from '@assets/img/slider/2/slider-3.png';
import slider_shape from '@assets/img/slider/2/shape/shape-1.png';
import thumb_shape_1 from '@assets/img/slider/2/shape/shape-2.png';
import thumb_shape_2 from '@assets/img/slider/2/shape/shape-3.png';

// slider data
// const slider_data = [
//   {
//     id: 1,
//     subtitle: 'Wrapped In Sharee',
//     title: ' Rooted In Culture.',
//     img: slider_img_1,
//   },
//   {
//     id: 2,
//     subtitle: 'From Looms Of Bengal',
//     title: ' To Hearts Worldwide',
//     img: slider_img_2,
//   },
//   {
//     id: 3,
//     subtitle: 'Where Each Motif',
//     title: ' Carries A Century Of Stories',
//     img: slider_img_3,
//   },
// ]

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: ".tp-slider-2-button-next",
    prevEl: ".tp-slider-2-button-prev",
  },
  pagination: {
    el: ".tp-slider-2-dot",
    clickable: true,
  },
}

const FashionBanner = ({bg="grey-bg-5",slider_data,link='/'}) => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper {...slider_setting} modules={[Pagination, Navigation, EffectFade]} className="tp-slider-active-2 swiper-container">
          {slider_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`tp-slider-item-2 tp-slider-height-2 p-relative ${bg} d-flex align-items-end slider_area`}>
                <div className="tp-slider-2-shape">
                  <Image className="tp-slider-2-shape-1" src={slider_shape} alt="slider_shape" width={'auto'} height={'auto'} />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-content-2">
                        <span>{item.sub_title_1}</span>
                        <h3 className="tp-slider-title-2">{item.title_1}</h3>
                        <div className="tp-slider-btn-2">
                          <Link href={link} className="tp-btn tp-btn-border">Shop Collection</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-thumb-2-wrapper p-relative">
                        <div className="tp-slider-thumb-2-shape">
                          <Image className="tp-slider-thumb-2-shape-1" src={thumb_shape_1} alt="shape" width={'auto'} height={'auto'} />
                          <Image className="tp-slider-thumb-2-shape-2" src={thumb_shape_2} alt="shape" width={'auto'} height={'auto'} />
                        </div>
                        <div className="tp-slider-thumb-2 text-end">
                          <span className="tp-slider-thumb-2-gradient"></span>
                          <img src={item.img} alt="slider img" priority width={'auto'} height={'auto'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile slider  */}
              <div className='mobile_slider' style={{background: "#ad9567"}}>
                <div className="">
                        <span>{item.sub_title_1}</span>
                        <h3 className="tp-slider-title-2">{item.title_1}</h3>
                        <div className="tp-slider-btn-2">
                          <Link href={link} className="tp-btn tp-btn-border">Shop Collection</Link>
                        </div>
                      </div>
                <Link href={link}>
                <img src={item.img} alt="slider img" width={'100%'} height={'auto'} />
                </Link>
              </div>
              {/* tablet slider  */}
              <div className='tablet_slider'>
                <Link href={link}>
                <img src={item.tabletImage} alt="slider img" width={'100%'} height={'auto'} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-swiper-dot tp-slider-2-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default FashionBanner;