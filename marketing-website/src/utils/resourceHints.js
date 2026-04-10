/**
 * Utility functions for implementing resource hints
 * 
 * Resource hints help the browser prioritize resource loading
 */

/**
 * Add DNS prefetch hints for external domains
 * 
 * @param {Array<string>} domains - Array of domains to prefetch
 */
export const addDnsPrefetch = (domains = []) => {
  if (typeof window === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

/**
 * Add preconnect hints for external domains
 * 
 * @param {Array<string>} domains - Array of domains to preconnect
 * @param {boolean} crossOrigin - Whether to add crossorigin attribute
 */
export const addPreconnect = (domains = [], crossOrigin = true) => {
  if (typeof window === 'undefined') return;
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (crossOrigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Add prefetch hints for resources that will be needed soon
 * 
 * @param {Array<string>} resources - Array of resource URLs to prefetch
 */
export const addPrefetch = (resources = []) => {
  if (typeof window === 'undefined') return;
  
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = resource;
    document.head.appendChild(link);
  });
};

/**
 * Add prerender hints for pages that are likely to be visited next
 * 
 * @param {Array<string>} pages - Array of page URLs to prerender
 */
export const addPrerender = (pages = []) => {
  if (typeof window === 'undefined') return;
  
  pages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prerender';
    link.href = page;
    document.head.appendChild(link);
  });
};

/**
 * Initialize resource hints
 */
export const initResourceHints = () => {
  // Add DNS prefetch for common third-party domains
  addDnsPrefetch([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]);
  
  // Add preconnect for domains that will be used soon
  addPreconnect([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]);
  
  // Add prefetch for resources that will be needed soon
  addPrefetch([
    '/logo.svg',
    '/bg-khana1.svg',
    '/bg-khana2.svg'
  ]);
};