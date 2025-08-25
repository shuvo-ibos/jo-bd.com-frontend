import React from "react";
import Image from "next/image";

const BlogDetailsAuthor = ({blog}) => {
  return (
    <div
      className="tp-postbox-details-author d-sm-flex align-items-start"
      data-bg-color="#F4F7F9"
    >
      <div className="tp-postbox-details-author-thumb">
        <a href="#">
          <Image src={blog?.created_by?.image} alt="author_img" width={90} height={90} />
        </a>
      </div>
      <div className="tp-postbox-details-author-content">
        <span>Written by</span>
        <h5 className="tp-postbox-details-author-title">
          <a href="#">{blog?.created_by?.name}</a>
        </h5>
        <p>
          {blog?.created_by?.bio}
        </p>

        {/* <div className="tp-postbox-details-author-social">
          {blog?.social_data.map((s) => (
            <a href={s.link} target="_blank" className="me-1" key={s.id}>
              <i className={s.icon}></i>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetailsAuthor;
