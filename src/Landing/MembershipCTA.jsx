import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MembershipCTASection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-reveal",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-18 bg-[var(--palms-grey-light)]"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="max-w-[820px] mx-auto text-center">

          {/* PRIMARY CTA */}
          <span className="cta-reveal text-lg text-gray-500 block mb-6">
            Membership
          </span>

          <h2 className="cta-reveal text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
            A commitment to
            <br />
            continuous learning
          </h2>

          <p className="cta-reveal mt-8 text-lg text-[var(--palms-grey)] max-w-[640px] mx-auto">
            PALMS membership is designed for individuals and professionals
            who value reflection, structured learning, and long-term growth.
            Members participate in regular programmes that strengthen
            thinking, leadership, and personal effectiveness.
          </p>

          <div className="cta-reveal mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary px-8 py-3">
              Become a member
            </button>

            <button className="text-sm text-[var(--palms-green)] flex items-center gap-1 hover:underline underline-offset-4 transition">
              Explore membership structure →
            </button>
          </div>

          {/* DIVIDER */}
          <div className="cta-reveal mt-20 mb-10 h-px bg-gray-300/60 max-w-[160px] mx-auto" />

          {/* SOFT OPT-IN FORM */}
          {/* <div className="cta-reveal max-w-[520px] mx-auto">
            <p className="text-sm text-[var(--palms-grey)] mb-4">
              Prefer to stay informed? Receive programme updates and learning insights.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full sm:w-[320px] px-4 py-3 text-sm bg-white
                           border border-gray-300 rounded-md
                           focus:outline-none focus:border-[var(--palms-blue)]"
              />

              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium
                           border border-[var(--palms-blue)]
                           text-[var(--palms-blue)]
                           rounded-md
                           hover:bg-[var(--palms-blue)]
                           hover:text-white transition"
              >
                Get updates
              </button>
            </form>
          </div> */}

        </div>

      </div>
    </section>
  );
};

export default MembershipCTASection;
