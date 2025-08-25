"use client"
import social_data from "@/data/social-data";

const BlogShare = ({ title }) => {
  return (
      <div className="tp-postbox-details-share text-md-end">
        <span>Share:</span>
        {social_data(window.location.href, title).map((s) => (
          <a href={s.link} className="me-2" target="_blank" key={s.id} rel="noopener noreferrer">
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
  );
};

export default BlogShare;
