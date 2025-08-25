'use client';
import React from 'react';
import Link from 'next/link';
// internal
import { ArrowRightLong } from '@/svg';
import banner_bg_1 from '@assets/fpic/Tranding_.png';
import banner_bg_2 from '@assets/fpic/New_arrivals.png';
import banner_bg_3 from '@assets/fpic/PopularChoice.png';
import banner_bg_4 from '@assets/fpic/EidCollection_01.png';

// BannerItem
function BannerItem({ cls,clsitem="", bg_clr, bg, content, title,link,isBtn=false}) {
  return (
    <div className={`tp-banner-item-4 tp-banner-height-4 fix p-relative z-index-1 ${cls}`}
    data-bg-color={`#${bg_clr}`}>
      <div className={`tp-banner-thumb-4 include-bg black-bg transition-3 ${clsitem} `}
      style={{backgroundImage:`url(${bg.src})`}}></div>
      <div className="tp-banner-content-4">
        <span>{content}</span>
        <h3 className="tp-banner-title-4">
          <Link href={link}>{title}</Link>
        </h3>
        {isBtn && <div className="tp-banner-btn-4">
          <Link href={link} className="tp-btn tp-btn-border">
            Shop Now {" "} <ArrowRightLong/>
          </Link>
        </div>}
      </div>
    </div>
  )
}

const JewelryShopBanner = () => {
  return (
    <>
      <section className="tp-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-xl-12">
                  <BannerItem cls="mb-25   " clsitem="tanding_part" bg_clr="F3F7FF" bg={banner_bg_1} content=""
                  title={<>TRENDING </>} isBtn={true} link="/shop?category=tranding" />
                </div>
                <div className="col-md-6 col-sm-6">
                <BannerItem cls="has-green sm-banner" clsitem='new_arrival_part' bg_clr="F0F6EF" bg={banner_bg_2} content="NEW ARRIVALS " isBtn={true} link="/shop" title="" />

                </div>
                <div className="col-md-6 col-sm-6">
                <BannerItem cls="has-brown sm-banner" clsitem='eid_collection_part' bg_clr="F8F1E6" bg={banner_bg_3} content="POPULAR CHOICE " isBtn={true} link="/shop?category=popular-choice" title="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-banner-full tp-banner-full-height fix p-relative z-index-1">
                <div className="tp-banner-full-thumb include-bg black-bg transition-3 boisaki_collection_part"
                style={{backgroundImage:`url(${banner_bg_4.src})`}}></div>
                <div className="tp-banner-full-content">
                  {/* <span>Collection</span> */}
                  <h3 className="tp-banner-full-title">
                    <Link href="/shop?category=eid-collection">EID COLLECTION </Link>
                  </h3>
                  <div className="tp-banner-full-btn">
                    <Link href="/shop?category=eid-collection" className="tp-btn tp-btn-border">
                      Shop Now{" "}<ArrowRightLong/>
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

export default JewelryShopBanner;