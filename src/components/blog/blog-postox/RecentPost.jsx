import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function getRecentPost() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog_post/front_list?resent_post=true&limit=5`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }

export default async function RecentPost() {

    const result = await getRecentPost();

  return <div className="tp-sidebar-widget mb-35">
  <h3 className="tp-sidebar-widget-title">Latest Posts</h3>
  <div className="tp-sidebar-widget-content">
    <div className="tp-sidebar-blog-item-wrapper">
      {result?.docs.map((b,index)=>(
        <div key={index} className="tp-sidebar-blog-item d-flex align-items-center">
        <div className="tp-sidebar-blog-thumb">
          <Link href={`/blog-details/${b.slug}`}>
          {
            b?.slug &&
            <Image src={b.img} alt="blog img" width={100} height={100} />
          }
          </Link>
        </div>
        <div className="tp-sidebar-blog-content">
          <div className="tp-sidebar-blog-meta">
            <span>{b.createdAt}</span>
          </div>
          <h3 className="tp-sidebar-blog-title">
            <Link href={`/blog-details/${b.slug}`}>{b.title}</Link>
          </h3>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
}
