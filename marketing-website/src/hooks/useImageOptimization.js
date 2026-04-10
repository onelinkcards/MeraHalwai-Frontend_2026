'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for image optimization
 * 
 * @param {Object} options - Hook options
 * @param {string} options.src - Image source URL
 * @param {boolean} options.preload - Whether to preload the image
 * @param {Function} options.onLoad - Callback function when image is loaded
 * @returns {Object} - Hook state and methods
 */
const useImageOptimization = ({
  src,
  preload = false,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!src) return;

    // Reset states when src changes
    setIsLoaded(false);
    setError(null);

    // Preload image if enabled
    if (preload) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoaded(true);
        if (onLoad) onLoad();
      };
      
      img.onerror = (err) => {
        setError(err);
      };

      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [src, preload, onLoad]);

  // Method to manually trigger image loading
  const loadImage = () => {
    if (isLoaded || !src) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };
    
    img.onerror = (err) => {
      setError(err);
    };
  };

  return {
    isLoaded,
    error,
    loadImage,
  };
};

export default useImageOptimization;