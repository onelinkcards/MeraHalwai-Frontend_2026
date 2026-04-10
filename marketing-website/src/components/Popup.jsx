import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Popup = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-gradient-to-br from-[#EC8A25] to-[#8A3E1D] flex flex-col gap-6 rounded-3xl shadow-2xl text-center mx-4"
                style={{
                    padding: "clamp(2rem,4vw,3rem)"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2
                    style={{
                        fontSize: "clamp(1.5rem,3vw,2.5rem)"
                    }}
                    className="text-white pixel"
                >
                    Download Our App
                </h2>

                <p className="text-white inter text-base md:text-lg font-medium">
                    Select Your Platform
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.merahalwai&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 rounded-lg overflow-hidden"
                        onClick={onClose}
                    >
                        <Image
                            src="/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
                            alt="Get it on Google Play"
                            width={180}
                            height={70}
                            className="h-auto w-[180px] sm:w-[200px]"
                            style={{ maxHeight: '70px', minHeight: '60px' }}
                        />
                    </Link>

                    <Link
                        href="https://apps.apple.com/in/app/merahalwai-com/id6754564700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 rounded-lg overflow-hidden"
                        onClick={onClose}
                    >
                        <Image
                            src="/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                            alt="Download on the App Store"
                            width={210}
                            height={70}
                            className="h-auto w-[210px] sm:w-[230px]"
                            style={{ maxHeight: '70px', minHeight: '60px' }}
                        />
                    </Link>
                </div>

                <button
                    onClick={onClose}
                    className="mt-2 px-6 py-2 helvetica rounded-full bg-white text-[#EC8A25] font-bold tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;