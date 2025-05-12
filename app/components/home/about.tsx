import Image from "next/image";

const About = () => {
  return (
    <div className="h-fit ">
      <div className="flex items-center justify-center mt-8 mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm text-[#1d3557] tracking-wide">
          ABOUT US
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      {/* DJ DHAMNE  */}
      <div className="m-8 flex flex-col justify-center items-center">
        <div
          style={{
            width: "143px",
            height: "157px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/dj_realtors/about/dj_dhamne.png"
            alt="DJ Dhamne"
            fill
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <h2 className="font-bold mt-4 leading-none">DJ DHAMNE</h2>
        <h3 className="text-xs font-light leading-none">
          Chairman - DJ Realtors
        </h3>
        <p className="text-sm text-center mt-3 p-4 font-light">
          Veteran Entrepreneur & Real Estate Visionary With over four decades of
          experience, DJ Dhamne is the founder of DJ Realtors, specializing in
          real estate development and consultancy. Starting his career in 1976,
          he completed 35 projects and developed key Nashik neighborhoods. After
          a successful pharma venture, he returned to real estate in 2007,
          focusing on residential developments and land consultancy across
          Nashik. An industry leader, Mr. Dhamne has completed specialized
          training in land development and digital marketing, and has held key
          roles, including President of the Association of Real Estate
          Consultants, Nashik. His ethical, customer-first approach continues to
          shape DJ Realtors as a trusted real estate firm.
        </p>
      </div>
      <div className="flex-grow border-t border-black mx-8"></div>
      {/* SHRIRANG BHADANE */}
      <div className="m-8 flex flex-col justify-center items-center">
        <div
          style={{
            width: "143px",
            height: "157px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/dj_realtors/about/shrirang_bhadane.png"
            alt="Shrirang Bhadane"
            fill
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <h2 className="font-bold mt-4 leading-none">SHRIRANG BHADANE</h2>
        <h3 className="text-xs font-light leading-none">
          Managing Director - CRE | Retail
        </h3>
        <p className="text-sm text-center mt-3 p-4 font-light">
          Client-First Approach | 10+ Years in Real Estate Advisory Shrirang
          Bhadane brings over a decade of real estate experience marked by
          persistence, integrity, and a people-first mindset. With deep roots in
          the Nashik community and a strong network within the local market, he
          offers clients hands-on, results-driven guidance through every step of
          their real estate journey. Known for his clear communication, expert
          negotiation skills, and commitment to service, Shrirang has built his
          business almost entirely through referrals. His approach ensures not
          just smooth transactions, but lasting client relationships and
          consistent satisfaction, making him a trusted name at DJ Realtors.
        </p>
      </div>
      <div className="flex-grow border-t border-black mx-8"></div>
      {/* PRASHANT NAHAR */}
      <div className="m-8 flex flex-col justify-center items-center">
        <div
          style={{
            width: "143px",
            height: "157px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/dj_realtors/about/prashant_nahar.png"
            alt="Prashant Nahar"
            fill
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <h2 className="font-bold mt-4 leading-none">PRASHANT NAHAR</h2>
        <h3 className="text-xs font-light leading-none">
          Director - Retail Vertical
        </h3>
        <p className="text-sm text-center mt-3 p-4 font-light">
          Expert in Retail Real Estate Development & Leasing | 15+ Years of
          Experience Prashant Nahar leads DJ Realtors LLP's retail vertical with
          over 15 years of core expertise in retail property development,
          leasing, and strategic advisory. Known for connecting top brands with
          premium, high-visibility retail spaces, he brings deep market
          knowledge and a results-driven, client-first approach. His work
          continues to shape high-performing retail destinations and drive
          business growth across the sector.
        </p>
      </div>
      <div className="flex-grow border-t border-black mx-8"></div>
      {/* HARSHAD KOTKAR */}
      <div className="m-8 flex flex-col justify-center items-center">
        <div
          style={{
            width: "143px",
            height: "157px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/dj_realtors/about/harshad_kotkar.png"
            alt="Harshad Kotkar"
            fill
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <h2 className="font-bold mt-4 leading-none">HARSHAD KOTKAR</h2>
        <h3 className="text-xs font-light leading-none">
          Director - Land Vertical
        </h3>
        <p className="text-sm text-center mt-3 p-4 font-light">
          Expert in Land, Farm Plots & Bungalow Plot Transactions Harshad Kotkar
          leads DJ Realtors's land and plot vertical with deep expertise in
          farmland, bungalow plots, and building plot sales and acquisitions.
          With years of focused experience, he brings sharp market insight, a
          strong industry network, and a reputation for transparent,
          client-first transactions. His strategic guidance has been key to
          establishing DJ Realtors as a trusted name in land real estate.
        </p>
      </div>
    </div>
  );
};
export default About;
