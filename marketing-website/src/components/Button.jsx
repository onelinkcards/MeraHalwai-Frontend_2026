import React from 'react';
import Link from 'next/link';

const Button = ({ text, bgcolor, href = '/app' }) => {
  const isVendorButton = text === 'Become Vendor' || text === 'Become a Vendor';
  const hasShineAndSameWidth =
    text === 'Download App' ||
    text === 'Explore Caterers' ||
    text === 'Book a Caterer' ||
    isVendorButton;

  return (
    <Link href={href}>
      <button
        style={{
          backgroundColor: bgcolor,
          padding: 'clamp(0.5rem,0.5vw,200rem) clamp(0.5rem,1vw,200rem)',
          ...(isVendorButton && { border: `2px solid ${bgcolor}` }),
        }}
        className={`text-white inter text-xl sm:text-lg md:text-xl font-bold rounded-xl hover:opacity-90 transition-opacity cursor-pointer ${hasShineAndSameWidth ? 'button-shine min-w-[12rem] sm:min-w-[13rem] md:min-w-[14rem]' : 'w-fit'}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;