import React, { useRef, useEffect, useLayoutEffect } from "react";
import hero from "../assets/hero1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageWrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // 🔒 LOCK INITIAL STATE (before first paint)
      gsap.set(".hero-title", {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".hero-sub", {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(".hero-actions > *", {
        autoAlpha: 0,
        y: 10,
        scale: 0.96,
      });

      gsap.set(".hero-image", {
        clipPath: "inset(12% 12% 12% 12%)",
        scale: 1.03,
      });

      const tl = gsap.timeline({ delay: 0.35 });

      tl.to(".hero-title", {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.15,
        ease: "power2.out",
      })
        .to(".hero-sub", {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          ease: "power2.out",
        }, "-=0.75")
        .to(".hero-actions > *", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.14,
          ease: "expo.out",
        }, "-=0.6")
        .to(".hero-image", {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        }, "-=0.9");


      // 🧠 SCROLL IMAGE EXPAND
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
