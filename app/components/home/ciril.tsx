import Link from "next/link";
import * as motion from "motion/react-client";

const Ciril = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-fit bg-[#DEE7FF] mt-8 py-10 px-4 sm:px-8 md:px-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-8"
      >
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-3 text-sm sm:text-base text-[#1d3557] tracking-wide"
          id="verticals"
        >
          CIRIL
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-sm sm:text-base mb-2">
          Our <strong>Expertise</strong> Will Help You
        </p>

        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          CIRIL is India&apos;s leading commercial real estate advisory services
          founded by top real estate consultants having over 2 decades of
          experience in their respective cities, offering expert services in
          Commercial, Investment, Retail, Industrial & Logistics and Land
          serving in all the major metros and also having reach in 2 & 3 Tier
          cities. We prioritize in client satisfaction and seamless service
          delivery. Structured vertically with dedicated teams, CIRIL is
          committed to excellence and expanding our footprint across India.
        </p>

        {/* Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="https://www.ciril.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#012A4A] text-white py-2 px-4 text-xs sm:text-sm md:text-base rounded-sm hover:bg-[#021d33] transition-colors duration-300"
          >
            Visit CIRIL Website
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Ciril;
