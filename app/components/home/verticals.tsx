import * as motion from "motion/react-client";
import Cards from "./cards";

const Verticals = () => {
  return (
    <div className="h-fit bg-white mx-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center my-8 mx-4 sm:mx-10 md:mx-20"
      >
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm sm:text-base text-[#1d3557] tracking-wide"
          id="verticals"
        >
          OUR VERTICALS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 sm:px-8 md:px-20"
      >
        <Cards />
      </motion.div>
    </div>
  );
};

export default Verticals;
