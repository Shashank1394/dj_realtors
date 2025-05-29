import Image from "next/image";

const HomePage = () => {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/homeImage.jpg"
        alt="Hero Image"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />

      {/* Hero Text */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-light leading-tight drop-shadow-lg font-times">
          <span>Beyond Real Estate,</span>
          <br />
          <span className="font-pinyon">A Legacy</span>
        </h1>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-20 sm:bottom-6 w-full flex justify-center z-30">
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
  );
};

export default HomePage;
