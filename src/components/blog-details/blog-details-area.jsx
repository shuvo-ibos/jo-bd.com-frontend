
import React from 'react';
import Image from 'next/image';
// internal
import BlogPostCommentForm from '../forms/blog-post-comment-form';
import BlogDetailsAuthor from './blog-details-author';
import BlogDetailsComments from './blog-details-comments';
import PostboxDetailsTop from './postbox-details-top';
import BlogShare from './BlogShare';

const BlogDetailsArea = ({blog}) => {
  return (
    <section className="tp-postbox-details-area pb-120 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {/* PostboxDetailsTop */}
            <PostboxDetailsTop blog={blog} />
            {/* PostboxDetailsTop */}
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-thumb">
              <Image src={blog.img} alt="blog-big-img m-auto "

              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              width={1000} height={500} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="tp-postbox-details-main-wrapper">
              <div className="tp-postbox-details-content">
                {
                  blog?.long_description &&
                  <div dangerouslySetInnerHTML={{__html: blog?.long_description}}></div>
                }

                <div className="tp-postbox-details-share-wrapper">
                  <div className="row">

                    {
                      blog?.tags.length > 0 &&
                      <div className="col-xl-8 col-lg-6">
                        <div className="tp-postbox-details-tags tagcloud">
                          <span>Tags:</span>
                          {
                            blog?.tags?.map((item,index)=>(
                                  <a href="#" key={index}>{item}</a>
                            ))
                          }
                        </div>
                      </div>
                    }

                    <div className="col-xl-4 col-lg-6">
                      <BlogShare title="Blog Post"/>
                    </div>
                  </div>
                </div>

                {/* PostboxDetailsNav */}

                {/* PostboxDetailsNav */}

                {/* author details start */}
                <BlogDetailsAuthor blog={blog} />
                {/* author details end */}


                {/* BlogDetailsComments */}
                <BlogDetailsComments blog={blog} />
                {/* BlogDetailsComments */}


                <div className="tp-postbox-details-form">
                  <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  {/* form start */}
                  <BlogPostCommentForm blogId={blog} />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;