import Image from "next/image";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#012A4A] text-white pt-10 px-4 sm:px-8 md:px-20 pb-4 text-sm"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-8">
        {/* Logos Section */}
        <div className="flex items-center sm:items-start gap-6 lg:w-1/3 lg:flex-col">
          <div className="w-36 h-auto">
            <Image
              src="/footer/dj_logo.jpg"
              alt="DJ Realtors Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="w-24 h-auto">
            <Image
              src="/footer/ciril_logo.png"
              alt="CIRIL Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Address and Contact Info */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 lg:gap-16 w-full lg:w-2/3">
          {/* Address */}
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-base leading-relaxed">
              4, Ashirwad Apartment, Sharanpur Road,
              <br />
              Canada Corner, Nashik (M.S) India
              <br />
              Pincode - 422002
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-1 leading-relaxed text-base">
              <li>
                DJ Dhamne:{" "}
                <a href="tel:+919423930253" className="hover:underline">
                  +91 9423930253
                </a>
              </li>
              <li>
                Shrirang Bhadane:{" "}
                <a href="tel:+919921210123" className="hover:underline">
                  +91 9921210123
                </a>
              </li>
              <li>
                Prashant Nahar:{" "}
                <a href="tel:+919822770646" className="hover:underline">
                  +91 9822770646
                </a>
              </li>
              <li>
                Harshad Kotkar:{" "}
                <a href="tel:+917083111300" className="hover:underline">
                  +91 7083111300
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-400 pt-4 text-center text-xs sm:text-sm">
        ©2025 - All rights reserved by DJ Realtors | Website Designed and
        Developed by{" "}
        <span className="font-semibold text-white">Shapes Art & Design</span>
      </div>
    </motion.footer>
  );
}
