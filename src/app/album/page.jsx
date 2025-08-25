import BlogBreadcrumb from '@/components/breadcrumb/blog-breadcrumb';
import Footer from '@/layout/footers/footer';
import HeaderTwo from '@/layout/headers/header-2';
import Wrapper from '@/layout/wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import './album.css'
import LightboxGallery from './LightboxGallery';
import FooterTwo from '@/layout/footers/footer-2';

async function getAlbum() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/album`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }

export default async function RecentPost() {

    const result = await getAlbum();

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />

        <div className='heading_album'>
        <h3 className="breadcrumb__title">Our Gallery  </h3>
        </div>
      <section className="tp-postbox-area  pb-120 fawards_gallery">
      {/* <div className="container"> */}
        <LightboxGallery images={result} />
        {/* <div className=' gallery'>
          {result.map((b,index)=>(
            <div key={index} className="album_image gallery-item">

                    <Image src={b.img} alt="blog img" width={800} height={500} />

              </div>
            ))}
          </div> */}
      {/* </div> */}
      </section>
      {/* <Footer primary_style={true} /> */}
      <FooterTwo />
    </Wrapper>
  )


}
