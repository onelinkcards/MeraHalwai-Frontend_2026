'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AppDownloadPage = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    let detectedDevice = 'desktop';
    
    // Check for Android
    if (/android/i.test(userAgent)) {
      detectedDevice = 'android';
    }
    // Check for iOS (iPhone, iPad, iPod)
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      detectedDevice = 'ios';
    }
    
    setDeviceType(detectedDevice);

    // Auto-redirect mobile users after 1.5 seconds
    if (detectedDevice === 'android' || detectedDevice === 'ios') {
      setRedirecting(true);
      const timer = setTimeout(() => {
        if (detectedDevice === 'android') {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.merahalwai&pcampaignid=web_share';
        } else if (detectedDevice === 'ios') {
          window.location.href = 'https://apps.apple.com/in/app/merahalwai-com/id6754564700';
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.merahalwai&pcampaignid=web_share';
  const appStoreUrl = 'https://apps.apple.com/in/app/merahalwai-com/id6754564700';

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar />
      
      <div className='flex-1 flex items-center justify-center px-4 md:px-6'
        style={{
          paddingTop: 'clamp(2rem, 4vw, 3rem)',
          paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          minHeight: 'calc(100vh - 200px)'
        }}
      >
        <div className='flex flex-col items-center gap-6 md:gap-8 w-full max-w-2xl text-center px-4 md:px-0'>
          {/* Logo */}
          <div className='w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40'>
            <Image
              src="/logo.svg"
              alt="Mera Halwai Logo"
              width={160}
              height={160}
              className='w-full h-full'
              priority
            />
          </div>

          {/* Heading */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl pixel text-[#8A3E1D] px-2'>
            Download the Mera Halwai App
          </h1>

          {/* Redirecting message for mobile */}
          {(deviceType === 'android' || deviceType === 'ios') && redirecting && (
            <div className='text-base sm:text-lg inter text-[#EC8A25] font-semibold animate-pulse text-center px-4'>
              {deviceType === 'android' 
                ? 'Redirecting to Google Play Store...' 
                : 'Redirecting to App Store...'}
            </div>
          )}

          {/* Desktop/Manual selection */}
          {(deviceType === 'desktop' || !redirecting) && (
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full px-2'>
              <Link
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
              >
                <Image
                  src="/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={80}
                  className="h-auto w-[180px] sm:w-[200px] md:w-[220px]"
                  style={{ maxHeight: '80px', minHeight: '70px' }}
                />
              </Link>

              <Link
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
              >
                <Image
                  src="/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  width={220}
                  height={80}
                  className="h-auto w-[200px] sm:w-[220px] md:w-[240px]"
                  style={{ maxHeight: '80px', minHeight: '70px' }}
                />
              </Link>
            </div>
          )}

          {/* Manual links for mobile users who want to choose */}
          {(deviceType === 'android' || deviceType === 'ios') && !redirecting && (
            <div className='mt-2 w-full px-4'>
              <p className='text-sm sm:text-base inter text-[#8A3E1D] mb-4 text-center'>
                Or choose your platform:
              </p>
              <div className='flex flex-col sm:flex-row gap-4 items-center justify-center w-full'>
                <Link
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src="/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={70}
                    className="h-auto w-[160px] sm:w-[180px]"
                    style={{ maxHeight: '70px', minHeight: '60px' }}
                  />
                </Link>

                <Link
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src="/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    width={200}
                    height={70}
                    className="h-auto w-[180px] sm:w-[200px]"
                    style={{ maxHeight: '70px', minHeight: '60px' }}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppDownloadPage;

