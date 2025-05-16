import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

// Individual Card Component
const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <div className="bg-[#BFE0FF] min-h-[260px] w-full p-6 rounded-md shadow-md transition-transform hover:scale-[1.02] duration-300">
      {/* Icon and Title */}
      <div className="flex items-center gap-2 mb-3">
        <Image src={imageSrc} alt={altText} width={40} height={40} />
        <h2 className="font-bold text-2xl sm:text-base md:text-lg lg:text-xl pt-1">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-xl sm:text-sm md:text-base text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Card Group Component
const Cards = () => {
  const cardData = [
    {
      imageSrc: "/dj_realtors/verticals/corporate.png",
      altText: "Corporate Services",
      title: "CORPORATE SERVICES",
      description:
        "Discover prime commercial spaces with top-tier infrastructure to elevate your business and brand.",
    },
    {
      imageSrc: "/dj_realtors/verticals/logistics.png",
      altText: "Logistics and Warehouse",
      title: "LOGISTICS & WAREHOUSE",
      description:
        "Explore top industrial spaces including warehouses, plants, and more built for efficiency, growth, and prime connectivity.",
    },
    {
      imageSrc: "/dj_realtors/verticals/retail.png",
      altText: "Retail Services",
      title: "RETAIL SERVICES",
      description:
        "Discover premium retail spaces in high-traffic, prime locations perfect for boutiques, flagship stores, and franchises to boost brand visibility.",
    },
    {
      imageSrc: "/dj_realtors/verticals/land.png",
      altText: "Land Services",
      title: "LAND",
      description:
        "Explore prime land for commercial, residential and industrial projects with high ROI potential.",
    },
    {
      imageSrc: "/dj_realtors/verticals/investment.png",
      altText: "Investment Preleased",
      title: "INVESTMENT PRELEASED",
      description:
        "Secure pre-leased investment properties in prime locations with strong growth and future value potential.",
    },
    {
      imageSrc: "/dj_realtors/verticals/residential.png",
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
