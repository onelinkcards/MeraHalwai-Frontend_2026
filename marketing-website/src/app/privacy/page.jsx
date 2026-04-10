import Privacy from '@/components/Privacy'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title: "Privacy Policy - Mera Halwai",
  description: "Learn about Mera Halwai's privacy policy and how we protect your personal information. Understand our data collection, usage, and security practices.",
  keywords: ["privacy policy", "data protection", "user privacy", "mera halwai privacy", "data security"],
  openGraph: {
    title: "Privacy Policy - Mera Halwai",
    description: "Learn about Mera Halwai's privacy policy and how we protect your personal information.",
    url: "https://www.merahalwai.com/privacy",
  },
  alternates: {
    canonical: "https://www.merahalwai.com/privacy",
  },
  robots: {
    index: true,
    follow: false, // Typically you don't want search engines to deeply follow legal pages
  },
};

const page = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Privacy/>
        <Footer/>
    </div>
  )
}

export default page