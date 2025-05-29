"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-[#012A4A] px-5 py-4 text-white z-50 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl">
            <span className="w-[44px] h-[29px]" aria-hidden="true">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 131 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="45" cy="41" r="40.5" fill="black" stroke="black" />
                <path
                  d="M86 82C91.3842 82 96.7157 80.9395 101.69 78.879C106.664 76.8186 111.184 73.7986 114.991 69.9914C118.799 66.1842 121.819 61.6644 123.879 56.69C125.939 51.7157 127 46.3842 127 41C127 35.6158 125.939 30.2843 123.879 25.31C121.819 20.3356 118.799 15.8158 114.991 12.0086C111.184 8.20142 106.664 5.18138 101.69 3.12094C96.7157 1.0605 91.3842 0 86 0V82Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="tracking-wide">DJ REALTORS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/categories" className="hover:text-gray-300">
              Categories
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#F0F0F0] flex flex-col items-center justify-center space-y-8 text-2xl font-medium text-black">
          <Link href="/" onClick={closeMenu} className="hover:underline">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="hover:underline">
            About Us
          </Link>
          <Link
            href="/categories"
            onClick={closeMenu}
            className="hover:underline"
          >
            Categories
          </Link>
          <button
            onClick={closeMenu}
            className="text-red-600 hover:underline hover:text-red-800 mt-10"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
