import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Available = ({ textColor = 'text-black' }) => {
  return (
    <div className='flex flex-row justify-left items-center gap-10 md:gap-8 origin-left scale-70'>
      <div className={`${textColor} text-nowrap text-center md:text-left font-medium text-xl sm:text-lg md:text-3xl`}>
        Available On
      </div>
      <div className="flex flex-row gap-3 justify-center md:justify-start">
        <Link
          href="https://play.google.com/store/apps/details?id=com.merahalwai&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
        >
          <Image
            src="/icons/GetItOnGooglePlay_Badge_Web_color_English.png"
            alt="Get it on Google Play"
            width={180}
            height={60}
            className="h-[60px] w-[180px] object-contain"
          />
        </Link>
        <Link
          href="https://apps.apple.com/in/app/merahalwai-com/id6754564700"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
        >
          <Image
            src="/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-[60px] w-[180px] object-contain"
          />
        </Link>
      </div>
    </div>
  )
}

export default Available    