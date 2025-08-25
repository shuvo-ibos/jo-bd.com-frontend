import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import FooterTwo from "@/layout/footers/footer-2";

export const metadata = {
  title: "Jo",
};

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop" subtitle="Shop" />
      <ShopArea/>
      {/* <Footer primary_style={true} /> */}
      <FooterTwo />
    </Wrapper>
  );
}
