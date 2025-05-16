import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="h-fit">
      <div className="flex items-center justify-center my-8 mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm text-[#1d3557] tracking-wide"
          id="verticals"
        >
          ABOUT US
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="m-8">
        <Image
          src={"/dj_realtors/footer/dj_logo.jpg"}
          alt="dj logo"
          width={200}
          height={200}
        />
        <div className="mt-10 text-sm font-base leading-6">
          <p>Welcome to DJ Realtors - Your Trusted Real Estate Partner</p>
          <p>
            At DJ Realtors, we offer end-to-end real estate solutions across
            residential, commercial, industrial, and agricultural segments.
            Whether you're buying, investing, or developing, we provide expert
            guidance and tailored strategies to help you succeed.
          </p>
          <p>Why Choose Us?</p>
          <ul className="list-disc ml-4">
            <li>
              <b>Expertise You Can Trust - </b>
              <span>
                Transparent, reliable, and backed by deep industry knowledge.
              </span>
            </li>
            <li>
              <b>Client-First Approach - </b>
              <span>
                Personalized services for retail and institutional clients
                alike.
              </span>
            </li>
            <li>
              <b>Innovative Marketing - </b>
              <span>Modern strategies to maximize property value.</span>
            </li>
            <li>
              <b>All-in-One Solutions - </b>
              <span>From consultation to closing, we handle it all.</span>
            </li>
          </ul>
          <p>
            <i>Let&apos;s build your vision, together. Contact us today.</i>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mt-8 mx-10 text-xs ">
          <div className="w-fit h-fit bg-[#2C7096] rounded-lg px-4 py-4 text-white">
            <p>
              <b>OUR VISION</b>
            </p>
            <p className="text-thin">
              We aspire to be an innovative and reliable organisation, providing
              one step solution in real estate services
            </p>
          </div>
          <div className="w-fit h-fit bg-[#A4CD39] rounded-lg px-4 py-4 text-white">
            <p>
              <b>OUR MISSION</b>
            </p>
            <p className="text-thin">
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
