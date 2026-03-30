import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PalmsPassion = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".passion-reveal", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    "We at PALMS are learners forever, catalysing learning as a core human activity.",
    "We thrive to be the inspiration and ignition to unleash the human potential.",
    "We manifest that life is not a chance, but the fruit of our own choice.",
    "We model the change that we seek, and in our contact help people see their worth.",
    "Motivating success and revealing failure are two sides of the coin called learning.",
    "With this empowering attitude we move ahead, creating prosperity all around.",
  ];

  return (
   <section
  ref={sectionRef}
  className="w-full bg-white px-6 md:px-10 py-16 md:py-20"
>
  <div className="max-w-3xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12">
      <span className="passion-reveal text-[10px] tracking-[0.3em] uppercase text-gray-400">
        PALMS Philosophy
      </span>

      <h2 className="passion-reveal mt-3 text-3xl md:text-4xl font-semibold text-[var(--palms-blue)]">
        PALMS Passion
      </h2>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-[var(--palms-blue)] "></div>

      <div className="space-y-10">

        {points.map((point, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`passion-reveal flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full md:w-[48%] relative">

          {/* Dot (only one side) */}
<div
  className={`absolute top-2 ${
    isLeft ? "-right-5" : "-left-5"
  } w-2.5 h-2.5 rounded-full bg-[var(--palms-green)]`}
></div>
                {/* Compact Card */}
                <div className="bg-gray-50/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-100">

                  <p className="italic text-[var(--palms-grey)] text-sm md:text-base leading-relaxed">

                    <span className="text-[var(--palms-blue)] mr-1">“</span>

                    {point}

                    <span className="text-[var(--palms-green)] ml-1">”</span>

                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>

    {/* Author */}
    <div className="passion-reveal mt-14 text-center">
      <p className="text-xs uppercase tracking-widest text-gray-400">
        Philosophy By
      </p>

      <p className="mt-2 text-lg font-medium text-[var(--palms-blue)]">
        S. Balasubramaniasamy
      </p>
    </div>

  </div>
</section>
  );
};

export default PalmsPassion;