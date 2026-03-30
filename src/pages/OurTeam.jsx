import React from "react";

const partners = [
  {
    name: "Arun Kumar",
    role: "Managing Partner",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meera Nair",
    role: "Strategy Partner",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Raj",
    role: "Consulting Partner",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "Growth Partner",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Programme Manager",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Divya Menon",
    role: "HR Specialist",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Karthik S",
    role: "Trainer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Coordinator",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Operations",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Neha Gupta",
    role: "Content Lead",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Arjun Reddy",
    role: "Marketing",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Priya Das",
    role: "Support",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
];

const TeamCard = ({ person }) => {
  return (
    <div className="group text-center">
      {/* IMAGE */}
      <div className="relative mx-auto w-[180px] h-[180px] rounded-full overflow-hidden">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* HOVER RING */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[var(--palms-green)] transition duration-500" />
      </div>

      {/* NAME */}
      <h3 className="mt-5 text-lg font-semibold text-[var(--palms-blue)]">
        {person.name}
      </h3>

      {/* ROLE */}
      <p className="text-sm text-[var(--palms-grey)]">
        {person.role}
      </p>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="py-10 md:py-0 px-5">
      <div className="max-w-[1200px] mx-auto space-y-20">

        {/* ================= PARTNERS ================= */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-[var(--palms-blue)]">
            Our Directors
          </h2>

          <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] mx-auto rounded-full" />

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {partners.map((person, i) => (
              <TeamCard key={i} person={person} />
            ))}
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-[var(--palms-blue)]">
            Our Team
          </h2>

          <div className="mt-6 h-[3px] w-16 bg-[var(--palms-green)] mx-auto rounded-full" />

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
            {team.map((person, i) => (
              <TeamCard key={i} person={person} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;