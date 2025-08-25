
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import blogData from '@/data/blog-data';
import SearchPost from './SearchPost';
import BlogCategoryCount from './BlogCategoryCount';
import PopularTag from './PopularTag';
import RecentPost from './RecentPost';

// latest post




const BlogSidebar = async () => {

  return (
    <>
      <div className="tp-sidebar-wrapper tp-sidebar-ml--24">
        <div className="tp-sidebar-widget mb-35">
          <div className="tp-sidebar-search">
            <SearchPost/>
          </div>
        </div>

        {/* about  */}
        {/* <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">About me</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-about">
              <div className="tp-sidebar-about-thumb mb-25">
                <a href="#">
                  <Image src={user} alt="user" width={'auto'} height={'auto'} />
                </a>
              </div>
              <div className="tp-sidebar-about-content">
                <h3 className="tp-sidebar-about-title">
                  <a href="#">Ravi {"O'Leigh"}</a>
                </h3>
                <span className="tp-sidebar-about-designation">Photographer & Blogger</span>
                <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient</p>
                <div className="tp-sidebar-about-signature">
                  <Image src={signature} alt="signature" width={'auto'} height={'auto'} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- about end --> */}

        {/* <!-- latest post start --> */}
        <RecentPost/>
        {/* <!-- latest post end --> */}

        {/* <!-- categories start --> */}
        <BlogCategoryCount/>
        {/* <!-- categories end --> */}

        {/* <!-- tag cloud start --> */}
        <PopularTag/>
        {/* <!-- tag cloud end --> */}

      </div>
    </>
  );
};

export default BlogSidebar;