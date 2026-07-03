import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PalmsPassion = () => {
  const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//      gsap.from(".passion-reveal", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.15,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: sectionRef.current,
//     start: "top 75%",
//   },
// });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

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
  className="
    min-h-screen
    bg-white
    text-[var(--palms-blue)]
    flex items-center
    py-24
    px-6
    overflow-hidden
  "
>
  <div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--palms-green)]/10 blur-[120px] rounded-full" />
</div>
  <div className="max-w-7xl mx-auto w-full">

    <div className="text-center mb-20">

      <p className="text-sm uppercase tracking-[0.4em] text-[var(--palms-blue)]">
        PALMS Philosophy
      </p>

      <h2 className="mt-4 text-4xl md:text-7xl font-semibold">
        PALMS Passion
      </h2>

    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {points.map((point, index) => (
        <div
          key={index}
          className="
            passion-reveal
            relative
            bg-[var(--palms-blue)]
            border border-white/10
            backdrop-blur-md
            rounded-3xl
            p-8
            hover:scale-[1.02]
            transition
          "
        >
          <span className="
            absolute
            top-0
            right-1
            text-5xl
            text-white
            font-serif
          ">
            "
          </span>

          <p className="
            text-lg
            leading-relaxed
            text-white
          ">
            {point}
          </p>
        </div>
      ))}

    </div>

    <div className="mt-4 text-center">

      <p className="uppercase tracking-[0.4em] text-white/50 text-sm">
        Philosophy By
      </p>

      <h3 className="mt-3 text-2xl font-medium">
        S. Balasubramaniasamy
      </h3>

    </div>

  </div>
</section>
  );
};

export default PalmsPassion;