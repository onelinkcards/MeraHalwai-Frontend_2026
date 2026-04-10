export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.merahalwai.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Block access to sensitive files
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.env*
Disallow: /package.json
Disallow: /package-lock.json
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
