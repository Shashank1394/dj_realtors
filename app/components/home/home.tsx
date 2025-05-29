import Image from "next/image";
import * as motion from "motion/react-client";

const HomePage = () => {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] overflow-hidden">
      {/* Background Image with Scale and Fade-In */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/homeImage.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10" />

      {/* Hero Text */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-light leading-tight drop-shadow-[0_6px_8px_rgba(0,0,0,0.75)] font-times text-center"
        >
          <motion.div className="flex flex-col md:flex-row justify-center items-center">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mr-0 md:mr-2"
            >
              Beyond Real Estate,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="font-pinyon"
            >
              A Legacy
            </motion.span>
          </motion.div>
        </motion.h1>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-20 sm:bottom-6 w-full flex justify-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#verticals" aria-label="Scroll to next section">
          <motion.svg
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
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HomePage;
