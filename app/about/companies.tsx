import Image from "next/image";
import * as motion from "motion/react-client";

const clientLogos = [
  "calibehr.jpeg",
  "anssi.jpeg",
  "BDG.jpeg",
  "BV.jpeg",
  "HI-Q.jpeg",
  "kotak.png",
  "iV-TECH.jpeg",
  "COGENT.jpeg",
  "LG.jpeg",
  "Godrej.jpeg",
  "SBI.jpeg",
  "pw.jpeg",
  "poonawalla.png",
  "leverage.jpeg",
  "my_branch.jpeg",
  "pw_housin.jpeg",
  "ovation.jpeg",
  "pnb.jpeg",
  "STFT.jpeg",
  "SRG.jpeg",
  "Canara.jpeg",
  "cognizant.png",
  "metro.png",
  "hsbc.png",
  "Aakash.jpeg",
  "GRIHUM.jpeg",
  "tradex.png",
  "METRO.jpeg",
  "wakefit.jpeg",
  "bk.png",
  "kfc.png",
  "CAKE.jpeg",
  "CURE.jpeg",
  "earth.jpeg",
  "EATFIT.jpeg",
  "pizza_burst.jpeg",
  "pizzeria.jpeg",
  "SQUARE.jpeg",
];

const CompaniesPage = () => {
  return (
    <div className="h-fit w-full px-4 sm:px-8">
      {/* Section Title with Lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex items-center justify-center mt-8"
      >
        <div className="flex-grow border-t border-black"></div>
        <span className="px-3 text-sm sm:text-base text-[#1d3557] tracking-wide whitespace-nowrap">
          OUR HAPPY CLIENTS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Logos Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
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
            transition={{ duration: 0.2, ease: "easeOut" }}
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
