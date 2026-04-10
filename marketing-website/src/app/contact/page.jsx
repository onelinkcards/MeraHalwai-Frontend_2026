import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title: "Contact Us - Mera Halwai",
  description: "Get in touch with Mera Halwai for support, partnerships, or inquiries. Find our contact information, address, and ways to reach our customer service team.",
  keywords: ["contact mera halwai", "customer support", "get in touch", "help center", "contact information"],
  openGraph: {
    title: "Contact Us - Mera Halwai", 
    description: "Get in touch with Mera Halwai for support, partnerships, or inquiries.",
    url: "https://www.merahalwai.com/contact",
  },
  alternates: {
    canonical: "https://www.merahalwai.com/contact",
  },
};

const page = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page