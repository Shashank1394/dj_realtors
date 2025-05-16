import Cards from "./cards";

const Verticals = () => {
  return (
    <div className="h-fit bg-white">
      {/* Section Header */}
      <div className="flex items-center justify-center my-8 mx-4 sm:mx-10 md:mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm sm:text-base text-[#1d3557] tracking-wide"
          id="verticals"
        >
          OUR VERTICALS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-8 md:px-20">
        <Cards />
      </div>
    </div>
  );
};

export default Verticals;
