
import FashionBanner from '@/components/banner/fashion-banner'
import ProductArea from '@/components/products/beauty/product-area'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/fpic/11.png';
import slider_img_2 from '@assets/fpic/12.png';
import slider_img_3 from '@assets/fpic/13.png';
import ShopArea from '@/components/shop/shop-area'
async function getAlbum() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/slider/slider_data?type=lee`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }



export default async function page() {
  const result = await getAlbum();
  return (
    <Wrapper>
      <HeaderFour/>
      {/* <HomeHeroSlider/> */}
      <FashionBanner bg={'khaki-bg'}
      slider_data={result}
      link={'/brand/lee'}
             />
      {/* <FashionCategory/> */}
      {/* <PopularProducts type="typeTopSeller" /> */}
      {/* <ProductArea type="typeTopSeller" isOff={false} /> */}
      <div className="tp-product-area pt-80">
            <ShopArea
              isBrand = {true}
              type="typeTopSeller"
              brandName="brand/lee"
            />
            </div>
      {/* <BannerArea/> */}
      <FooterTwo />
    </Wrapper>
  )
}
