"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#012A4A] px-5 py-4 text-white z-50 w-full"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl">
            <span className="relative w-10 h-10">
              <Image
                src="/dj.png"
                alt="DJ Realtors logo"
                fill
                className="object-contain"
              />
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
      </motion.header>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] bg-[#F0F0F0] flex flex-col items-center justify-center space-y-8 text-2xl font-medium text-black"
        >
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
        </motion.div>
      )}
    </>
  );
};

export default Header;
