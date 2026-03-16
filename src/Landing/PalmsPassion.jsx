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
        y: 50,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50 px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT SIDE */}

        <div className="flex flex-col justify-between">

          <div>

            <span className="passion-reveal text-sm tracking-widest uppercase text-gray-500 block mb-5">
              PALMS Philosophy
            </span>

            <h2 className="passion-reveal text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[var(--palms-blue)]">
              PALMS Passion
            </h2>

            

          </div>

          {/* Quote Card */}

          <div className="passion-reveal mt-10 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

            <p className="text-lg leading-relaxed text-[var(--palms-grey)]">
              “We believe learning is the most powerful force that shapes
              individuals, organisations, and society.”
            </p>

            <p className="mt-6 text-sm text-gray-500 italic">
              — S. Balasubramaniasamy
            </p>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="flex flex-col gap-6 text-[var(--palms-grey)] text-base sm:text-lg leading-relaxed">

          <p className="passion-reveal">
            We at PALMS are learners forever, catalysing learning as a core human activity.
          </p>

          <p className="passion-reveal">
            We thrive to be the inspiration and ignition to unleash the human potential.
          </p>

          <p className="passion-reveal">
            We manifest that life is not a chance, but the fruit of our own choice.
          </p>

          <p className="passion-reveal">
            We model the change that we seek, and in our contact help people see their worth.
          </p>

          <p className="passion-reveal">
            Motivating success and revealing failure are two sides of the coin called learning.
          </p>

          <p className="passion-reveal">
            With this empowering attitude we move ahead, creating prosperity all around.
          </p>

        </div>

      </div>

    </section>
  );
};

export default PalmsPassion;