'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * OptimizedImage component for better image loading performance
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for the image
 * @param {number} props.width - Width of the image
 * @param {number} props.height - Height of the image
 * @param {boolean} props.priority - Whether the image should be prioritized
 * @param {Object} props.style - Custom styles for the image
 * @param {string} props.className - CSS class names
 * @param {string} props.loading - Loading strategy ('lazy', 'eager')
 * @param {Function} props.onLoad - Callback function when image is loaded
 * @param {Object} props.rest - Additional props to pass to the Image component
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  style,
  className = '',
  loading,
  onLoad,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <Image
        src={src}
        alt={alt || 'Image'}
        width={width || 300}
        height={height || 300}
        priority={priority}
        loading={loading || (priority ? 'eager' : 'lazy')}
        onLoad={handleImageLoad}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage;