import Image from "next/image";
import * as motion from "motion/react-client";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "DJ Dhamne",
      title: "Chairman",
      department: "DJ Realtors",
      image: "/about/dj_dhamne.png",
      phone: "+919423930253",
      email: "djdhamne@gmail.com",
    },
    {
      name: "Shrirang Bhadane",
      title: "Managing Director",
      department: "CRE | Retail",
      image: "/about/shrirang_bhadane.png",
      phone: "+919921210123",
      email: "shrirang.djrealtors@gmail.com",
    },
    {
      name: "Prashant Nahar",
      title: "Director",
      department: "Retail Vertical",
      image: "/about/prashant_nahar.png",
      phone: "+919822770646",
      email: "nahar.djrealtors@gmail.com",
    },
    {
      name: "Harshad Kotkar",
      title: "Director",
      department: "Land Vertical",
      image: "/about/harshad_kotkar.png",
      phone: "+917083111300",
      email: "harshad.djrealtors@gmail.com",
    },
  ];

  return (
    <div className="h-fit">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center my-8 mx-20"
      >
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm text-[#1d3557] tracking-wide"
          id="verticals"
        >
          OUR TEAM
        </span>
        <div className="flex-grow border-t border-black"></div>
      </motion.div>

      {/* Team Members */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 sm:gap-12 md:gap-20 px-4 pb-12"
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
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]"
          >
            {/* Image Container */}
            <div className="w-[90%] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-[5/5.3] relative overflow-hidden rounded-md shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>

            {/* Text Content */}
            <div className="mt-4">
              <h2 className="text-base sm:text-lg font-semibold text-[#1d3557] leading-tight">
                {member.name}
              </h2>
              <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                {member.title}
                {"\n"}
                {member.department}
                <br />
                <a
                  href={`tel:${member.phone}`}
                  className="hover:underline block mt-1"
                >
                  {member.phone
                    ? member.phone.replace(/^(\+91)(\d{10})$/, "$1 $2")
                    : null}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="hover:underline block mt-1"
                >
                  {member.email}
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamPage;
