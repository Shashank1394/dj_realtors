import Image from "next/image";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "DJ Dhamne",
      title: "Chairman",
      department: "DJ Realtors",
      image: "/dj_realtors/about/dj_dhamne.png",
    },
    {
      name: "Shrirang Bhadane",
      title: "Managing Director",
      department: "CRE | Retail",
      image: "/dj_realtors/about/shrirang_bhadane.png",
    },
    {
      name: "Prashant Nahar",
      title: "Director",
      department: "Retail Vertical",
      image: "/dj_realtors/about/prashant_nahar.png",
    },
    {
      name: "Harshad Kotkar",
      title: "Director",
      department: "Land Vertical",
      image: "/dj_realtors/about/harshad_kotkar.png",
    },
  ];

  return (
    <div className="h-fit">
      {/* Header */}
      <div className="flex items-center justify-center my-8 mx-20">
        <div className="flex-grow border-t border-black"></div>
        <span
          className="px-2 text-sm text-[#1d3557] tracking-wide"
          id="verticals"
        >
          OUR TEAM
        </span>
        <div className="flex-grow border-t border-black"></div>
      </div>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-12 px-4 pb-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[180px]"
          >
            {/* Image Container */}
            <div
              style={{
                width: "143px",
                height: "157px",
                position: "relative",
                overflow: "hidden",
              }}
            >
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
              <h2 className="text-lg font-semibold text-[#1d3557] leading-tight">
                {member.name}
              </h2>
              <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                {member.title}
                {"\n"}
                {member.department}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
