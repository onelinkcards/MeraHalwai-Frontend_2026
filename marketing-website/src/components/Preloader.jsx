import React from 'react';
import Image from 'next/image';

const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out z-50 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ backgroundColor: '#EC8A25' }}
    >
      <div className="flex flex-col items-center">
        <div className="w-72 h-72 mb-8 animate-pulse">
          <Image
            src="/logo-w.svg"
            alt="Mera Halwai Logo"
            width={128}
            height={128}
            className="w-full h-full drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;