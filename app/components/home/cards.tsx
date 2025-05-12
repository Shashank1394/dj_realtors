import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/corporate.png"
            alt="Corporate Services"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">CORPORATE SERVICES</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Discover prime commercial spaces with top-tier infrastructure to
          elevate your business and brand.
        </p>
      </div>

      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/logistics.png"
            alt="Logistics and Warehouse"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">LOGISTICS & WEARHOUSE</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Explore top industrial spaces including warehouses, plants, and more
          built for efficiency, growth, and prime connectivity.
        </p>
      </div>

      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/retail.png"
            alt="Retial Services"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">RETAIL SERVICES</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Discover premium retail spaces in high-traffic, prime locations
          perfect for boutiques, flagship stores, and franchises to boost brand
          visibility.
        </p>
      </div>

      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/land.png"
            alt="Land Services"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">LAND</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Explore prime land for commercial, residential and industrial projects
          with high ROI potential.
        </p>
      </div>

      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/investment.png"
            alt="Investment Preleased"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">INVESTMENT PRELEASED</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Secure pre-released investment properties in prime locations with
          strong growth and future value potential.
        </p>
      </div>

      <div className="bg-[#BFE0FF] w-[241px] h-[149px]">
        <div className="flex justify-left items-center gap-2 mt-4 ml-3">
          <Image
            src="/verticals/residential.png"
            alt="Premium Residential"
            width={40}
            height={40}
          />
          <h2 className="text-xs font-bold">PREMIUM RESIDENTIAL</h2>
        </div>
        <p className="py-3 px-4 text-xs">
          Secure pre-released investment properties in prime locations with
          strong growth and future value potential.
        </p>
      </div>
    </div>
  );
};
export default Cards;
