/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cache and CORS headers for OG/social image (publicly accessible, cacheable)
  async headers() {
    return [
      {
        source: '/og-image.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
  // Image optimization configuration
  images: {
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable SVG support
    dangerouslyAllowSVG: true,
    // Set content disposition type
    contentDispositionType: 'attachment',
    // Set content security policy for SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Set minimum cache TTL
    minimumCacheTTL: 60,
    // Set formats
    formats: ['image/webp', 'image/avif'],
  },
  
  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react'],
  },
  
  // Turbopack configuration (Next.js 16+)
  turbopack: {},
  
  // Webpack: no custom SVG rule (Next.js Image handles /public SVGs; avoids @svgr dependency for Vercel)
};

export default nextConfig;
