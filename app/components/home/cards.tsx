import Image from "next/image";
import * as motion from "motion/react-client";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

// Individual Card Component with Animation
const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#BFE0FF] min-h-[260px] w-full p-6 rounded-md shadow-md transition-transform hover:scale-[1.02] duration-300"
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-2 mb-3">
        <Image src={imageSrc} alt={altText} width={40} height={40} />
        <h2 className="font-bold text-base sm:text-lg md:text-lg lg:text-xl pt-1 font-montserrat">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-base text-gray-700 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// Card Group Component
const Cards = () => {
  const cardData = [
    {
      imageSrc: "/verticals/corporate.png",
      altText: "Commercial Real Estate",
      title: "COMMERCIAL REAL ESTATE",
      description:
        "Discover prime commercial spaces with top-tier infrastructure to elevate your office spaces and co-working spaces",
    },
    {
      imageSrc: "/verticals/retail.png",
      altText: "Retail Spaces",
      title: "RETAIL SPACES",
      description:
        "Discover premium retail spaces in highstreets, prime locations perfect for boutiques, flagship stores, and franchises to boost brand visibility.",
    },
    {
      imageSrc: "/verticals/investment.png",
      altText: "Investment Preleased",
      title: "INVESTMENT PRELEASED",
      description:
        "Secure pre-leased investment properties in prime locations with strong growth and future value potential.",
    },
    {
      imageSrc: "/verticals/land.png",
      altText: "Land Services",
      title: "LAND",
      description:
        "Explore prime land for commercial, residential and industrial projects; Bungalows, Buildings, Farm Lands & Plots with high ROI potential.",
    },
    {
      imageSrc: "/verticals/logistics.png",
      altText: "Logistics and Warehouse",
      title: "LOGISTICS & WAREHOUSE",
      description:
        "Explore top industrial spaces including 'A' grade warehouses, plants, and more built for efficiency, growth, and prime connectivity.",
    },
    {
      imageSrc: "/verticals/residential.png",
      altText: "Premium Residential",
      title: "PREMIUM RESIDENTIAL",
      description:
        "Experience luxury living in thoughtfully designed spaces located in premier residential zones with modern infrastructure.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 py-8">
      {cardData.map(({ imageSrc, altText, title, description }) => (
        <Card
          key={title}
          imageSrc={imageSrc}
          altText={altText}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default Cards;
