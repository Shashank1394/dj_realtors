import Cards from "./cards";

const Verticals = () => {
  return (
    <div className="h-fit">
      <div className="flex items-center justify-center my-8 mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm text-[#1d3557] tracking-wide">
          OUR VERTICALS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <Cards />
    </div>
  );
};
export default Verticals;
