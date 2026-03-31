import React from "react";
import director1 from "../assets/director1.png"
import director2 from "../assets/director2.png"
import director3 from "../assets/director3.png"
import director4 from "../assets/director4.png"
import director5 from "../assets/director5.png"
import director6 from "../assets/director6.png"
import director7 from "../assets/director7.png"
import director8 from "../assets/director8.png"
import director9 from "../assets/director9.png"

import mem1 from "../assets/mem1.png"
import mem2 from "../assets/mem2.png"
import mem3 from "../assets/mem3.png"
import mem4 from "../assets/mem4.png"
import mem5 from "../assets/mem5.png"




const partners = [
  {
    name: "D. Senthil Kannan",
    role: "",
    img: director5,
  },
  {
    name: "K. Pon Venkatesh",
    role: "",
    img: director6,
  },
  {
    name: "C. Karthikeya Prabu",
    role: "",
    img: director7,
  },
  {
    name: "S. Balasubramaniasamy",
    role: "",
    img: director9,
  },
  {
    name: "G. Sugumar",
    role: "",
    img: director1,
  },
  {
    name: "B. Palani Kumar",
    role: "",
    img: director2,
  },
  {
    name: "S. Gurubala",
    role: "",
    img: director3,
  },
  {
    name: "D. S. Sidhaarth",
    role: "",
    img: director4,
  },
   {
    name: "D. S. Sanjeev",
    role: "",
    img: director8,
  },
];

const team = [
   {
    name: "D. Senthil Kannan",
    role: "CEO",
    img: director5,
  },
  {
    name: "N. Arumugam",
    role: "General Manager",
    img: mem1,
  },
  {
    name: "L. Dilip",
    role: "Business Development Manager           ",
    img: mem2,
  },
  {
    name: "M. Antony Rajathi",
    role: "Accounts Manager",
    img: mem3,
  },
  {
    name: "A.	Kalyanasundari",
    role: "Customer Relationship Manager",
    img: mem4,
  },
  {
    name: "S. Manikandan ",
    role: "PALMS Training Centre Manager",
    img: mem5
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
          className="w-full h-full object-cover transition duration-500 scale-110"
        />

        {/* HOVER RING */}
        <div className="absolute inset-0 rounded-full border-2  border-[var(--palms-green)] transition duration-500" />
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