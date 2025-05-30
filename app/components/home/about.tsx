import Image from "next/image";
import * as motion from "motion/react-client";

// Reusable ProfileCard component with animation
const ProfileCard = ({
  name,
  title,
  image,
  description,
  delay = 0,
}: {
  name: string;
  title: string;
  image: string;
  description: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay }}
    viewport={{ once: true, amount: 0.4 }}
    className="flex flex-col justify-center items-center text-center px-4 sm:px-8 py-8 md:py-12 max-w-5xl mx-auto"
  >
    {/* Image */}
    <div className="relative w-[143px] h-[157px] sm:w-[180px] sm:h-[200px] md:w-[200px] md:h-[220px]">
      <Image
        src={image}
        alt={name}
        fill
        className="rounded object-cover object-top"
      />
    </div>

    {/* Name and Title */}
    <h2 className="font-bold mt-4 text-[#1d3557] text-base sm:text-lg md:text-xl">
      {name.toUpperCase()}
    </h2>
    <h3 className="text-xs sm:text-sm font-light text-gray-600">{title}</h3>

    {/* Description */}
    <p className="text-sm sm:text-base mt-3 px-2 text-gray-700 font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// Team data
const team = [
  {
    name: "DJ Dhamne",
    title: "Chairman - DJ Realtors",
    image: "/about/dj_dhamne.png",
    description: `Veteran Entrepreneur & Real Estate Visionary. With over four decades of experience, DJ Dhamne is the founder of DJ Realtors, specializing in real estate development and consultancy. Starting his career in 1976, he completed 35 projects and developed key Nashik neighborhoods. After a successful pharma venture, he returned to real estate in 2007, focusing on residential developments and land consultancy across Nashik. An industry leader, Mr. Dhamne has completed specialized training in land development and digital marketing, and has held key roles, including President of the Association of Real Estate Consultants, Nashik. His ethical, customer-first approach continues to shape DJ Realtors as a trusted real estate firm.`,
  },
  {
    name: "Shrirang Bhadane",
    title: "Managing Director - CRE | Retail",
    image: "/about/shrirang_bhadane.png",
    description: `Client-First Approach | 10+ Years in Real Estate Advisory. Shrirang Bhadane brings over a decade of real estate experience marked by persistence, integrity, and a people-first mindset. With deep roots in the Nashik community and a strong network within the local market, he offers clients hands-on, results-driven guidance through every step of their real estate journey. Known for his clear communication, expert negotiation skills, and commitment to service, Shrirang has built his business almost entirely through referrals.`,
  },
  {
    name: "Prashant Nahar",
    title: "Director - Retail Vertical",
    image: "/about/prashant_nahar.png",
    description: `Expert in Retail Real Estate Development & Leasing | 15+ Years of Experience. Prashant Nahar leads DJ Realtors LLP's retail vertical with over 15 years of core expertise in retail property development, leasing, and strategic advisory. Known for connecting top brands with premium, high-visibility retail spaces, he brings deep market knowledge and a results-driven, client-first approach.`,
  },
  {
    name: "Harshad Kotkar",
    title: "Director - Land Vertical",
    image: "/about/harshad_kotkar.png",
    description: `Expert in Land, Farm Plots & Bungalow Plot Transactions. Harshad Kotkar leads DJ Realtors's land and plot vertical with deep expertise in farmland, bungalow plots, and building plot sales and acquisitions. With years of focused experience, he brings sharp market insight, a strong industry network, and a reputation for transparent, client-first transactions.`,
  },
];

// Main About Component
const About = () => {
  return (
    <div className="h-fit bg-white mx-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center justify-center mt-10 mx-4 sm:mx-10 md:mx-20"
      >
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm sm:text-base text-[#1d3557] tracking-wide">
          ABOUT US
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Team Section */}
      {team.map((member, index) => (
        <div key={index}>
          <ProfileCard {...member} delay={index * 0.1} />
          {index < team.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.8 }}
              className="border-t border-black mx-4 sm:mx-10 md:mx-20"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
