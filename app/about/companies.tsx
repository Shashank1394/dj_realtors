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

const CompaniesPage = () => {
  return (
    <div className="h-fit ">
      <div className="flex items-center justify-center mt-8 mx-10">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm text-[#1d3557] tracking-wide">
          COMPANIES WE HAVE CREATED
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <div className="grid grid-cols-2 my-8">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="w-full h-[120px] flex items-center justify-center"
          >
            <div className="relative w-[120px] h-[100px]">
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
export default CompaniesPage;
