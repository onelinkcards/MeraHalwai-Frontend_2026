import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sideware = localFont({
  src: [
    {
      path: '../../public/fonts/sidewaretrialregular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sideware',
  display: 'swap',
});

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
  display: 'swap',
});

const SITE_URL = 'https://www.merahalwai.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mera Halwai – Sweets & Catering Simplified",
    template: "%s | Mera Halwai"
  },
  description: "Discover & book trusted halwais, sweets & catering for every occasion. Customizable menus, smart filters, flexible payments & live order tracking.",
  keywords: [
    "halwai",
    "sweets",
    "catering",
    "indian sweets",
    "food ordering",
    "wedding catering",
    "mithai",
    "desserts",
    "traditional sweets",
    "catering services"
  ],
  authors: [{ name: "Mera Halwai" }],
  creator: "Mera Halwai",
  publisher: "Mera Halwai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.merahalwai.com/',
    siteName: 'Mera Halwai',
    title: 'Mera Halwai — Fresh Mithai & Namkeen, Made Locally.',
    description: 'Your trusted neighbourhood halwai for fresh sweets and snacks. Order easily via call or WhatsApp.',
    images: [
      {
        url: 'https://www.merahalwai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mera Halwai — Fresh Mithai & Namkeen, Made Locally.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mera Halwai — Fresh Mithai & Namkeen, Made Locally.',
    description: 'Fresh sweets and namkeen from your local halwai.',
    images: ['https://www.merahalwai.com/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code', // You'll need to replace this with actual verification code
  },
  alternates: {
    canonical: 'https://www.merahalwai.com/',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sideware.variable} ${helvetica.variable}`}>
      <head>
        <meta property="fb:app_id" content="1234567890" />
        <link
          rel="preload"
          href="/fonts/sidewaretrialregular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/bg-khana1.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/bg-khana2.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`bg-white antialiased`}
      >
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
