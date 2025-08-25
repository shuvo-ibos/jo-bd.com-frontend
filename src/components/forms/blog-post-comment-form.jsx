"use client";
import { useAddCommentMutation } from "@/redux/features/brandApi";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlogPostCommentForm = ({ blogId }) => {
  const [addComment] = useAddCommentMutation(); // ✅ Correctly destructured
  const [showCommentBox, setCommentBox] = useState(false);
  const [message, setMessage] = useState("");
  const [erros, setErros] = useState("");
  const [success, setSuccess] = useState("");
const { user } = useSelector((state) => state.auth);
const router = useRouter()
  useEffect(() => {
    const isAuthenticate = Cookies.get("userInfo");
    setCommentBox(!!isAuthenticate); // ✅ Simplified authentication check
  }, []);

  const handleSubmit = async () => {

    if (!message.trim()) {
      return setErros("Message cannot be empty"); // ✅ Trim to prevent empty spaces
    }

    try {
      const res = await addComment({
        blogId:blogId._id,
        message,
        created_by:user?._id,
       }).unwrap();
       setSuccess("Comment added successfully");
        setMessage("");
        setErros("");
        router.push(`/blog-details/${blogId?.slug}`)
    } catch (error) {
      if (error.data?.message) {
        return setErros(error.data.message);
      } else {
       return setErros("Failed to add comment");
      }
    }
  };

  return (
    <div>
      {
        erros &&
      <div style={{
        color:"red"
      }} >
        {erros}
      </div>
      }
      {
        success &&
      <div style={{
        color:"green"
      }} >
        {success}
      </div>
      }
      {showCommentBox ? (
        <div className="tp-postbox-details-form-wrapper">
          <div className="tp-postbox-details-form-inner">
            <div className="tp-postbox-details-input-box">
              <div className="tp-contact-input">
                <textarea
                  id="msg"
                  placeholder="Write your message here..."
                  value={message} // ✅ Controlled input
                  onChange={(e) =>{

                    setMessage(e.target.value)
                    setErros("")
                  }}
                />
              </div>
              <div className="tp-postbox-details-input-title">
                <label htmlFor="msg">Your Message</label>
              </div>
            </div>
          </div>
          <div className="tp-postbox-details-input-box">
            <button
              onClick={handleSubmit}
              className="tp-postbox-details-input-btn"
              type="button"
            >
              Post Comment
            </button>
          </div>
        </div>
      ) : (
        <h5>Login users can comment only</h5>
      )}
    </div>
  );
};

export default BlogPostCommentForm;
