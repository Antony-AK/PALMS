import React, { useRef, useEffect, useLayoutEffect } from "react";
import hero from "../assets/Banner.JPG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/Silverlogo.png"
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageWrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const HERO_CONTENT = [
    {
      title: "Developing mindful leaders for the future of organisations",
      sub: "PALMS empowers individuals and organisations through value-driven learning that builds leadership capability, clarity of thought, and meaningful professional growth."
    },
    {
      title: "Building capability, confidence, and cultures of excellence",
      sub: "Through high-impact training programmes, PALMS strengthens individual effectiveness, improves organisational performance, and nurtures strong leadership behaviour."
    },
    {
      title: "Inspiring lifelong learning that unlocks human potential",
      sub: "At PALMS, learning is a continuous journey-shaping mindsets, enabling conscious choices, and creating lasting impact across people and organisations."
    }
  ];



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

      const introTl = gsap.timeline({
        delay: 0.35,
        defaults: { ease: "power2.out" },
      });

      introTl.to(".hero-title", {
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

      const titleEl = document.querySelector(".hero-dynamic-title");
      const subEl = document.querySelector(".hero-dynamic-sub");

      let index = 1;

      const swapContent = () => {
        const item = HERO_CONTENT[index];

        const tl = gsap.timeline();

        tl.to([titleEl, subEl], {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.6,
          ease: "power2.in",
        })
          .add(() => {
            titleEl.innerText = item.title;
            subEl.innerText = item.sub;
          })
          .to([titleEl, subEl], {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.9,
            ease: "power3.out",
          });

        index = (index + 1) % HERO_CONTENT.length;

        tl.to(".hero-actions", {
          autoAlpha: 0.7,
          duration: 0.3,
        }, 0)
          .to(".hero-actions", {
            autoAlpha: 1,
            duration: 0.3,
          }, 0.6);

        gsap.fromTo(
          ".hero-overlay",
          { opacity: 0.5 },
          { opacity: 0.4, duration: 0.6, ease: "power2.out" }
        );



        gsap.fromTo(
          imageWrapperRef.current,
          { scale: 1.015 },
          { scale: 1, duration: 0.8, ease: "power2.out" }
        );

      };

      // 🔹 INITIAL CONTENT
      titleEl.innerText = HERO_CONTENT[0].title;
      subEl.innerText = HERO_CONTENT[0].sub;

      // 🔁 LOOP
      introTl.call(() => {
        gsap.timeline({ repeat: -1 })
          .call(swapContent)
          .to({}, { duration: 3 });
      });




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
    <section ref={sectionRef} className="w-full hero-noise overflow-hidden relative">

      {/* TEXT */}
      <div className="relative z-20 max-w-[1160px] mx-auto text-center px-5 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-[var(--palms-blue)]">
          <span className="hero-dynamic-title block"></span>
        </h1>

        <p className="hero-sub mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[var(--palms-grey)] max-w-[720px] mx-auto">
          <span className="hero-dynamic-sub block"></span>
        </p>


        <div className="hero-actions mt-7 sm:mt-8 flex  sm:flex-row items-center justify-center gap-3 sm:gap-4">          <button onClick={() => navigate("/memberships/individual")} className="btn-primary">Become a member</button>
          <button onClick={() => navigate("/events")} className="btn-secondary">Explore programs</button>
        </div>
      </div>

      <div className="image absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 
w-[200px] sm:w-[260px] md:w-[320px] lg:w-[350px] 
h-[200px] sm:h-[260px] md:h-[320px] lg:h-[350px] 
opacity-20 slow-spin pointer-events-none">
        <img src={logo}  alt="hero" />
      </div>



      {/* IMAGE */}
      <div
        ref={imageWrapperRef}
        className="hero-image 
w-[87%] sm:w-[88%] md:w-[85%] lg:w-[80%] 
mx-auto 
h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] 
relative overflow-hidden rounded-3xl sm:rounded-4xl"      >
        <div className="hero-overlay absolute inset-0 bg-[var(--palms-blue)] opacity-40 z-10" />
        <img
          src={hero}
          alt="PALMS Training"
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>

  );
};

export default Hero;










