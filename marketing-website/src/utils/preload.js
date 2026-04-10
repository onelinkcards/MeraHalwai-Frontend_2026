/**
 * Utility functions for preloading resources
 */

/**
 * Preload critical images
 * @param {Array<string>} imagePaths - Array of image paths to preload
 */
export const preloadImages = (imagePaths = []) => {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    link.type = path.endsWith('.svg') ? 'image/svg+xml' : 'image';
    document.head.appendChild(link);
  });
};

/**
 * Preload critical fonts
 */
export const preloadFonts = () => {
  if (typeof window === 'undefined') return;
  
  const fontFiles = [
    '/fonts/sidewaretrialregular.otf',
    '/fonts/Helvetica.ttf'
  ];
  
  fontFiles.forEach(fontPath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = fontPath;
    link.type = fontPath.endsWith('.otf') ? 'font/otf' : 'font/ttf';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Initialize preloading of critical resources
 * @param {Object} options - Preload options
 * @param {Array<string>} options.images - Image paths to preload
 * @param {boolean} options.fonts - Whether to preload fonts
 */
export const initPreload = (options = { images: [], fonts: true }) => {
  if (typeof window === 'undefined') return;
  
  // Add default critical images
  const criticalImages = [
    '/logo.svg',
    '/bg-khana1.svg',
    '/bg-khana2.svg',
    '/khana1.svg',
    '/khana2.webp',
    ...options.images
  ];
  
  // Preload images
  preloadImages(criticalImages);
  
  // Preload fonts if enabled
  if (options.fonts) {
    preloadFonts();
  }
};