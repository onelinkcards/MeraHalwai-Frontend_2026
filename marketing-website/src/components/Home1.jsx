import React from 'react'
import Button from './Button'
import OptimizedImage from './OptimizedImage'
import Image from 'next/image'

const Home1 = () => {
    const mainAppBaseUrl =
        process.env.NEXT_PUBLIC_MAIN_APP_URL || 'https://mera-halwai-frontend-2026.vercel.app'
    const caterersHref = `${mainAppBaseUrl.replace(/\/$/, '')}/caterers`

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className='w-full relative h-[80vh]  xl:h-[60vh] flex flex-col justify-center items-center'
            style={{
                marginTop: 'clamp(3rem,3vw,200rem) 0',
            }}
        >
            <div className="absolute left-0 -top-[12%]">
                <OptimizedImage
                    src="/bg-khana1.svg"
                    alt="Decorative food illustration"
                    width={300}
                    height={300}
                    priority
                    style={{
                        width: 'clamp(10rem,6vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>

            <div className="absolute right-0 bottom-[0%]">
                <OptimizedImage
                    src="/bg-khana2.svg"
                    alt="Decorative food illustration"
                    width={300}
                    height={300}
                    priority
                    style={{
                        width: 'clamp(10rem,10vw,200rem)',
                        height: "auto"
                    }}
                />
            </div>
            <div className="flex relative flex-col items-center gap-7 w-[60%] xl:w-[80%] h-fit ">



                <div className="absolute left-[10%] -top-[15%]">
                    <OptimizedImage
                        src="/khana1.svg"
                        alt="Food illustration"
                        width={200}
                        height={200}
                        priority
                        className='float'
                        style={{
                            width: 'clamp(5rem,11vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="absolute rounded-b-full overflow-hidden"
                    style={{
                        bottom: 'clamp(9rem,10vw,100rem)',
                        right: "clamp(0.0001rem,6vw,100rem)"

                    }}
                >
                    <OptimizedImage
                        src="/khana2.png"
                        alt="Food illustration"
                        width={200}
                        height={200}
                        className='float2'
                        loading="eager"
                        style={{
                            width: 'clamp(5rem,11vw,200rem)',
                            height: "auto"
                        }}
                    />
                </div>

                <div className="w-full">
                    <div className="text-4xl  sm:text-5xl xl:text-6xl pixel text-center text-[#8A3E1D]"
                        style={{
                            fontSize: "clamp(2.25rem,4vw,200rem)"
                        }}
                    >
                        Your Perfect Event,
                    </div>
                    <div className="text-4xl sm:text-5xl xl:text-6xl text-center pixel text-[#EC8A25]"
                        style={{
                            fontSize: "clamp(2.25rem,4vw,200rem)"
                        }}>
                        Catered to Perfection
                    </div>
                </div>

                <div className="text-[#8A3E1D] text-center text-xl inter font-semibold"
                    style={{
                        fontSize: "clamp(1rem,1vw,200rem)"
                    }}
                >
                    Seamless discovery of trusted vendors that match your taste, budget, and vibe.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button text="Explore Caterers" bgcolor="#EC8A25" href={caterersHref} />
                    <Button text="Book a Caterer" bgcolor="#8A3E1D" href={caterersHref} />
                </div>


            </div>

            {/* Scroll Down Button - lower on phone so it doesn't touch Become Vendor / Download App */}
            <button
                onClick={scrollDown}
                className="absolute bottom-4 sm:bottom-6 md:bottom-12 cursor-pointer animate-bounce-vertical z-30 hover:opacity-80 transition-opacity"
                aria-label="Scroll down"
            >
                <Image
                    src="/scroll-down-icon.png"
                    alt="Scroll down"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-12 md:h-12"
                />
            </button>

        </div>
    )
}

export default Home1;