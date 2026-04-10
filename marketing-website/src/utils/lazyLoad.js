'use client';

/**
 * Utility for lazy loading images using Intersection Observer
 */

/**
 * Initialize lazy loading for images
 * @param {string} selector - CSS selector for images to lazy load
 * @param {Object} options - IntersectionObserver options
 */
export const initLazyLoading = (selector = 'img[data-src]', options = {}) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const defaultOptions = {
    rootMargin: '200px 0px',
    threshold: 0.01,
    ...options
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        const srcset = img.getAttribute('data-srcset');

        if (src) img.src = src;
        if (srcset) img.srcset = srcset;

        img.onload = () => {
          img.classList.add('loaded');
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
        };

        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, defaultOptions);

  document.querySelectorAll(selector).forEach(img => {
    observer.observe(img);
  });

  return observer;
};

/**
 * Apply lazy loading to dynamically added images
 * @param {HTMLElement} img - Image element to lazy load
 * @param {Object} options - IntersectionObserver options
 */
export const lazyLoadImage = (img, options = {}) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !img) return;

  const defaultOptions = {
    rootMargin: '200px 0px',
    threshold: 0.01,
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.getAttribute('data-src');
        const srcset = image.getAttribute('data-srcset');

        if (src) image.src = src;
        if (srcset) image.srcset = srcset;

        image.onload = () => {
          image.classList.add('loaded');
          image.removeAttribute('data-src');
          image.removeAttribute('data-srcset');
        };

        observer.unobserve(image);
        observer.disconnect();
      }
    });
  }, defaultOptions);

  observer.observe(img);

  return observer;
};