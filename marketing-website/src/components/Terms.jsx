'use client';

import React from 'react';
import { ScrollReveal } from '@/utils/scrollAnimations';

const Terms = () => {
    const sections = [
        {
            title: "AGREEMENT TO OUR LEGAL TERMS",
            content: [
                "We are Re-Shagun hospitality private limited, doing business as Mera halwai.com ('Company', 'we', 'us', or 'our'), a company registered in India at House number 1034 mahaveer Nagar 2nd kota, Jaipur, Rajasthan 324005.",
                "We operate the website https://www.merahalwai.com/ (the 'Site'), the mobile application merahalwai.com (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').",
                "User side: Mera halwai.com is online platform for bulk food, you can book your catering service via India's online platform (mera halwai.com). You can customise your number of guest in this application. You can pay online (UPI, CREDIT CARD, DEBIT CARD OTHER PAYMENT PLATFORM). You can choose your category according to your events bronze for the middle budget, silver for the upper middle budget and gold for the premium budget.",
                "Vendor side: you can received online catering order and full fill. Catering vendor can received payment from merahalwai.com one day before of the event date but if any type of bank holidays, national holiday, war, any time of lockdown situation, so company will pay the payment according to bank open day / gov of India's T&C.",
                "You can contact us by phone at +91 73003 21034, email at hello@merahalwai.com, or by mail to House number 1034 mahaveer Nagar 2nd kota, Jaipur, Rajasthan 324005, India.",
                "These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Re-Shagun hospitality private limited, concerning your access to and use of the Services."
            ],
            important: "IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY."
        },
        {
            title: "OUR SERVICES",
            content: [
                "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.",
                "Those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
                "The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services."
            ]
        },
        {
            title: "USER REGISTRATION",
            content: [
                "You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password.",
                "We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable."
            ]
        },
        {
            title: "PURCHASES AND PAYMENT",
            content: [
                "We accept the following forms of payment: Visa, Mastercard, UPI, OTHER ONLINE PLATFORM, Rupay card.",
                "You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services.",
                "Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Indian rupees.",
                "We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order."
            ]
        },
        {
            title: "REFUND POLICY",
            content: [
                "All sales are final and no refund will be issued."
            ]
        },
        {
            title: "PROHIBITED ACTIVITIES",
            content: [
                "You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.",
                "As a user of the Services, you agree not to:",
                "• Systematically retrieve data or other content from the Services",
                "• Trick, defraud, or mislead us and other users",
                "• Circumvent, disable, or otherwise interfere with security-related features",
                "• Use any information obtained from the Services to harass, abuse, or harm another person",
                "• Make improper use of our support services",
                "• Use the Services in a manner inconsistent with any applicable laws or regulations",
                "• Upload or transmit viruses, Trojan horses, or other harmful material",
                "• Engage in any automated use of the system",
                "• Attempt to impersonate another user or person",
                "• Interfere with, disrupt, or create an undue burden on the Services"
            ]
        },
        {
            title: "INTELLECTUAL PROPERTY RIGHTS",
            content: [
                "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services.",
                "Our Content and Marks are protected by copyright and trademark laws and treaties around the world.",
                "Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable licence to access the Services and download or print a copy of any portion of the Content solely for your personal, non-commercial use."
            ]
        },
        {
            title: "USER REPRESENTATIONS",
            content: [
                "By using the Services, you represent and warrant that:",
                "• All registration information you submit will be true, accurate, current, and complete",
                "• You will maintain the accuracy of such information and promptly update as necessary",
                "• You have the legal capacity and agree to comply with these Legal Terms",
                "• You are not a minor in the jurisdiction in which you reside",
                "• You will not access the Services through automated or non-human means",
                "• You will not use the Services for any illegal or unauthorised purpose"
            ]
        },
        {
            title: "CONTACT INFORMATION",
            content: [
                "If you have any questions about these Terms of Service, you can contact us:"
            ],
            contactInfo: [
                { type: "Phone", value: "+91 73003 21034" },
                { type: "Email", value: "hello@merahalwai.com" },
                { type: "Address", value: "House number 1034 mahaveer Nagar 2nd kota, Jaipur, Rajasthan 324005, India" }
            ]
        }
    ];

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
                            TERMS & CONDITIONS
                        </div>
                        {/* <div className="text-[1rem] sm:text-xl leading-snug md:text-2xl pixel text-center text-[#EB8B23]">
                            Last updated July 13, 2025
                        </div> */}
                    </div>
                </ScrollReveal>

                <div className="text-[#8A3E1D] text-left text-sm md:text-lg inter font-medium" 
                    style={{ gap: 'clamp(2rem, 3vw, 2.5rem)' }}
                >
                    {sections.map((section, index) => (
                        <ScrollReveal key={index} direction="up" distance={30} duration={0.4} delay={0}>
                            <div className="bg-[#FFF9F0] rounded-xl shadow-lg border border-[#EB8B23]/20" 
                                style={{ 
                                    padding: 'clamp(2rem, 5vw, 3rem)',
                                    marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                                }}
                            >
                                <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                    style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                                >
                                    {section.title}
                                </h2>
                                
                                <div style={{ gap: 'clamp(1rem, 1.5vw, 1.2rem)' }} className="flex flex-col">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} style={{ marginBottom: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                    
                                    {section.important && (
                                        <div className="bg-[#EB8B23]/10 rounded-lg border-l-4 border-[#EB8B23]" 
                                            style={{ padding: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                                        >
                                            <p className="font-semibold text-[#8A3E1D]">
                                                <strong>IMPORTANT:</strong> {section.important}
                                            </p>
                                        </div>
                                    )}
                                    
                                    {section.contactInfo && (
                                        <div className="flex flex-col" style={{ gap: 'clamp(0.8rem, 1.2vw, 1rem)' }}>
                                            {section.contactInfo.map((contact, cIndex) => (
                                                <div key={cIndex} className="flex items-start" style={{ gap: 'clamp(0.8rem, 1vw, 1rem)' }}>
                                                    <div className="w-2 h-2 bg-[#EB8B23] rounded-full mt-2 flex-shrink-0"></div>
                                                    <div className="flex flex-col sm:flex-row sm:items-center" style={{ gap: 'clamp(0.3rem, 0.5vw, 0.5rem)' }}>
                                                        <span className="font-semibold text-[#EB8B23]">{contact.type}:</span>
                                                        <span className="break-words">{contact.value}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}

                    {/* Additional Important Notes */}
                    <ScrollReveal direction="up" distance={30} duration={0.4} delay={0}>
                        <div className="bg-gradient-to-br from-[#EB8B23]/5 to-[#8A3E1D]/5 rounded-xl shadow-lg border-2 border-[#EB8B23]/30" 
                            style={{ 
                                padding: 'clamp(2rem, 5vw, 3rem)',
                                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
                            }}
                        >
                            <h2 className="text-xl md:text-3xl pixel text-[#8A3E1D]" 
                                style={{ marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                            >
                                IMPORTANT NOTICES
                            </h2>
                            
                            <div style={{ gap: 'clamp(1.2rem, 1.8vw, 1.5rem)' }} className="flex flex-col">
                                <div className="bg-[#EB8B23]/10 rounded-lg border border-[#EB8B23]/30" 
                                    style={{ padding: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                                >
                                    <p className="font-semibold text-[#8A3E1D]">
                                        <strong>Terms Updates:</strong> Whenever application will update term and condition, it's user's duty to check and update yourself.
                                    </p>
                                </div>
                                
                                <div className="bg-[#8A3E1D]/10 rounded-lg border border-[#8A3E1D]/30" 
                                    style={{ padding: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                                >
                                    <p className="font-semibold text-[#8A3E1D]">
                                        <strong>Age Requirement:</strong> The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                                    </p>
                                </div>
                                
                                <div className="bg-[#EB8B23]/10 rounded-lg border border-[#EB8B23]/30" 
                                    style={{ padding: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                                >
                                    <p className="font-semibold text-[#8A3E1D]">
                                        <strong>Vendor Payment:</strong> If vendor denies after order acceptance, reasonable percentage will be deducted from principal amount up to 1%-10%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Table of Contents */}
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
                                TABLE OF CONTENTS
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                                {[
                                    "1. OUR SERVICES", "2. INTELLECTUAL PROPERTY RIGHTS", "3. USER REPRESENTATIONS", 
                                    "4. USER REGISTRATION", "5. PURCHASES AND PAYMENT", "6. POLICY", 
                                    "7. PROHIBITED ACTIVITIES", "8. USER GENERATED CONTRIBUTIONS", "9. CONTRIBUTION LICENCE", 
                                    "10. GUIDELINES FOR REVIEWS", "11. MOBILE APPLICATION LICENCE", "12. SOCIAL MEDIA",
                                    "13. ADVERTISERS", "14. SERVICES MANAGEMENT", "15. PRIVACY POLICY",
                                    "16. COPYRIGHT INFRINGEMENTS", "17. TERM AND TERMINATION", "18. MODIFICATIONS AND INTERRUPTIONS",
                                    "19. GOVERNING LAW", "20. DISPUTE RESOLUTION", "21. CORRECTIONS",
                                    "22. DISCLAIMER", "23. LIMITATIONS OF LIABILITY", "24. INDEMNIFICATION",
                                    "25. USER DATA", "26. ELECTRONIC COMMUNICATIONS", "27. MISCELLANEOUS", "28. CONTACT US"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center" style={{ gap: 'clamp(0.6rem, 0.8vw, 0.8rem)' }}>
                                        <div className="w-1.5 h-1.5 bg-[#EB8B23] rounded-full flex-shrink-0"></div>
                                        <span className="text-[#8A3E1D] hover:text-[#EB8B23] transition-colors duration-200 cursor-pointer">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Terms;