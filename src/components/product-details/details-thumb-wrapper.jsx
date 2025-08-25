'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import PopupVideo from "../common/popup-video";
import ImageZoom from "react-image-magnifier-zoom";
import ImageMagnifierSide from "../ImageMagnifierSide/ImageMagnifierSide";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoId = false,
  status,
  setHoverClass
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <nav>
          <div className="nav nav-tabs flex-sm-column">
            {imageURLs?.map((item, i) => (
              <button
                key={i}
                className={`nav-link ${item.img === activeImg ? "active" : ""}`}
                onClick={() => handleImageActive(item)}
              >
                <Image
                  src={item.img}
                  alt="image"
                  width={78}
                  height={100}
                  style={{ width: "100%", height: "100%" }}

                />
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content m-img">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative zoomImage "
            //  onMouseEnter={()=>setHoverClass(true)}
            // onMouseLeave={()=>setHoverClass(false)}

            >
              <ImageMagnifierSide
                src={activeImg}
                alt="Product description"
                width={imgWidth}
                height={imgHeight}
                previewWidth={350}
                previewHeight={350}
                zoomLevel={2}
                setHoverClass={setHoverClass}
              />

               {/* <ImageZoom
               className="zoomImage"
                      src={activeImg}
                      width={imgWidth}
                      height={imgHeight}
                      magnifierSize={100}
                      zoomLevel={2}
                      enabled={true}
                    /> */}
              {/* <Image
                src={activeImg}
                alt="product img"
                width={imgWidth}
                height={imgHeight}
              /> */}
              <div className="tp-product-badge">
                {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
              </div>
              {videoId && (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="tp-product-details-thumb-video"
                >
                  <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal popup start */}
      {videoId && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={videoId}
        />
      )}
      {/* modal popup end */}
    </>
  );
};

export default DetailsThumbWrapper;
