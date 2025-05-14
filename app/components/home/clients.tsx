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
    <div className="h-fit ">
      <div className="flex items-center justify-center mt-8 mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm text-[#1d3557] tracking-wide">
          OUR MILESTONE CLIENTS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="grid grid-cols-2 mt-8">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="w-full h-[150px] flex items-center justify-center"
          >
            <div className="relative w-[120px] h-[100px]">
              <Image
                src={`/dj_realtors/clients/${logo}`}
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
