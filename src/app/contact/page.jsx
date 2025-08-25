import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ContactBreadcrumb from "@/components/breadcrumb/contact-breadcrumb";
import ContactArea from "@/components/contact/contact-area";
import ContactMap from "@/components/contact/contact-map";
import Footer from "@/layout/footers/footer";
import FooterTwo from "@/layout/footers/footer-2";

export const metadata = {
  title: "Jo - Contact",
};

export default function ContactPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ContactBreadcrumb />
      <ContactArea/>
      <ContactMap/>
      {/* <Footer primary_style={true} /> */}
      <FooterTwo />
    </Wrapper>
  );
}
