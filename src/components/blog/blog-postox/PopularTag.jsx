
import React from 'react'
import TagItem from './TagItem';

async function getPopularTag() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog_post/popular_tags`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
}
export default async function PopularTag() {
    const result = await getPopularTag();
  return (
    <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Popular Tags</h3>
          <div className="tp-sidebar-widget-content tagcloud">
            {
                result?.map((item,index)=>(
                    <TagItem item={item} key={index} />
                ))
            }
          </div>
        </div>
  )
}
