'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import about_img from '@assets/pic/about.png';
import about_thumb from '@assets/pic/g100.png';
import { ArrowRightLong } from '@/svg';

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35" style={{
                    background: "#f8f2e6",
                     margin: 0

              }} >
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="about_img" width={'auto'} height={'auto'}/>
                </div>
                {/* <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="about_thumb" width={'auto'} height={'auto'} />
                </div> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Threads of Heritage</span>
                  <h3 className="tp-section-title-4 fz-50">Tradition Draped in Style</h3>
                </div>
                <div className="tp-about-content ">
                  <p>Jo is your go-to destination for authentic Bangladeshi sarees;  from the timeless elegance of Dhakaiya Jamdani, and the vibrant charm of Sylheti Monipuri, to the cultural grace of Basak and Tangail sarees.  <br /> Each piece at Jo is a tribute to heritage, handpicked to connect you with your roots.</p>

                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us{" "}<ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryAbout;