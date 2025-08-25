import Link from 'next/link'
import React from 'react'
import CategoryItem from './CategoryItem';

async function getCategory() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog_post/category_with_count`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }

export default async function BlogCategoryCount() {
    const result = await getCategory();
  return (
    <div className="tp-sidebar-widget widget_categories mb-35">
    <h3 className="tp-sidebar-widget-title">Categories</h3>
    <div className="tp-sidebar-widget-content">
      <ul>
        {
            result?.map((item,index)=>(
                  <CategoryItem item={item} key={index} />
            ))
        }

      </ul>
    </div>
  </div>
  )
}
