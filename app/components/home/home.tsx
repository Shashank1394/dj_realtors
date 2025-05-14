import Image from "next/image";
import Header from "../header";

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

// const HomePage = () => {
//   return (
//     <section className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/dj_realtors/homeImage.jpg"
//         alt="Hero Image"
//         fill
//         className="object-cover object-center"
//         priority
//       />

//       {/* Overlay for better text visibility */}
//       <div className="absolute inset- bg-opacity-40"></div>

//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
//         <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
//           <span>Beyond Real Estate,</span>
//           <br />
//           <span>A Legacy</span>
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default HomePage;

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="relative w-full h-[calc(100vh-60px)] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/dj_realtors/homeImage.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />

        {/* Hero Text */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl font-light leading-tight drop-shadow-lg">
            <span>Beyond Real Estate,</span>
            <br />
            <span>A Legacy</span>
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 w-full flex justify-center z-30">
          <a href="#verticals" aria-label="Scroll to next section">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
