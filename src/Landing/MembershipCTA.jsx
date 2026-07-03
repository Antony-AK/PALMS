import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MembershipCTASection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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
    className="relative w-full px-5 sm:px-6 md:px-8 py-20 sm:py-28 md:py-36
  bg-palms-gradient
  overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20
    shadow-[0_40px_120px_rgba(0,0,0,0.35)]">

          <div className="text-center max-w-[900px] mx-auto space-y-4 sm:space-y-6 mb-14 sm:mb-16 md:mb-20">
            <span className="cta-reveal text-sm sm:text-base md:text-lg tracking-widest uppercase text-gray-500">
              PALMS Membership
            </span>

            <h2 className="cta-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold
    text-[var(--palms-blue)] leading-tight">
              A commitment to continuous learning
              
              and conscious growth
            </h2>

            <p className="cta-reveal text-base sm:text-lg text-[var(--palms-grey)] leading-relaxed">
              PALMS Membership is designed for individuals and organisations that value
              clarity of thought, leadership maturity, and long-term professional growth.
            </p>
          </div>




          {/* MEMBERSHIP TYPES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-14 sm:mb-16 md:mb-20">
            <div className="cta-reveal group relative bg-white rounded-2xl p-6 sm:p-8 md:p-10
  border-l-4 border-[var(--palms-green)]
  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

    

              <h3 className="text-lg sm:text-xl font-semibold text-[var(--palms-blue)] mb-3 sm:mb-4">
                Individual Membership
              </h3>

              <p className="text-sm sm:text-base text-[var(--palms-grey)] leading-relaxed">
                For professionals, students, and learners committed to reflection,
                structured learning, and personal leadership development.
              </p>
            </div>


            <div className="cta-reveal group relative bg-[var(--palms-blue)] text-white rounded-2xl p-10
  shadow-[0_30px_80px_rgba(0,0,0,0.25)] border-l-4 border-[var(--palms-green)]
 
  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.35)]">

              <h3 className="text-xl font-semibold mb-4">
                Corporate Membership
              </h3>

              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                For organisations focused on leadership capability, cultural excellence,
                and consistent people development.
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
          <div className="cta-reveal flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <button onClick={()=> navigate("/memberships/individual")} className="btn-primary px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base
    shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              Begin your membership journey
            </button>

            <button onClick={()=> navigate("/memberships/corporate")} className="btn-secondary text-[var(--palms-blue)]">
              View membership plans →
            </button>
          </div>


        </div>
      </div>


      {/* </div> */}
    </section >
  );
};

export default MembershipCTASection;
