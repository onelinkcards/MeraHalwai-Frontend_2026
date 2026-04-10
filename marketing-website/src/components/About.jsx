'use client';

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { ScrollReveal } from '@/utils/scrollAnimations'

const About = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full gap-32'
            style={{
                padding: 'clamp(1rem, 6vw, 300rem) 0'
            }}
        >

            <div className="flex md:flex-row flex-col items-center justify-center w-full md:w-[75%] gap-10 md:gap-0 md:justify-between">

                <div className="flex flex-col gap-8 w-[80%] md:w-[60%]"
                >
                    <ScrollReveal direction="up" distance={30} duration={0.6} delay={0.3}>
                        <div className="flex flex-col">
                            <div className="text-2xl sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#8A3E1D]"
                            >
                                Merahalwai began with a simple idea
                            </div>
                            <div className="text-[1.7rem] sm:text-3xl leading-snug md:text-4xl pixel text-left text-[#EB8B23]"
                            >
                                catering shouldn't be complicated.
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" distance={30} duration={0.6} delay={0.5}>
                        <div className="text-[#8A3E1D] text-left text-sm md:text-xl inter font-semibold">
                            When Vijay  struggled to find trustworthy, budget-friendly sweets for a family event, it sparked a mission to change how people discover halwais. Today, Merahalwai connects you with curated, high-quality caterers across India—so your celebrations can be as joyful and stress-free as they deserve to be.
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction="up" distance={20} duration={0.6} delay={0.7}>
                        <div className="hidden md:flex">
                            <Button text="Get Started" bgcolor={"#EC8A25"} />
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="left" className='w-[70%] md:w-[30%]' distance={40} duration={0.8} delay={0.4}>
                    <div className="w-full">
                        <Image
                            src="/sir.webp"
                            alt="about"
                            width={100}
                            height={100}
                            className='aspect-square w-full h-auto'
                        />
                    </div>
                </ScrollReveal>
            </div>




            <ScrollReveal direction="up" distance={50} duration={0.8} delay={0.6}>
                <div className="flex w-full justify-center">
                    <div className="w-full md:w-[75%] md:rounded-4xl overflow-hidden md:min-h-[40vh] flex md:flex-row flex-col">
                        <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-end gap-5 bg-[#8A3E1D] md:min-h-[40vh] min-h-0"
                            style={{
                                padding: "clamp(2em, 3vw, 3em) clamp(1.5em, 2.5vw, 2em)" 
                            }}
                        >
                            <ScrollReveal  className='w-full  flex flex-col justify-between items-center md:items-end' direction="right" distance={30} duration={0.6} delay={0.8}>
                                <div className="text-white md:text-right text-sm sm:text-lg md:text-xl max-w-[70%]">
                                    To become India's most trusted and comprehensive catering network—empowering hosts to celebrate effortlessly and allowing halwais to flourish across every neighborhood.
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className='w-full shrink-0' direction="up" distance={20} duration={0.6} delay={1}>
                                <div className="text-4xl sm:text-5xl md:text-6xl w-full leading-tight pixel text-right text-[#EB8B23] pt-2">
                                    Vision
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start gap-5 bg-[#EC8A25] md:min-h-[40vh] min-h-0"
                            style={{
                                padding: "clamp(2em, 3vw, 3em) clamp(1.5em, 2.5vw, 2em)"
                            }}
                        >
                            <ScrollReveal direction="left" className='w-full flex flex-col justify-between items-center md:items-start' distance={30} duration={0.6} delay={0.8}>
                                <div className="text-white text-left text-sm sm:text-lg md:text-xl max-w-[70%]">
                                    To simplify event catering by offering a seamless platform that matches customers with trusted local halwai vendors, ensuring memorable experiences tailored to every budget and taste.
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className='w-full shrink-0' direction="up" distance={20} duration={0.6} delay={1}>
                                <div className="text-4xl sm:text-5xl md:text-6xl w-full leading-tight pixel text-right md:text-left text-[#8A3E1D] pt-2">
                                    Mission
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default About