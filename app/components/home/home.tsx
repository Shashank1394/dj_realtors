import Image from "next/image";

// const HomePage = () => {
//   return (
//     <div className="h-[250px] bg-[#063356] flex flex-col items-center justify-start">
//       <div className="relative w-[375px] h-[250px] md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[500px]">
//         <Image
//           src="/dj_realtors/homeImage.jpg"
//           alt="Home Image"
//           fill
//           objectFit="contain"
//           className="rounded"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <span className="text-white text-2xl px-4 py-2 rounded">
//             Beyond Real Estate,
//           </span>
//           <span className="text-white text-2xl px-4 py-2 rounded">
//             A Legacy
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;

const HomePage = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/dj_realtors/homeImage.jpg"
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset- bg-opacity-40"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
          <span>Beyond Real Estate,</span>
          <br />
          <span>A Legacy</span>
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
