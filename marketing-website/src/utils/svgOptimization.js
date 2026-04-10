/**
 * Utility functions for SVG optimization
 * 
 * Since the project uses many SVG images, these utilities help optimize their loading
 */

/**
 * Inline critical SVGs to avoid additional network requests
 * 
 * @param {string} svgPath - Path to the SVG file
 * @returns {Promise<string>} - SVG content as string
 */
export const inlineSvg = async (svgPath) => {
  try {
    const response = await fetch(svgPath);
    if (!response.ok) throw new Error(`Failed to fetch SVG: ${svgPath}`);
    
    const svgText = await response.text();
    return svgText;
  } catch (error) {
    console.error('Error inlining SVG:', error);
    return null;
  }
};

/**
 * Create an optimized SVG component that can be directly used in React
 * 
 * @param {string} svgContent - SVG content as string
 * @param {Object} props - Additional props for the SVG
 * @returns {React.Component} - React component with the SVG
 */
export const createSvgComponent = (svgContent, props = {}) => {
  if (!svgContent) return null;
  
  // Create a div element to parse the SVG
  const div = document.createElement('div');
  div.innerHTML = svgContent;
  
  // Get the SVG element
  const svg = div.querySelector('svg');
  if (!svg) return null;
  
  // Apply additional props
  Object.entries(props).forEach(([key, value]) => {
    svg.setAttribute(key, value);
  });
  
  return svg.outerHTML;
};

/**
 * Preload SVG images
 * 
 * @param {Array<string>} svgPaths - Array of SVG paths to preload
 */
export const preloadSvgImages = (svgPaths = []) => {
  if (typeof window === 'undefined') return;
  
  svgPaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/svg+xml';
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Initialize SVG optimization
 */
export const initSvgOptimization = () => {
  // Preload critical SVG images
  preloadSvgImages([
    '/logo.svg',
    '/bg-khana1.svg',
    '/bg-khana2.svg',
    '/khana1.svg',
    '/khana2.webp'
  ]);
};