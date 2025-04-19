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
    <header className="px-5 bg-white shadow-md">
      <nav className="flex items-center justify-between py-4 text-black">
        <Link href="/" className="text-2xl font-bold">
          DJ Realtors
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
