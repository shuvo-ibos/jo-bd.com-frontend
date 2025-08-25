import Wrapper from "@/layout/wrapper";
import HeaderFour from '@/layout/headers/header-4';
import JewelryBanner from '@/components/banner/jewelry-banner';
import JewelryShopBanner from '@/components/shop-banner/jewelry-shop-banner';
import JewelryAbout from '@/components/about/jewelry-about';
import PopularProducts from '@/components/products/jewelry/popular-products';
import ProductArea from '@/components/products/jewelry/product-area';
import JewelryCollectionBanner from '@/components/shop-banner/jewelry-collection-banner';
import BestSellerPrd from '@/components/products/jewelry/best-seller-prd';
import JewelryBrands from '@/components/brand/jewelry-brands';
import InstagramAreaFour from '@/components/instagram/instagram-area-4';
import FeatureAreaThree from '@/components/features/feature-area-3';
import FooterTwo from '@/layout/footers/footer-2';
import ServerSLider from "./ServerSLider";


export const metadata = {
  title: "Jo - The Story of Handloom Jamdani",
};

export default function HomePageFour() {
  return (
    <Wrapper>
      <HeaderFour/>
      <ServerSLider/>
      {/* <JewelryBanner/> */}
      <FeatureAreaThree />
      <JewelryShopBanner/>
      <JewelryAbout/>
      <PopularProducts title="Shop Trending Collection" />
      <ProductArea/>
      {/* <JewelryCollectionBanner/> */}
      <BestSellerPrd title="Jo" subtitle="" type="popular" />
      <BestSellerPrd title="Lee" subtitle="" type="typeTopSeller" />
      <BestSellerPrd title="Discount Products" subtitle="" type="discount" />
      {/* <JewelryBrands/> */}
      {/* <InstagramAreaFour/> */}
      <FooterTwo/>
    </Wrapper>
  );
}
