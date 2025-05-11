"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-5 bg-[#012A4A] shadow-md">
      <nav className="flex items-center justify-between py-4 text-white">
        <Link href="/" className="flex items-center space-x-2 text-2xl">
          {/* SVG Icon */}
          <span className="w-[44px] h-[29px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 131 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_8)">
                <circle cx="45" cy="41" r="40.5" fill="black" stroke="black" />
                <mask id="path-2-inside-1_1_8" fill="white">
                  <path d="M86 82C91.3842 82 96.7157 80.9395 101.69 78.879C106.664 76.8186 111.184 73.7986 114.991 69.9914C118.799 66.1842 121.819 61.6644 123.879 56.69C125.939 51.7157 127 46.3842 127 41C127 35.6158 125.939 30.2843 123.879 25.31C121.819 20.3356 118.799 15.8158 114.991 12.0086C111.184 8.20142 106.664 5.18138 101.69 3.12094C96.7157 1.0605 91.3842 -4.70701e-07 86 0L86 41V82Z" />
                </mask>
                <path
                  d="M86 82C91.3842 82 96.7157 80.9395 101.69 78.879C106.664 76.8186 111.184 73.7986 114.991 69.9914C118.799 66.1842 121.819 61.6644 123.879 56.69C125.939 51.7157 127 46.3842 127 41C127 35.6158 125.939 30.2843 123.879 25.31C121.819 20.3356 118.799 15.8158 114.991 12.0086C111.184 8.20142 106.664 5.18138 101.69 3.12094C96.7157 1.0605 91.3842 -4.70701e-07 86 0L86 41V82Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  mask="url(#path-2-inside-1_1_8)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_8"
                  x="0"
                  y="0"
                  width="131"
                  height="90"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_8"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_8"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>

          {/* Brand Name */}
          <span>DJ REALTORS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <Link href="/about" className="hover:text-gray-600 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition">
            Contact
          </Link>
          <Link href="/category" className="hover:text-gray-600 transition">
            Category
          </Link>
          <Link href="/testimony" className="hover:text-gray-600 transition">
            Testimony
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="flex flex-col md:hidden bg-white px-5 py-3 gap-5 text-xl items-center">
          <Link
            href="/about"
            className="hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/category"
            className="hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Category
          </Link>
          <Link
            href="/testimony"
            className="hover:text-gray-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimony
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
