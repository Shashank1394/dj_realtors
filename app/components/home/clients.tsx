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
  "Aakash.jpeg",
  "anssi.jpeg",
  "BDG.jpeg",
  "BV.jpeg",
  "CAKE.jpeg",
  "calibehr.jpeg",
  "Canara.jpeg",
  "COGENT.jpeg",
  "CURE.jpeg",
  "earth.jpeg",
  "EATFIT.jpeg",
  "Godrej.jpeg",
  "GRIHUM.jpeg",
  "HI-Q.jpeg",
  "iV-TECH.jpeg",
  "leverage.jpeg",
  "LG.jpeg",
  "METRO.jpeg",
  "my_branch.jpeg",
  "ovation.jpeg",
  "pizza_burst.jpeg",
  "pizzeria.jpeg",
  "pnb.jpeg",
  "SBI.jpeg",
  "SQUARE.jpeg",
  "SRG.jpeg",
  "STFT.jpeg",
  "wakefit.jpeg",
];

const Clients = () => {
  return (
    <div className="h-fit w-full bg-white py-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex items-center justify-center mb-8 mx-4 sm:mx-10 md:mx-20"
      >
        <div className="flex-grow border-t border-black"></div>
        <span className="px-2 text-sm sm:text-base text-[#1d3557] tracking-wide">
          OUR MILESTONE CLIENTS
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-6 sm:px-10 lg:px-20">
        {clientLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center justify-center h-[100px]"
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
      </div>
    </div>
  );
};

export default Clients;
