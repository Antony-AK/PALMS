import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { membershipsData } from "../pages/Memberships/CorporateMembership";
import gsap from "gsap";

const MembershipDetail = () => {
  const { slug } = useParams();
  const membership = membershipsData.find(m => m.slug === slug);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!membership) return;

    // 🔥 Only animate if there are plans
    if (!membership.plans || membership.plans.length === 0) return;

    // Remove null refs safely
    const validCards = cardsRef.current.filter(Boolean);

    if (validCards.length === 0) return;

    gsap.from(validCards, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });

  }, [membership]);

  const CORPORATE_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLSc3C_5R5pjjis53kTNAh_FiiOz_DQrdTJQZnz1dv9bZHo7X9Q/viewform?usp=header";

  const INDIVIDUAL_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLSefMALeVO87HhkCtQb6KvuoT7_rUbW4_bmphFldb_ZC4_G33g/viewform?usp=header";


  const formLink =
    membership.slug === "corporate"
      ? CORPORATE_FORM
      : INDIVIDUAL_FORM;

  if (membership.slug === "dot") {
    return <DotPage membership={membership} />;
  }


  if (!membership) {
    return <div className="py-40 text-center">Membership not found</div>;
  }

  return (
    <section className="py-32 bg-gradient-to-b from-[var(--palms-blue)] to-[#0c2340] text-white">

      <div className={`      ${membership.plans.length === 4 ? "max-w-[1400px]" : "max-w-[1200px]"}
mx-auto px-6`}>

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-semibold">
            {membership.title}
          </h1>

          <p className="mt-6 text-white/70 max-w-[650px] mx-auto">
            {membership.description}
          </p>
        </div>

        {/* IF NO PLANS (DOT PAGE) */}
        {membership.plans.length === 0 && (
          <div className="text-center text-white/60 text-lg">
            Details coming soon.
          </div>
        )}

        {/* PRICING GRID */}
        {membership.plans.length > 0 && (
          <div
            className={`
      grid 
      grid-cols-1
      sm:grid-cols-2
      ${membership.plans.length === 4 ? "md:grid-cols-4 gap-5" : "md:grid-cols-3 gap-10"}
    `}
          >


            {membership.plans.map((plan, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`
relative
rounded-3xl
bg-[#112a4a]
border border-white/15
${membership.plans.length === 4 ? "p-8" : "p-10"}

`}

              >

                {plan.featured && (
                  <div className="absolute top-6 right-6 text-xs bg-[var(--palms-green)] px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-6">
                  {plan.title}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--palms-green)]">
                    ₹{plan.price}
                  </span>
                  <span className="text-sm text-white/60"> / year</span>
                </div>

                <p className="text-white/70 italic text-sm mb-8">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {plan.benefits.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[var(--palms-green)] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open(formLink, "_blank")}
                  className="w-full py-4 rounded-full bg-[var(--palms-green)] hover:scale-105 transition"
                >
                  Register Now
                </button>

                {/* ✅ Note (only if exists) */}
                {plan.note && (
                  <p className="mt-4 text-xs mx-4 text-white/60 leading-relaxed italic">
                    <span className="text-[var(--palms-green)] font-medium italic ">*</span> {plan.note}
                  </p>
                )}
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default MembershipDetail;



const DotPage = ({ membership }) => {
  const { content } = membership;

  return (
    <div className="bg-[#f5f7fa] text-[var(--palms-blue)]">

      {/* HERO */}
      <section className="bg-[var(--palms-blue)] text-white py-38 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 text-center">

          <h1 className="text-6xl font-semibold mb-8 tracking-tight">
            {membership.title}
          </h1>

          <p className="text-lg text-white/70 mb-10">
            {membership.description}
          </p>

          <div className="inline-block bg-white/10 backdrop-blur-xl px-10 py-5 mt-5 rounded-full border border-white/20">
            <span className="text-lg text-white/70">Annual Fee</span>
            <span className="ml-4 text-2xl font-semibold text-[var(--palms-green)]">
              {content.price}
            </span>
          </div>

        </div>
      </section>


      {/* VALUE SECTION (MERGED WHY + HOW) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* 🔹 FULL WIDTH INTRO */}
          <div className="space-y-5 mb-20 text-center">
            {content.intro.map((para, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-[var(--palms-grey)] leading-relaxed max-w-[850px] mx-auto"
              >
                {para}
              </p>
            ))}
          </div>

          {/* 🔹 2 COLUMN SECTION */}
          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 md:gap-16 items-start">


            {/* LEFT → POINTS */}
            <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-9 border border-gray-100 shadow-sm">

              <h3 className="text-2xl font-semibold text-[var(--palms-blue)] mb-8">
                Why & How It Works
              </h3>

              <div className="space-y-6">
                {[...content.why, ...content.how].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">

                    {/* Dot */}
                    <div className="mt-2 w-3 h-3 rounded-full bg-[var(--palms-green)] group-hover:scale-125 transition" />

                    {/* Text */}
                    <p className="text-[var(--palms-grey)] leading-relaxed text-sm md:text-base">
                      {item}
                    </p>

                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT → WHAT YOU GET */}
            <div className="bg-gradient-to-br from-[var(--palms-blue)] to-[#0f2f66] text-white rounded-3xl p-8 md:p-10 shadow-xl">

              <h3 className="text-2xl font-semibold mb-8">
                What You Get
              </h3>

              <div className="space-y-6">
                {content.benefits.map((item, i) => (
                  <div key={i} className="self-start md:sticky md:top-24 flex gap-4 items-start group">

                    {/* Accent Dot */}
                    <div className="mt-2 w-3 h-3 rounded-full bg-[var(--palms-green)] group-hover:scale-125 transition" />

                    {/* Text */}
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* 🔹 CENTER CTA */}
          <div className="mt-20 text-center">

            <p className="text-[var(--palms-grey)] mb-6 text-sm md:text-base">
              {content.note}
            </p>

            <button
              onClick={"/contact"}
              className="px-16 py-4 bg-[var(--palms-green)] text-white rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};
