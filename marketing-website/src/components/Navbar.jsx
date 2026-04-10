'use client'

import { AlignJustify, Menu, X, User, HelpCircle, Store, Mail, ChevronRight, Home, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
    const VENDOR_ONBOARDING_URL = 'https://vendors.merahalwai.com/vendor/onboarding'

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Mail, label: 'Contact', href: '/contact' },
    { icon: User, label: 'About', href: '/about' },
    { icon: Store, label: 'Become a Vendor', href: VENDOR_ONBOARDING_URL, isVendor: true },
    { icon: LinkIcon, label: 'Onelink', href: 'https://merahalwai.onelink.cards/', mobileOnly: true },
    { icon: HelpCircle, label: 'Privacy Policy', href: '/privacy' },
    { icon: Store, label: 'Terms & Condition', href: '/terms' },
  ]

  const footerLinks = []

  return (
    <>
      <style jsx>{slideInRightAnimation}</style>
      <div className='w-full flex justify-center relative'
        style={{
          padding: 'clamp(1.5rem,2vw,2rem) clamp(1rem,2vw,2rem)'
        }}
      >
        <div className="w-full md:w-[80%] flex justify-between items-center px-4">

          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              style={{
                width: 'clamp(8rem,12vw,12rem)',
                height: "auto"
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link href="/">
              <div
                style={{
                  padding: 'clamp(0.25rem,0.25vw,1rem) clamp(0.8rem,0.75vw,1.5rem)'
                }}
                className="bg-[#F1EDE2] hover:bg-[#E8E1D1] text-[#8A3E1D] font-semibold rounded-xl cursor-pointer text-base xl:text-lg transition-colors"
              >
                Home
              </div>
            </Link>
            <Link href="/about">
              <div
                style={{
                  padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
                }}
                className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
              >
                About
              </div>
            </Link>
            <Link href="https://vendors.merahalwai.com/vendor/onboarding">
              <div
                style={{
                  padding: 'clamp(0.25rem,0.25vw,1rem) clamp(0.8rem,0.75vw,1.5rem)'
                }}
                className="bg-[#F1EDE2] hover:bg-[#E8E1D1] text-[#8A3E1D] font-semibold rounded-xl cursor-pointer text-base xl:text-lg transition-colors"
              >
                Become a Vendor
              </div>
            </Link>
            <Link href="/contact">
              <div
                style={{
                  padding: 'clamp(0.4rem,0.8vw,1rem) clamp(0.8rem,1.2vw,1.5rem)'
                }}
                className="text-[#8A3E1D] hover:text-[#6B2F15] transition-colors cursor-pointer text-base xl:text-lg font-medium"
              >
                Contact Us
              </div>
            </Link>
      
          
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden" style={{ marginLeft: 'clamp(0.5rem,1vw,1rem)' }}>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#EB8B23]  focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={closeMenu}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#F1EDE2] shadow-2xl z-50 transform transition-all duration-300 ease-in-out backdrop-blur-sm ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC8A25] rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute top-20 right-10 w-6 h-6 bg-[#8A3E1D] rounded-full"></div>
            <div className="absolute top-32 right-20 w-3 h-3 bg-[#EC8A25] rounded-full"></div>
            <div className="absolute bottom-20 right-8 w-24 h-24 bg-[#8A3E1D] rounded-full opacity-20"></div>
          </div>

          <div className="relative flex flex-col h-full"
            style={{
              padding: "clamp(1.25rem,4vw,1.5rem) clamp(1rem,4vw,1.5rem) clamp(1rem,3vw,1.25rem) clamp(1rem,4vw,1.5rem)"
            }}
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center pb-4 mb-4" style={{ paddingTop: 'clamp(0.5rem,1vw,1rem)' }}>
              <div>
                <h2 className="text-3xl pixel text-[#8A3E1D]">Menu</h2>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-xl text-[#8A3E1D] hover:bg-[#E8E1D1] focus:outline-none focus:ring-2 focus:ring-[#8A3E1D]/30 transition-all duration-200 hover:rotate-90"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col gap-3">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isHomeItem = item.label === 'Home';
                  const isVendorItem = item.isVendor || item.label === 'Become a Vendor';
                  const isExternal = isVendorItem || item.mobileOnly;
                  // Highlight Home on homepage, otherwise highlight Become a Vendor
                  const isHighlighted = pathname === '/' ? isHomeItem : isVendorItem;
                  const ItemTag = isExternal ? 'a' : Link;
                  const itemProps = isExternal ? {
                    href: item.href,
                    onClick: closeMenu
                  } : {
                    href: item.href,
                    onClick: closeMenu
                  };
                  
                  return ( 
                    <ItemTag
                      key={item.label}
                      {...itemProps}
                      className={`group relative flex items-center justify-between rounded-xl transition-all duration-200 cursor-pointer ${isHighlighted
                          ? 'bg-[#EC8A25] text-white shadow-md hover:shadow-lg hover:bg-[#E67E15]'
                          : 'text-[#8A3E1D] hover:bg-[#E8E1D1] hover:shadow-sm'
                        }`}
                      style={{
                        padding: "clamp(1rem,3vw,1.25rem) clamp(1rem,3vw,1.25rem)",
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-colors flex-shrink-0 ${isHighlighted
                            ? 'bg-white/20'
                            : 'bg-[#EC8A25]/10 group-hover:bg-[#EC8A25]/20'
                          }`}>
                          {item.label === 'Onelink' ? (
                            <Image src="/Component 13.png" alt="Onelink" width={20} height={20} className="w-5 h-5 object-contain" />
                          ) : (
                            <Icon className={`w-5 h-5 ${isHighlighted ? 'text-white' : 'text-[#8A3E1D]'}`} />
                          )}
                        </div>
                        <span className="helvetica font-semibold text-base">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 ${isHighlighted ? 'text-white/80' : 'text-[#8A3E1D]/60'
                        }`} />
                    </ItemTag>
                  );
                })}
              </nav>
            </div>

            {/* Footer */}
            {footerLinks.length > 0 && (
              <div className="pt-4 mt-4 border-t border-[#8A3E1D]/20">
                <div className="flex flex-col gap-2.5">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-[#8A3E1D]/80 hover:text-[#8A3E1D] text-sm helvetica font-semibold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Add the CSS animation for slideInRight
const slideInRightAnimation = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Navbar
