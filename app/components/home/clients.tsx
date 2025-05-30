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
