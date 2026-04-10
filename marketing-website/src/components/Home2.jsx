import Image from 'next/image'
import React from 'react'
import Available from './Available'
import Button from './Button'

const Home2 = () => {
    return (
        <div className="w-full h-full relative"
            style={{
                paddingTop: "clamp(0.5rem, 8vh, 10rem)" // Capped the 200rem to 10rem so it doesn't vanish
            }}
        >
            <div className='w-full flex justify-end items-center flex-col h-fit'>
                <Image
                    src="/food.png"
                    alt="hero"
                    width={1000}
                    height={1000}
                    className='h-52 hidden xl:block absolute top-0 left-9 w-auto'
                />
                
                {/* Main Container: Removed 'hidden' so it shows on mobile */}
                <div className="w-[95%] md:flex hidden flex-col md:flex-row relative md:h-[45vw] lg:h-[40vw] justify-between rounded-4xl xl:rounded-[2.5vw] bg-[#EC8A25] overflow-hidden">
                    
                    <div className="flex h-[100%] flex-col justify-around relative z-50 w-[50%] md:w-[50%]"
                        style={{
                             padding: "20px 0 20px clamp(0.5rem,6vw,200rem) "
                        }}
                    >
                        {/* Subheading: Scales from text-lg to 2xl */}
                        <div className="text-[#fff] text-left text-lg md:text-sm lg:text-md xl:text-md inter font-medium">
                            What is Mera Halwai
                        </div>

                        {/* Heading: Responsive scaling for all breakpoints */}
                        <div className="text-xl sm:text-2xl md:text-[2.4vw] lg:text-[2.8vw] leading-tight pixel text-nowrap text-left text-[#fff]">
                            The Smarter Way to{","} <br /> Sweeten Your Celebrations
                        </div>

                        {/* Paragraph Section: Each line scales individually */}
                        <div className="flex flex-col gap-3 md:gap-[1vw] w-[90%] md:w-full">
                            <div className="text-[#fff] text-left text-sm sm:text-base md:text-[1.2vw] lg:text-[1.1vw] xl:text-[1vw] inter leading-relaxed">
                                <b>Mera Halwai is a smart platform</b> that connects you with trusted sweet shops and catering vendors for any event.
                            </div>

                            <div className="text-[#fff] text-left text-sm sm:text-base md:text-[1.2vw] lg:text-[1.1vw] xl:text-[1vw] inter leading-relaxed">
                                Whether you're planning <b>a wedding, festival, or house party</b>, we help you find the perfect match based on your needs and budget.
                            </div>

                            <div className="text-[#fff] text-left text-sm sm:text-base md:text-[1.2vw] lg:text-[1.1vw] xl:text-[1vw] inter leading-relaxed">
                                <b>Track your orders</b> live and enjoy doorstep delivery—All with just a few taps.
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex flex-col gap-4 scale-90 items-start origin-left sm:scale-100">
                            <Available/>
                            <Button text={"Get Started"} bgcolor={"#8A3E1D"} />
                        </div>
                    </div>

                    {/* Desktop Images */}
                    <div className="hidden md:block relative w-[40%] h-full">
                        <Image
                            src="/phone_bg.png"
                            alt="bg"
                            width={1000}
                            height={1000}
                            className='h-full absolute right-0 w-auto object-right'
                        />
                        <Image
                            src="/phone.png"
                            alt="phone"
                            width={1000}
                            height={1000}
                            className='h-full absolute xl:right-[25%] md:scale-[1] md:right-[25%] lg:right-[25%] lg:scale-[1] w-auto object-contain'
                        />
                    </div>

                </div>
                {/* Mobile Only View: Show the app image at the bottom of the orange card on small screens */}
                    <div className="md:hidden w-[95%] px-4 pb-6">
                         <Image
                            src="/mobile-app.jpg"
                            alt="mobile app"
                            width={1000}
                            height={1000}
                            className='rounded-2xl w-full h-auto'
                        />
                    </div>
            </div>
        </div>
    )
}

export default Home2