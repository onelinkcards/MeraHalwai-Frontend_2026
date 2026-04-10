import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const Home8 = () => {
    return (
        <div id="become-vendor" className='w-full h-full flex xl:flex-row flex-col justify-center'
            style={{
                padding: "0 clamp(1rem,5vw,200rem) clamp(1rem,5vw,200rem) clamp(1rem,5vw,200rem)",
                marginTop: "-clamp(2rem,5vw,4rem)"

            }}
        >
            <div className="flex xl:flex-row flex-col justify-center  w-full xl:w-[90%] h-fit">
                <div className="flex flex-col xl:items-start items-center justify-center gap-5 xl:gap-6 w-full xl:w-[50%]">
                    <div id="vendor-title" className="text-xl w-[90%]  xl:w-full sm:text-5xl leading-snug xl:text-5xl pixel text-center xl:text-left text-[#8A3E1D]"
                    >
                        GROW YOUR CATERING BUSINESS, WITHOUT THE CALLS AND CHAOS.
                    </div>


                    <div className="text-[#3C3C3C] w-[90%] max-w-md xl:w-full text-center xl:text-left text-lg md:text-2xl inter font-semibold">
                        Everything you need to get more orders, manage bookings, and grow — right on your phone.
                    </div>
                    <div className="w-full xl:w-[50%] flex xl:hidden flex-col items-center justify-center gap-3 h-full">
                        <div className="flex items-end justify-center gap-4">
                            <Link href="/app" className="transition-all duration-300 hover:scale-105 active:scale-95">
                                <Image
                                    alt='Phone with app'
                                    src="/qr-ph.svg"
                                    width={400}
                                    height={400}
                                    loading="eager"
                                    className='h-[200px] md:h-[240px] w-auto'
                                />
                            </Link>
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-[#8A3E1D] text-center text-sm md:text-base inter font-semibold">
                                    Available On
                                </div>
                                <Link href="/app" className="transition-all duration-300 hover:scale-105 active:scale-95">
                                    <Image
                                        alt='QR Code - Scan to download app'
                                        src="/icons/qr.png"
                                        width={180}
                                        height={180}
                                        loading="eager"
                                        className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: 'clamp(2rem,4vw,3rem)' }}>
                        <Button text={"Become a Vendor"} bgcolor={"#8A3E1D"} href="https://vendors.merahalwai.com/vendor/onboarding" />
                    </div>
                </div>

                <div className="hidden w-full xl:w-[40%] xl:flex flex-col items-center justify-center gap-3 h-full">
                    <div className="flex items-end justify-center gap-4 xl:gap-6">
                        <Link href="/app" className="transition-all duration-300 hover:scale-105 active:scale-95">
                            <Image
                                alt='Phone with app'
                                src="/qr-ph.svg"
                                width={400}
                                height={400}
                                loading="eager"
                                className='h-[260px] xl:h-[300px] w-auto'
                            />
                        </Link>
                        <div className="flex flex-col items-center gap-3">
                            <div className="text-[#8A3E1D] text-center text-base xl:text-lg inter font-semibold">
                                Available On
                            </div>
                            <Link href="/app" className="transition-all duration-300 hover:scale-105 active:scale-95">
                                <Image
                                    alt='QR Code - Scan to download app'
                                    src="/icons/qr.png"
                                    width={240}
                                    height={240}
                                    loading="eager"
                                    className='w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] object-contain'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.merahalwai&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src="/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
                                alt="Get it on Google Play"
                                width={180}
                                height={60}
                                loading="eager"
                                className="h-[60px] w-[180px] object-contain"
                            />
                        </Link>
                        <Link
                            href="https://apps.apple.com/in/app/merahalwai-com/id6754564700"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
                        >
                            <Image
                                src="/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                alt="Download on the App Store"
                                width={180}
                                height={60}
                                loading="eager"
                                className="h-[60px] w-[180px] object-contain"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home8