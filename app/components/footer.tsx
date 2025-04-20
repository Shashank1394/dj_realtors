"use client";
import { useRef } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(footerRef);

  return (
    <footer
      ref={footerRef}
      className={`px-5 py-12 bg-white shadow-inner transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto w-full text-left">
        {/* About Section */}
        <div className="md:col-span-7">
          <h2 className="text-gray-800 text-xl font-bold mb-4">About</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            excepturi quaerat saepe fuga cupiditate temporibus reprehenderit
            magnam odit inventore. Ad voluptatum sunt, sit consequatur veniam
            ipsa molestiae dignissimos tempora earum?
          </p>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-5">
          <h2 className="text-gray-800 text-xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li className="text-gray-600 text-sm flex items-start gap-2">
              📍 <span>123 Main Street, Mumbai, India</span>
            </li>
            <li className="text-gray-600 text-sm flex items-start gap-2">
              📞
              <a
                href="tel:+919876543210"
                className="hover:text-blue-600 hover:underline hover:brightness-110 transition"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="text-gray-600 text-sm flex items-start gap-2">
              ✉️
              <a
                href="mailto:info@djrealtors.com"
                className="hover:text-blue-600 hover:underline hover:brightness-110 transition"
              >
                info@djrealtors.com
              </a>
            </li>
            <li className="text-gray-600 text-sm flex items-start gap-2">
              🕒 <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DJ Realtors. All rights reserved.
      </div>
    </footer>
  );
}
