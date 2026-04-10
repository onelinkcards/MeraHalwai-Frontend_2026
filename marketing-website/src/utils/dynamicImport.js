'use client';

import dynamic from 'next/dynamic';

/**
 * Utility for dynamically importing components
 * 
 * This helps reduce the initial bundle size by loading components only when needed
 */

/**
 * Dynamically import a component with loading state
 * 
 * @param {Function} importFunc - Import function for the component
 * @param {Object} options - Dynamic import options
 * @returns {React.Component} - Dynamically imported component
 */
export const dynamicComponent = (importFunc, options = {}) => {
  return dynamic(() => importFunc(), {
    loading: () => <div className="loading-placeholder">Loading...</div>,
    ssr: true,
    ...options,
  });
};

/**
 * Preload a component without rendering it
 * 
 * @param {string} componentPath - Path to the component
 */
export const preloadComponent = (componentPath) => {
  if (typeof window === 'undefined') return;
  
  // Create a dynamic import to preload the component
  const preload = () => import(componentPath);
  preload();
};

/**
 * Dynamically import multiple components
 * 
 * @param {Object} components - Object with component names as keys and import functions as values
 * @param {Object} options - Dynamic import options
 * @returns {Object} - Object with dynamically imported components
 */
export const dynamicComponents = (components, options = {}) => {
  const dynamicComps = {};
  
  Object.entries(components).forEach(([name, importFunc]) => {
    dynamicComps[name] = dynamic(() => importFunc(), {
      loading: () => <div className="loading-placeholder">Loading...</div>,
      ssr: true,
      ...options,
    });
  });
  
  return dynamicComps;
};