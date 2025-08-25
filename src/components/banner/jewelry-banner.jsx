'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
// internal
import slider_img_1 from '@assets/fpic/Home_01.png';
import slider_img_2 from '@assets/fpic/Home_02.png';
import slider_img_3 from '@assets/fpic/Home_03.png';
import slider_img_4 from '@assets/fpic/Home_4.png';

// nav icon
import nav_icon_1 from '@assets/img/slider/4/nav/new.png';
import nav_icon_2 from '@assets/img/slider/4/nav/icon-2.png';
import nav_icon_3 from '@assets/img/slider/4/nav/icon-3.png';
import nav_icon_4 from '@assets/img/slider/4/nav/icon-4.png';
import { ArrowNextTwo, ArrowPrevTwo, Pause, Play } from '@/svg';
import text_shape from '@assets/img/slider/4/shape/rounded-test.png';

// slider data
const slider_data = [
  { subtitle: 'Timeless', title: ' Threads of Tradition ', img: slider_img_2 },
  { subtitle: 'From Monipuri', title: ' Homes to Yours', img: slider_img_3 },
  { subtitle: 'Elegance', title: ' in Every Line ', img: slider_img_4 },
  { subtitle: 'Wrapped in', title: ' Soulful Heritage', img: slider_img_1 },
]

// slider nav data
const slider_nav_data = [
  { icon: nav_icon_1, title: <>Jamdani  <br />Saree</> },
  { icon: nav_icon_3, title: <>Monipuri  <br /> Saree</> },
  { icon: nav_icon_4, title: <>Tangail Handloom <br /> Saree</> },
  { icon: nav_icon_2, title: <>Basak  <br />Saree</> },
]

const JewelryBanner = ({slider_result=[]}) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  //  slider setting
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  }
  // nav slider setting
  const nav_slider_setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  }

  //
  const [play, setPlay] = useState(false);

  const handleToggle = () => {
    if (play === false) {
      setPlay(true);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.play());
    } else {
      setPlay(false);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.pause());
    }
  };
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 fix">
        <Slider {...main_slider_setting} asNavFor={slider2} ref={(slider) => setSlider1(slider)} className="tp-slider-active-4 khaki-bg">
          {slider_result.map((item, i) => (
            <>
            <div key={i} className="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center slider_area" >
              <div className="tp-slider-thumb-4">
                <img src={item.img} alt="slider img" width={'auto'} height={'auto'} />
                <div className="tp-slider-thumb-4-shape">
                  <span className="tp-slider-thumb-4-shape-1"></span>
                  <span className="tp-slider-thumb-4-shape-2"></span>
                </div>
              </div>

              <div className="tp-slider-video-wrapper">
                {/* <!-- video --> */}
                {/* <div className={`tp-slider-video transition-3 ${play?'full-width':''}`}>

                  <video loop>
                    <source type="video/mp4" src="https://html.hixstudio.net/videos/shofy/jewellery-1.mp4" />
                  </video>
                </div> */}
                {/* <!-- video button --> */}
                {/* <div className="tp-slider-play">

                  <button onClick={handleToggle} type="button" className={`tp-slider-play-btn tp-slider-video-move-btn tp-video-toggle-btn ${play?'hide':''}`}>
                    <Image className="text-shape" src={text_shape} alt="text shape" priority  width={'auto'} height={'auto'}/>
                    <span className="play-icon">
                      <Play/>
                    </span>
                    <span className="pause-icon">
                      <Pause/>
                    </span>
                  </button>
                </div> */}
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.sub_title_1}</span>
                      <h3 className="tp-slider-title-4">{item.title_1}</h3>
                      <div className="tp-slider-btn-4">
                        <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white">Shop Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile slider  */}
            <div className='mobile_slider'>
              <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.sub_title_1}</span>
                      <h3 className="tp-slider-title-4">{item.title_1}</h3>
                      <div className="tp-slider-btn-4">
                        <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white">Shop Now</Link>
                      </div>
                    </div>

              <Link href="/shop">
               <img src={item.img} alt="slider img" width={'100%'} height={'auto'} />
              </Link>
            </div>
            {/* tablet slider  */}
            {/* <div className='tablet_slider'>
               <Link href="/shop">
               <img src={item.tabletImage} alt="slider img" width={'100%'} height={'auto'} />
               </Link>
            </div> */}
            </>
          ))}
        </Slider>

        {/* arrow start */}
        <div className="tp-slider-arrow-4 ">
          <button className="tp-slider-3-button-prev slick-arrow" onClick={() => slider1?.slickPrev()}>
            <ArrowPrevTwo/>
          </button>
          <button className="tp-slider-3-button-next slick-arrow" onClick={() => slider1?.slickNext()}>
            <ArrowNextTwo/>
          </button>
          </div>
        {/* arrow end */}

        <div className="tp-slider-nav slider_area">

          <Slider {...nav_slider_setting} asNavFor={slider1} ref={(slider) => setSlider2(slider)} className="tp-slider-nav-active">
            {slider_result.map((item, i) => (
              <div key={i} className="tp-slider-nav-item d-flex align-items-center">
                <div className="tp-slider-nav-icon">
                  <span>
                    <img src={item.icon} alt="icon" width={'auto'} height={'auto'}/>
                  </span>
                </div>
                <div className="tp-slider-nav-content">
                  <div className="tp-slider-nav-title">
                    {item.title_2}
                      <br/>
                    {item.sub_title_2}
                    </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </section>
    </>
  );
};

export default JewelryBanner;