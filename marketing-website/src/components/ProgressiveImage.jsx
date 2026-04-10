'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * ProgressiveImage component for smooth image loading with blur-up effect
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Main image source
 * @param {string} props.placeholderSrc - Placeholder image source (small blurry version)
 * @param {string} props.alt - Alternative text
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {boolean} props.priority - Whether to prioritize loading
 * @param {Object} props.style - Custom styles
 * @param {string} props.className - CSS class names
 * @param {Object} props.rest - Additional props
 */
const ProgressiveImage = ({
  src,
  placeholderSrc,
  alt,
  width,
  height,
  priority = false,
  style,
  className = '',
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setImgSrc(placeholderSrc || src);
    setImgLoaded(false);
  }, [src, placeholderSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Main image */}
      <Image
        src={src}
        alt={alt || 'Image'}
        width={width || 300}
        height={height || 300}
        priority={priority}
        onLoad={() => {
          setImgLoaded(true);
          setImgSrc(src);
        }}
        className={`transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...rest}
      />
      
      {/* Placeholder/blur image */}
      {placeholderSrc && (
        <Image
          src={placeholderSrc}
          alt={alt || 'Image placeholder'}
          width={width || 300}
          height={height || 300}
          className={`absolute inset-0 transition-opacity duration-500 ${imgLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ filter: 'blur(10px)' }}
        />
      )}
    </div>
  );
};

export default ProgressiveImage;