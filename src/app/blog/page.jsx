import Wrapper from "@/layout/wrapper";
import BlogBreadcrumb from "@/components/breadcrumb/blog-breadcrumb";
import BlogPostboxArea from "@/components/blog/blog-postox/blog-postbox-area";
import Footer from "@/layout/footers/footer";
import { constructApiUrl } from "@/lib/constructApiUrl";
import HeaderFour from "@/layout/headers/header-4";
import HeaderTwo from "@/layout/headers/header-2";
import FooterTwo from "@/layout/footers/footer-2";


export const metadata = {
  title: "Jo",
};

export default async function BlogPage({ params, searchParams }) {
  searchParams = await searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const filters = {
    title: await searchParams?.title || "",
    tag: await searchParams?.tag || "",
    category: await searchParams?.category || "",
  };

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogPostboxArea
      query={{
        apiUrl: constructApiUrl(filters, currentPage)
      }}
      />
      {/* <Footer primary_style={true} /> */}
      <FooterTwo />
    </Wrapper>
  );
}
