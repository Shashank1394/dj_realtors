import Image from "next/image";

const clientLogos = [
  "kotak.png",
  "poonawalla.png",
  "cognizant.png",
  "metro.png",
  "hsbc.png",
  "tradex.png",
  "bk.png",
  "kfc.png",
];

const Clients = () => {
  return (
    <div className="h-fit w-full bg-white py-10">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 mx-4 sm:mx-10 md:mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm sm:text-base text-[#1d3557] tracking-wide">
          OUR MILESTONE CLIENTS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-6 sm:px-10 lg:px-20">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[100px]"
          >
            <div className="relative w-[100px] h-[80px] sm:w-[120px] sm:h-[100px]">
              <Image
                src={`/clients/${logo}`}
                alt={logo.split(".")[0]}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
