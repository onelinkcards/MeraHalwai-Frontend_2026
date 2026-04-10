import Terms from '@/components/Terms'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title: "Terms & Conditions - Mera Halwai",
  description: "Read Mera Halwai's terms and conditions for using our platform. Understand your rights and responsibilities when booking halwais and catering services.",
  keywords: ["terms and conditions", "user agreement", "mera halwai terms", "legal terms", "platform rules"],
  openGraph: {
    title: "Terms & Conditions - Mera Halwai",
    description: "Read Mera Halwai's terms and conditions for using our platform.",
    url: "https://www.merahalwai.com/terms",
  },
  alternates: {
    canonical: "https://www.merahalwai.com/terms",
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
        <Terms/>
        <Footer/>
    </div>
  )
}

export default page