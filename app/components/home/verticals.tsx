import Cards from "./cards";

const VerticalsPage = () => {
  return (
    <div className="h-fit w-screen">
      <div className="flex items-center justify-center my-8 mx-8">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-lg text-[#1d3557] tracking-wide">
          OUR VERTICALS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <Cards />
    </div>
  );
};
export default VerticalsPage;
