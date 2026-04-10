'use client';

import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { ScrollReveal } from '@/utils/scrollAnimations'

const AboutPageClient = () => {
  return (
    <div className='w-full min-h-full'>
        <Navbar/>
        <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
          <About/>
        </ScrollReveal>
        <Footer/>
    </div>
  )
}

export default AboutPageClient
