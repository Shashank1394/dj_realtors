import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#012A4A] text-white pt-10 px-6 pb-4 md:px-20 text-sm">
      <div className="flex flex-col sm:flex-row justify-between items-baseline md:items-center gap-10 mb-6">
        {/* Logo and CIRIL section */}
        <div className="flex gap-6 justify-center items-center sm:flex-col">
          {/* DJ Realtors Logo */}
          <div className="w-36 h-auto">
            <Image
              src="/dj_realtors/footer/dj_logo.jpg"
              alt="DJ Realtors Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          {/* CIRIL Logo */}
          <div className="w-24 h-auto">
            <Image
              src="/dj_realtors/footer/ciril_logo.png"
              alt="CIRIL Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col md:flex-row justify-between md:justify-end w-full md:w-2/3 gap-10">
          <div className="text-white max-w-sm">
            <h3 className="text-base font-semibold mb-2 leading-0">Address</h3>
            <p>
              4, Ashirwad Apartment, Sharanpur road,
              <br />
              Canada corner, Nashik (M.S) India
              <br />
              Pincode - 422002
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-white">
            <h3 className="text-base font-semibold mb-2 leading-0">
              Contact Info
            </h3>
            <ul className="space-y-1">
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
      <div className="border-t border-gray-400 pt-4 text-center text-[13px]">
        ©2025 - All rights reserved by DJ Realtors | Website Designed and
        Developed by <span className="font-bold">Shapes Art & Design</span>
      </div>
    </footer>
  );
}
