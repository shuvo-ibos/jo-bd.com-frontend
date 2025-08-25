
import FashionBanner from '@/components/banner/fashion-banner'
import ProductArea from '@/components/products/beauty/product-area'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/fpic/JO_01.png';
import slider_img_2 from '@assets/fpic/JO_2.png';
import slider_img_3 from '@assets/fpic/JO_03.png';
import ShopArea from '@/components/shop/shop-area'

async function getAlbum() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/slider/slider_data?type=jo`, {
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
      <FashionBanner bg={'khaki-bg'}
      slider_data={result}
      link={'/brand/jo'}
      />
      {/* <BeautyFeatured /> */}
      {/* <ProductArea type="popular" isOff={false} /> */}
      <div className="tp-product-area pt-80">
        <ShopArea
        isBrand = {true}
        type="popular"
        brandName="brand/jo"
      />
      </div>
      {/* <ProductBanner/> */}
      <FooterTwo />
    </Wrapper>
  )
}
