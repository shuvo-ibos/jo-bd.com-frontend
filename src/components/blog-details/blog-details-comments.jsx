"use client"
import React from "react";
import Image from "next/image";
import {  useGetCommentQuery } from "@/redux/features/brandApi";

const BlogDetailsComments = ({blog}) => {

  const { data: comment, isError, isLoading } = useGetCommentQuery(blog._id);

  if (isLoading) return <div>Loading comments...</div>;
  if (isError) return <div>Error loading comments.</div>;


  if (isLoading) return <div>Loading settings...</div>;
  if (isError) return <div>Error loading settings.</div>;



  return (
    <div className="tp-postbox-details-comment-wrapper">
                  <h3 className="tp-postbox-details-comment-title">Comments ({comment.totalComments})</h3>
    <div className="tp-postbox-details-comment-inner">
      <ul>
        {comment?.comments.map((comment,index) => (
          <li key={index}>
            <div className="tp-postbox-details-comment-box d-sm-flex align-items-start">
              <div className="tp-postbox-details-comment-thumb">
                <Image src={comment?.created_by?.imageURL} alt="user img" width={90} height={90} />
              </div>
              <div className="tp-postbox-details-comment-content">
                <div className="tp-postbox-details-comment-top d-flex justify-content-between align-items-start">
                  <div className="tp-postbox-details-comment-avater">
                    <h4 className="tp-postbox-details-comment-avater-title">
                      {comment?.created_by?.name}
                    </h4>
                    <span className="tp-postbox-details-avater-meta">
                      {comment?.createdAt}
                    </span>
                  </div>
                </div>
                <p>{comment.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default BlogDetailsComments;
