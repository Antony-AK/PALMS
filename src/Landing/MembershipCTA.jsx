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
      className="w-full px-6 py-14 bg-[var(--palms-grey-light)]"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="max-w-[960px] mx-auto text-center space-y-16">

          {/* INTRO */}
          <div className="space-y-6">
            <span className="cta-reveal text-sm tracking-widest uppercase text-gray-500">
              PALMS Membership
            </span>

            <h2 className="cta-reveal text-4xl md:text-6xl font-semibold text-[var(--palms-blue)] leading-tight">
              A commitment to continuous learning

              and conscious growth
            </h2>

            <p className="cta-reveal text-lg text-[var(--palms-grey)] max-w-[770px] mx-auto leading-relaxed">
              PALMS Membership supports individuals and organisations through
              consistent, structured learning experiences that strengthen leadership,
              personal effectiveness, and long-term thinking.
            </p>
          </div>



          {/* MEMBERSHIP TYPES */}
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="
  cta-reveal group bg-white rounded-2xl p-10
  shadow-sm border border-black/5
  transition-all duration-500 ease-out
  hover:-translate-y-2 hover:shadow-xl
">
              <span className="
  block w-12 h-[3px] mb-6
  bg-[var(--palms-green)]
 origin-left
  transition-transform duration-500
  scale-x-100
" />

              <h3 className="text-xl font-semibold text-[var(--palms-blue)] mb-3">
                Individual Membership
              </h3>

              <p className="text-[var(--palms-grey)] leading-relaxed">
                Designed for professionals, students, and self-driven learners who value
                reflection, structured learning, and long-term leadership development.
              </p>

            </div>

            <div className="
  cta-reveal group bg-white rounded-2xl p-10
  shadow-sm border border-black/5
  transition-all duration-500 ease-out
  hover:-translate-y-2 hover:shadow-xl
">
              <span className="
  block w-12 h-[3px] mb-6
  bg-[var(--palms-green)] origin-left
  transition-transform duration-500
  scale-x-100
" />

              <h3 className="text-xl font-semibold text-[var(--palms-blue)] mb-2">
                Corporate Membership
              </h3>
              <p className="text-[var(--palms-grey)] leading-relaxed">
                Designed for organisations that value structured people development,
                leadership capability, and long-term cultural excellence.
              </p>
            </div>
          </div>

          {/* <div className="cta-reveal flex justify-center ">
            <div className="w-[140px] h-px bg-black/10 relative overflow-hidden">
              <span className="
      absolute left-0 top-0 h-full w-full
      bg-[var(--palms-green)]
      scale-x-0 origin-left
      animate-[grow_2s_ease-in-out_infinite]
    " />
            </div>
          </div> */}


          {/* CTA */}
          <div className="
  cta-reveal 

  rounded-2xl
  px-10 
  flex flex-col sm:flex-row
  items-center justify-center gap-6
">
            <button className="btn-primary px-10 py-4">
              Begin your membership journey
            </button>

            <button className="btn-secondary">
              View membership structure →
            </button>

          </div>

        </div>


      </div>
    </section>
  );
};

export default MembershipCTASection;
