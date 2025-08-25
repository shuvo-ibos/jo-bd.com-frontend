'use client'
import React from "react";
import { Comment, Date, UserTwo } from "@/svg";

const PostboxDetailsTop = ({blog}) => {
  const {category,title,createdAt,comments,created_by} = blog || {};
  return (
    <div className="tp-postbox-details-top">
      <div className="tp-postbox-details-category">
        <span>
          <a href="#" className="text-capitalize">{category?.name}</a>
        </span>
      </div>
      <h3 className="tp-postbox-details-title">
        {title}
      </h3>
      <div className="tp-postbox-details-meta mb-50">
        <span data-meta="created_by">
          <UserTwo />
          By <a href="#">{" "}{created_by?.name}</a>
        </span>
        <span>
          <Date />
          {" "}{createdAt}
        </span>
        <span>
          <Comment />
          <a href="#">Comments ({comments})</a>
        </span>
      </div>
    </div>
  );
};

export default PostboxDetailsTop;
