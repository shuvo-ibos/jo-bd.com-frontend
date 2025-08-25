'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const lightboxRef = useRef(null);
  const sliderRef = useRef(null);

  // Close the lightbox when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isAnimating) closeLightbox();
      if (e.key === 'ArrowRight' && isOpen && !isAnimating) goToNext(e);
      if (e.key === 'ArrowLeft' && isOpen && !isAnimating) goToPrevious(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, isOpen, isAnimating]);

  // Update slider position when current image changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentImage * 100}%)`;
    }
  }, [currentImage]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setPrevImage(index);
    setIsOpen(true);

    // Add active class after a small delay to trigger the CSS transition
    setTimeout(() => {
      if (lightboxRef.current) {
        lightboxRef.current.classList.add('active');
      }
    }, 10);
  };

  const closeLightbox = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Remove active class to trigger close animation
    if (lightboxRef.current) {
      lightboxRef.current.classList.remove('active');
    }

    // Wait for animation to complete before fully closing
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 300); // Match this with your CSS transition duration
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    if (isAnimating || currentImage === 0) return;

    setIsAnimating(true);
    setPrevImage(currentImage);
    setCurrentImage(prev => prev - 1);

    // Allow for new transitions after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Match this with your slide transition duration
  };

  const goToNext = (e) => {
    e.stopPropagation();
    if (isAnimating || currentImage === images.length - 1) return;

    setIsAnimating(true);
    setPrevImage(currentImage);
    setCurrentImage(prev => prev + 1);

    // Allow for new transitions after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Match this with your slide transition duration
  };

  return (
    <>
    <div className="container">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="album_image gallery-item" onClick={() => openLightbox(index)}>
            <Image
              src={image.img}
              alt={`gallery image ${index + 1}`}
              width={800}
              height={500}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
</div>
      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          ref={lightboxRef}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>

            {currentImage > 0 && (
              <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>‹</button>
            )}

            <div className="lightbox-content">
              <div className="lightbox-slider" ref={sliderRef}>
                {images.map((image, index) => (
                  <div key={index} className="lightbox-slide">

                    <Image
                      src={image.img}
                      alt={`gallery image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="lightbox-image"
                      priority={index === currentImage || index === prevImage}
                    />
                  </div>
                ))}
              </div>

              <div className="lightbox-caption">
                {images[currentImage].caption && (
                  <p>{images[currentImage].caption}</p>
                )}
              </div>
            </div>

            {currentImage < images.length - 1 && (
              <button className="lightbox-nav lightbox-next" onClick={goToNext}>›</button>
            )}

            <div className="lightbox-counter">{currentImage + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxGallery;