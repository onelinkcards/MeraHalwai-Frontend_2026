'use client';

import React from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Privacy = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-full'
            style={{
                padding: 'clamp(3rem, 8vw, 6rem) 0',
                gap: 'clamp(2.5rem, 5vw, 4rem)'
            }}
        >
            <div className="flex flex-col w-[90%] md:w-[80%]" style={{ gap: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                    <div className="flex flex-col" style={{ gap: 'clamp(0.8rem, 1.5vw, 1.2rem)' }}>
                        <div className="text-2xl sm:text-3xl leading-snug md:text-5xl pixel text-center text-[#8A3E1D]">
                            PRIVACY POLICY
                        </div>
                        <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            Last updated July 13, 2025
                        </div>
                    </div>
                </ScrollReveal>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium">
                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                COLLECTING AND USING YOUR PERSONAL DATA
                            </h2>
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(0.8rem, 1.2vw, 1rem)' }}
                            >
                                Types of Data Collected
                            </h3>
                            <p style={{ marginTop: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                We collect various types of information to provide and improve our service to you. Below are the detailed categories of data we may collect.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                            >
                                Personal Data
                            </h3>
                            <p style={{ marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)' }}>
                                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                            </p>
                            <div className="bg-[#EB8B23]/10 rounded-lg" 
                                style={{ padding: 'clamp(1.5rem, 2vw, 2rem)' }}
                            >
                                <ul style={{ gap: 'clamp(0.6rem, 0.8vw, 0.8rem)' }} className="flex flex-col">
                                    <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span>Email address</span>
                                    </li>
                                    <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span>First name and last name</span>
                                    </li>
                                    <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span>Phone number</span>
                                    </li>
                                    <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span>Address, State, Province, ZIP/Postal code, City</span>
                                    </li>
                                    <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                        <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span>Usage Data</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                            >
                                Usage Data
                            </h3>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    Usage Data is collected automatically when using the Service.
                                </p>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                                </p>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                                </p>
                                <p>
                                    We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                            >
                                Information from Third-Party Social Media Services
                            </h3>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)' }}>
                                    The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
                                </p>
                                <div className="bg-[#EB8B23]/10 rounded-lg" 
                                    style={{ 
                                        padding: 'clamp(1.5rem, 2vw, 2rem)',
                                        marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)'
                                    }}
                                >
                                    <ul style={{ gap: 'clamp(0.6rem, 0.8vw, 0.8rem)' }} className="flex flex-col">
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Google</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Facebook</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Instagram</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Twitter</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>LinkedIn</span>
                                        </li>
                                    </ul>
                                </div>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                                </p>
                                <p>
                                    You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                            >
                                Information Collected while Using the Application
                            </h3>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)' }}>
                                    While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
                                </p>
                                <div className="bg-[#EB8B23]/10 rounded-lg" 
                                    style={{ 
                                        padding: 'clamp(1.5rem, 2vw, 2rem)',
                                        marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)'
                                    }}
                                >
                                    <ul style={{ gap: 'clamp(0.6rem, 0.8vw, 0.8rem)' }} className="flex flex-col">
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Information regarding your location</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Information from your Device's phone book (contacts list)</span>
                                        </li>
                                        <li className="flex items-center" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                            <span>Pictures and other information from your Device's camera and photo library</span>
                                        </li>
                                    </ul>
                                </div>
                                <p style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                    We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.
                                </p>
                                <p>
                                    You can enable or disable access to this information at any time, through Your Device settings.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h3 className="text-lg md:text-2xl pixel text-[#EB8B23]" 
                                style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                            >
                                Use of Your Personal Data
                            </h3>
                            <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                <p style={{ marginBottom: 'clamp(1.2rem, 1.8vw, 1.5rem)' }}>
                                    The Company may use Personal Data for the following purposes:
                                </p>
                                <div className="bg-[#EB8B23]/10 rounded-lg" 
                                    style={{ padding: 'clamp(1.5rem, 2vw, 2rem)' }}
                                >
                                    <ul style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }} className="flex flex-col">
                                        <li className="flex items-start" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0" style={{ marginTop: '0.4rem' }}></div>
                                            <span>To provide and maintain our Service, including to monitor the usage of our Service.</span>
                                        </li>
                                        <li className="flex items-start" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                            <div className="w-2 h-2 bg-[#EB8B23] rounded-full flex-shrink-0" style={{ marginTop: '0.4rem' }}></div>
                                            <span>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Privacy;