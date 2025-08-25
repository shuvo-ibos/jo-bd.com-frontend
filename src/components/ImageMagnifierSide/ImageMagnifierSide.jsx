import React, { useState, useRef } from "react";
import Image from "next/image";

function ImageMagnifierSide({
  src,
  alt,
  width = 350,
  height = 350,
  previewWidth = 150,
  previewHeight = 150,
  zoomLevel = 2,
  setHoverClass
}) {
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Calculate the size of the lens based on the zoom level
  const lensSize = {
    width: previewWidth / zoomLevel,
    height: previewHeight / zoomLevel,
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    // Get the position of the image container
    const { left, top } = imageRef.current.getBoundingClientRect();

    // Calculate cursor position relative to the image
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMousePosition({ x, y });
  };

  // Calculate lens position
  const getLensPosition = () => {
    const x = mousePosition.x - lensSize.width / 2;
    const y = mousePosition.y - lensSize.height / 2;

    // Ensure lens stays within image boundaries
    return {
      x: Math.max(0, Math.min(x, width - lensSize.width)),
      y: Math.max(0, Math.min(y, height - lensSize.height)),
    };
  };

  // Calculate background position for the zoomed image
  const getZoomedImagePosition = () => {
    // Calculate the ratio between the preview size and the lens size
    const ratioX = previewWidth / lensSize.width;
    const ratioY = previewHeight / lensSize.height;

    // Calculate the background position
    const x = (getLensPosition().x * -ratioX);
    const y = (getLensPosition().y * -ratioY);

    return { x, y };
  };

  const lensPos = getLensPosition();
  const zoomedPos = getZoomedImagePosition();

  return (
    <div className="image-magnifier-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* Original image with lens */}
      <div
        ref={imageRef}
        style={{ position: 'relative', cursor: 'crosshair' }}
        onMouseEnter={() => {
          setShowZoom(true)
          setHoverClass(true)
        }
      }
        onMouseLeave={() => {
          setShowZoom(false)
          setHoverClass(false)
        }
      }
        onMouseMove={handleMouseMove}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
          priority
        />

        {/* Lens indicator */}
        {showZoom && (
          <div
            style={{
              position: 'absolute',
              top: lensPos.y,
              left: lensPos.x,
              width: lensSize.width,
              height: lensSize.height,
              border: '2px solid #e5e7eb',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Zoomed preview */}
      {
        showZoom &&

      <div
        style={{
          position: 'absolute',
          width: previewWidth,
          height: previewHeight,
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          borderRadius: '4px',
          backgroundColor: '#F5F6F8',
          left:"600px",
          top:"20px",
          zIndex:9999
        }}
      >

          <div
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: `${zoomedPos.x}px ${zoomedPos.y}px`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${width * (previewWidth / lensSize.width)}px ${height * (previewHeight / lensSize.height)}px`,
              width: '100%',
              height: '100%',
            }}
          />

      </div>
        }
    </div>
  );
}

export default ImageMagnifierSide;