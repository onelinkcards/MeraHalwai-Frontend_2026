'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Contact = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full'
            style={{
                padding: 'clamp(3rem, 8vw, 6rem) 0',
                gap: 'clamp(2.5rem, 5vw, 4rem)'
            }}
        >
            <div className="flex flex-col w-[90%] md:w-[80%]" style={{ gap: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                <ScrollReveal direction="up" distance={30} duration={0.8} delay={0.2}>
                    <div className="flex flex-col" style={{ gap: 'clamp(0.8rem, 1.5vw, 1.2rem)' }}>
                        <div className="text-2xl sm:text-3xl leading-snug md:text-5xl pixel text-center text-[#8A3E1D]">
                            CONTACT US
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            We'd love to hear from you
                        </div>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col lg:flex-row w-full"
                    style={{
                        gap: "clamp(2rem, 3vw, 3rem)"
                    }}
                >
                    {/* Contact Information */}
                    <ScrollReveal direction="left" distance={30} duration={0.8} delay={0.3} className="w-full">
                        <div className="bg-[#FFF9F0] rounded-xl flex flex-col shadow-lg h-full" 
                            style={{ 
                                gap: "clamp(1.5rem, 2.5vw, 2rem)", 
                                padding: 'clamp(2rem, 5vw, 3rem)' 
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}
                            >
                                GET IN TOUCH
                            </h2>
                            
                            <div className="flex flex-col"
                                style={{
                                    gap: "clamp(1.8rem, 2.5vw, 2.2rem)"
                                }}
                            >
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div style={{ gap: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Phone</h3>
                                        <p className="text-[#8A3E1D] inter">+91 73003 21034</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Email</h3>
                                        <p className="text-[#8A3E1D] inter">hello@merahalwai.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start" style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    <div className="rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#EB8B23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg pixel text-[#8A3E1D]" style={{ marginBottom: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>Address</h3>
                                        <p className="text-[#8A3E1D] inter">House number 1034, Mahaveer Nagar 2nd, Kota, Rajasthan 324005, India</p>
                                    </div>
                                </div>

                                {/* Quick action buttons – separate section with clear placement */}
                                <div
                                    className="mt-6 pt-5 border-t border-[#EB8B23]/25"
                                    style={{ marginTop: 'clamp(1.5rem, 2.5vw, 2rem)', paddingTop: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                                >
                                    <p className="text-[#8A3E1D]/90 inter font-semibold text-sm mb-3" style={{ marginBottom: 'clamp(0.6rem, 1vw, 0.9rem)' }}>
                                        Reach us directly
                                    </p>
                                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/917300321034"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2.5 text-white inter font-bold rounded-xl transition-all duration-200 min-w-[12rem] sm:min-w-[13rem] md:min-w-[14rem] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99]"
                                            style={{
                                                padding: 'clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)',
                                                backgroundColor: '#25D366',
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            <span className="text-xl sm:text-lg md:text-xl">Chat on WhatsApp</span>
                                        </a>
                                        <a
                                            href="https://merahalwai.onelink.cards/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2.5 text-white inter font-bold rounded-xl transition-all duration-200 min-w-[12rem] sm:min-w-[13rem] md:min-w-[14rem] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99]"
                                            style={{
                                                padding: 'clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)',
                                                backgroundColor: '#8A3E1D',
                                            }}
                                        >
                                            <Image src="/Component 13.png" alt="Onelink" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 object-contain" />
                                            <span className="text-xl sm:text-lg md:text-xl">Merahalwai Onelink</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Contact;