import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-[250px] bg-[#063356] flex flex-col items-center justify-start">
      <div className="relative w-[375px] h-[250px] md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[500px]">
        <Image
          src="/home.jpg"
          alt="Home Image"
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-2xl px-4 py-2 rounded">
            Beyond Real Estate,
          </span>
          <span className="text-white text-2xl px-4 py-2 rounded">
            A Legacy
          </span>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
