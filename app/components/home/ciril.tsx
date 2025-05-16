import Link from "next/link";

const Ciril = () => {
  return (
    <div className="h-fit bg-[#DEE7FF] mt-8 py-8">
      <div className="flex items-center justify-center mx-20 pb-8">
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm text-[#1d3557] tracking-wide"
          id="verticals"
        >
          CIRIL
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      <div className="mx-6">
        <p className="text-sm text-center">
          Our <b>Expertise</b> Will Help You
        </p>
        <br />
        <p className="text-center text-sm">
          CIRIL is India&apos;s leading commercial real estate advisory services
          founded by top real estate consultants having over 2 decades of
          experience in their respective cities, offering expert services in
          Commercial, Investment, Retail, Industrial & Logistics and Land
          serving in all the major metros and also having reach in 2 & 3 Tier
          cities. We prioritize in client satisfaction and seamless service
          delivery. Structured vertically with dedicated teams, CIRIL is
          committed to excellence and expanding our footprint across India.
        </p>
        <br />
        <div className="flex justify-center">
          <Link
            href={"https://www.ciril.in/"}
            className="bg-[#012A4A] text-white py-1 px-2 text-xs rounded-sm"
          >
            Ciril Website
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Ciril;
