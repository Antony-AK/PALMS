import React, { useRef, useEffect } from "react";
import hero from "../assets/hero1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageWrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HERO ENTRANCE
      const tl = gsap.timeline({ delay: 0.4 });

      // ensure buttons are visible by default
      gsap.set(".hero-actions > *", { autoAlpha: 1 });

      // Headline – elegant reveal
      tl.from(".hero-title", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.1,
        ease: "power2.out",
      })

        // Subtext – calm follow
        .from(".hero-sub", {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
          ease: "power2.out",
        }, "-=0.75")

        // Buttons – premium settle (NO DISAPPEAR)
        .from(".hero-actions > *", {
          autoAlpha: 0,
          scale: 0.98,
          y: 8,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.15,
        }, "-=0.6")

        // Image – slow cinematic unmask
        .from(".hero-image", {
          clipPath: "inset(12% 12% 12% 12%)",
          scale: 1.03,
          duration: 1.4,
          ease: "power2.out",
        }, "-=0.9");


      // EXISTING SCROLL IMAGE EXPAND
      gsap.to(imageWrapperRef.current, {
        width: "100%",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+600",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} className="w-full hero-noise overflow-hidden">

      {/* TEXT */}
      <div className="relative z-20 max-w-[960px] mx-auto text-center px-6 pt-24 pb-16">
        <h1 className="hero-title text-4xl md:text-7xl font-semibold leading-tight text-[var(--palms-blue)]">
          Develop leaders who shape
          <br />
          tomorrow&apos;s organizations
        </h1>

        <p className="hero-sub mt-6 text-sm md:text-base text-[var(--palms-grey)] max-w-[620px] mx-auto">
          PALMS Training & Consulting builds capable professionals through proven leadership and
          management programs. Whether you’re advancing your career or strengthening your team,
          we provide the clarity and skills that matter.
        </p>

        <div className="hero-actions mt-8 flex items-center justify-center gap-4">
          <button className="btn-primary">Become a member</button>
          <button className="btn-secondary">Explore programs</button>
        </div>
      </div>

      {/* IMAGE */}
      <div
        ref={imageWrapperRef}
        className="hero-image w-[80%] mx-auto h-[480px] relative overflow-hidden rounded-4xl"
      >
        <div className="absolute inset-0 bg-[var(--palms-blue)] opacity-50 z-10" />
        <img
          src={hero}
          alt="PALMS Training"
          className="w-full h-full object-cover object-top"
        />
      </div>

    </section>

  );
};

export default Hero;










// import React from "react";
// import hero from "../assets/hero1.jpg"

// const Hero = () => {
//   return (
//     <section className="w-full">
//       <div className="max-w-[960px] mx-auto text-center px-6 pt-24 pb-16">

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-semibold leading-16 text-[var(--palms-blue)]">
//           Develop leaders who shape
//           <br />
//           tomorrow&apos;s organizations
//         </h1>

//         {/* Subtext */}
//         <p className="mt-6 text-sm md:text-base text-gray-600 max-w-[620px] mx-auto">
//           PALMS Training & Consulting builds capable professionals through proven leadership and
//           management programs. Whether you’re advancing your career or strengthening your team,
//           we provide the clarity and skills that matter.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex items-center justify-center gap-4">
//           <button className="btn-primary text-white px-6 py-3 text-sm rounded-sm">
//             Become a member
//           </button>
//           <button className="btn-secondary">
//             Explore programs
//           </button>
//         </div>
//       </div>

//       {/* Image Placeholder Block */}
//       <div className="w-[80%] mx-auto h-[480px] rounded-4xl flex items-center justify-center">
//         <img className="w-full h-full object-cover rounded-full object-top" src={hero} alt="" />
//       </div>
//     </section>
//   );
// };

// export default Hero;






// import React from "react";
// import hero from "../assets/hero.png"

// const Hero = () => {
//   return (
//     <section className="w-full">
//       <div className="max-w-[960px] relative z-10 mx-auto text-center px-6 pt-24 pb-16">

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-semibold leading-16 text-[var(--palms-blue)]">
//           Develop leaders who shape
//           <br />
//           tomorrow&apos;s organizations
//         </h1>

//         {/* Subtext */}
//         <p className="mt-6 text-sm md:text-base text-gray-600 max-w-[620px] mx-auto">
//           PALMS Training & Consulting builds capable professionals through proven leadership and
//           management programs. Whether you’re advancing your career or strengthening your team,
//           we provide the clarity and skills that matter.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex items-center justify-center gap-4">
//           <button className="btn-primary text-white px-6 py-3 text-sm rounded-sm">
//             Become a member
//           </button>
//           <button className="btn-secondary">
//             Explore programs
//           </button>
//         </div>
//       </div>

//       {/* Image Placeholder Block */}
//       <div className="w-full mx-auto h-[780px] absolute -bottom-100 rounded-4xl flex items-center justify-center">
//         <img className="w-full h-full object-cover rounded object-top" src={hero} alt="" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
