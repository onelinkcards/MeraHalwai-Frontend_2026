export async function GET() {
  const manifest = {
    name: "Mera Halwai - Sweets & Catering Platform",
    short_name: "Mera Halwai",
    description: "Discover & book trusted halwais, sweets & catering for every occasion",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6b35",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ["food", "business", "lifestyle"]
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
