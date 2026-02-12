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

                                <p className="text-white/70 text-sm mb-8">
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

                                <button className="w-full py-4 rounded-full bg-[var(--palms-green)] hover:scale-105 transition">
                                    Register Now
                                </button>

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
      <section className="py-18">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="grid md:grid-cols-1 gap-20">

            {/* LEFT SIDE STORY */}
            <div className="space-y-8">
              {content.intro.map((para, i) => (
                <p key={i} className="text-lg text-[var(--palms-grey)] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* RIGHT SIDE FEATURE GRID */}
            <div className="grid gap-8">

              {[...content.why, ...content.how].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border-b-8 border-[var(--palms-blue)] hover:shadow-xl transition-all duration-300  "
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--palms-green)]/10 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-[var(--palms-green)] rounded-full" />
                  </div>

                  <p className="text-[var(--palms-grey)] text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* PREMIUM MEMBERSHIP BLOCK */}
      <section className="py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6">

          <div className="bg-gradient-to-br from-[var(--palms-blue)] to-[#0f2f66] text-white rounded-3xl p-16 relative overflow-hidden shadow-xl">

            <h2 className="text-4xl font-semibold mb-12 text-center">
              What You Get
            </h2>

            <div className="space-y-8 mb-16">
              {content.benefits.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-3 h-3 bg-[var(--palms-green)] mt-2 rounded-full" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-white/20 pt-12">

              <p className="text-lg text-white/60 mb-6">
                {content.note}
              </p>

              <button className="px-14 py-4 bg-[var(--palms-green)] rounded-full hover:scale-105 transition-all duration-300 font-medium">
                Register Now
              </button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
