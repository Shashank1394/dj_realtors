import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

// Reusable Card component
const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <div className="bg-[#BFE0FF] min-h-[149px] max-h-[260px] max-w-[300px] p-6 rounded-md md:min-w-[300px] md:min-h-[250px] lg:min-w-[450px] lg:min-h-[300px]">
      <div className="flex items-center gap-2 mb-3">
        <Image src={imageSrc} alt={altText} width={40} height={40} />
        <h2 className="font-bold pt-4">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

const Cards = () => {
  // Card data array
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
      title: "LOGISTICS & WEARHOUSE",
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
        "Secure pre-released investment properties in prime locations with strong growth and future value potential.",
    },
    {
      imageSrc: "/dj_realtors/verticals/residential.png",
      altText: "Premium Residential",
      title: "PREMIUM RESIDENTIAL",
      description:
        "Secure pre-released investment properties in prime locations with strong growth and future value potential.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-8 text-lg lg:text-2xl justify-center items-center mx-10">
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
