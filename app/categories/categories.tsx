import Image from "next/image";
import * as motion from "motion/react-client";

interface CategoriesProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const CategoryCard = ({
  title,
  description,
  imageSrc,
  reverse,
}: CategoriesProps) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 py-10 px-6 md:px-20`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:w-1/2 text-white"
      >
        <h2 className="text-xl font-semibold tracking-wide mb-4">{title}</h2>
        <p className="text-base leading-relaxed">{description}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 w-full"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="rounded-md w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const CategoriesPage = () => {
  const categoriesData = [
    {
      title: "COMMERCIAL SPACES",
      description:
        "Discover premium commercial spaces in prime locations. From modern offices to corporate hubs, our listings offer top-tier infrastructure and strategic positioning to support your business growth. Find the perfect space to elevate your professional presence today.",
      imageSrc: "/categories/commercial.jpg",
    },
    {
      title: "INDUSTRIAL SPACES",
      description:
        "Explore high-quality industrial spaces in prime locations. From warehouses to manufacturing units, our listings offer robust infrastructure and strategic positioning to support your operational needs. Find the perfect space to drive efficiency and growth for your business.",
      imageSrc: "/categories/industrial.jpg",
    },
    {
      title: "RETAIL SPACES",
      description:
        "Find premium retail spaces in prime locations designed to attract customers and maximize visibility. Whether you're launching a boutique, flagship store, or franchise, our listings offer high-traffic locations and strategic positioning to elevate your brand’s presence.",
      imageSrc: "/categories/retail.jpg",
    },
    {
      title: "CO-WORKING SPACES",
      description:
        "Discover dynamic co-working spaces designed for productivity and collaboration. With flexible plans, premium amenities, and prime locations, our spaces provide the perfect environment for startups, freelancers, and businesses to thrive. Find your ideal workspace today.",
      imageSrc: "/categories/co-working.jpg",
    },
    {
      title: "OFFICE SPACES",
      description:
        "Explore premium office spaces in prime locations, designed for productivity and professionalism. Whether you need a private office, headquarters, or executive suite, our listings offer modern infrastructure and strategic positioning to support your business growth. Find the perfect workspace today.",
      imageSrc: "/categories/office.jpg",
    },
    {
      title: "FOOD & BEVERAGE SPACES",
      description:
        "Find premium food and beverage spaces in high-traffic locations. From restaurants to cafés and cloud kitchens, our listings offer strategic positioning and top-tier infrastructure to help your culinary business thrive. Secure the perfect space today.",
      imageSrc: "/categories/f&b.jpg",
    },
    {
      title: "LAND SPACES",
      description:
        "Discover prime land spaces for commercial, residential, and industrial development. With strategic locations and high investment potential, our listings provide the perfect foundation to build your vision from the ground up.",
      imageSrc: "/categories/land.jpg",
    },
    {
      title: "LOGISTICS & WAREHOUSE SPACES",
      description:
        "Find high-quality logistics and warehouse spaces designed for efficiency and scalability. With strategic locations, ample storage, and modern infrastructure, our listings support seamless supply chain operations. Secure the ideal space for your business today.",
      imageSrc: "/categories/logistics.jpg",
    },
  ];

  return (
    <div className="bg-[#063356]">
      {/* Section Title */}
      <motion.div
        className="flex items-center justify-center pt-8 px-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-grow border-t border-white"></div>
        <span className="px-4 text-sm text-white tracking-wide" id="verticals">
          CATEGORIES WE CATER
        </span>
        <div className="flex-grow border-t border-white"></div>
      </motion.div>

      {/* Category Cards */}
      {categoriesData.map((category, index) => (
        <div key={category.title}>
          <CategoryCard
            title={category.title}
            description={category.description}
            imageSrc={category.imageSrc}
            reverse={index % 2 !== 0}
          />
          {index !== categoriesData.length - 1 && (
            <div className="border-t border-white mx-6 md:mx-20"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
