import Image from "next/image";
import * as motion from "motion/react-client";

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
    <div className="h-fit w-full px-4 sm:px-8">
      {/* Section Title with Lines */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mt-8"
      >
        <div className="flex-grow border-t border-black"></div>
        <span className="px-3 text-sm sm:text-base text-[#1d3557] tracking-wide whitespace-nowrap">
          COMPANIES WE HAVE CREATED
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Logos Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {clientLogos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[100px] flex items-center justify-center"
          >
            <div className="relative w-[100px] h-[80px] sm:w-[120px] sm:h-[100px]">
              <Image
                src={`/clients/${logo}`}
                alt={logo.split(".")[0]}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CompaniesPage;
