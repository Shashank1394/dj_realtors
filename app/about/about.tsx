import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="h-fit w-full px-4 sm:px-8 lg:px-20 py-10">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-4 text-sm sm:text-base text-[#1d3557] tracking-wide whitespace-nowrap"
          id="verticals"
        >
          ABOUT US
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      {/* Main Content Block */}
      <div className="flex flex-col gap-10">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/dj_realtors/footer/dj_logo.jpg"
            alt="dj logo"
            width={200}
            height={200}
            className="rounded-md object-contain"
          />
        </div>

        {/* About Content */}
        <div className="text-sm sm:text-base leading-6 text-gray-800 space-y-4 max-w-4xl mx-auto">
          <p className="font-semibold text-center sm:text-left text-[#1d3557]">
            Welcome to DJ Realtors - Your Trusted Real Estate Partner
          </p>
          <p>
            At DJ Realtors, we offer end-to-end real estate solutions across
            residential, commercial, industrial, and agricultural segments.
            Whether you're buying, investing, or developing, we provide expert
            guidance and tailored strategies to help you succeed.
          </p>
          <p className="font-semibold">Why Choose Us?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <b>Expertise You Can Trust - </b>
              Transparent, reliable, and backed by deep industry knowledge.
            </li>
            <li>
              <b>Client-First Approach - </b>
              Personalized services for retail and institutional clients alike.
            </li>
            <li>
              <b>Innovative Marketing - </b>
              Modern strategies to maximize property value.
            </li>
            <li>
              <b>All-in-One Solutions - </b>
              From consultation to closing, we handle it all.
            </li>
          </ul>
          <p className="italic text-center sm:text-left">
            Let's build your vision, together. Contact us today.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-[#2C7096] text-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold mb-2 text-sm sm:text-base">OUR VISION</h3>
            <p className="text-xs sm:text-sm font-light">
              We aspire to be an innovative and reliable organisation, providing
              one step solution in real estate services.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#A4CD39] text-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold mb-2 text-sm sm:text-base">OUR MISSION</h3>
            <p className="text-xs sm:text-sm font-light">
              To attain 100% customer satisfaction by providing excellent
              services beyond expectation in real estate selling, buying and
              leasing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
