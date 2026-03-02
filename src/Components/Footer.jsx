import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo-white.jpg"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full  bg-[var(--palms-blue)] text-white px-6 pt-16"
    >
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-32">

          {/* LEFT — BRAND ANCHOR */}
          <div className="max-w-[520px]">
            <div className="w-72 h-24  text-lg bg-transparent font-semibold tracking-tight text-[var(--palms-blue)]">
              <img src={logo} className="object-cover" alt="" />
            </div>

            <p className="text-md text-white/70 leading-relaxed">
              Creating positive social change by empowering individuals
              and organisations through value-based training, reflective
              learning, and leadership development.
            </p>

            <p className="mt-10 text-xs uppercase tracking-widest text-white/50">
              Established 2000 · India
            </p>
          </div>

          {/* RIGHT — COORDINATES */}
          <div className="flex flex-col justify-between">

            <div className="space-y-6 text-sm text-white/80">
              <p>
                20/1, W.D. Road<br />
                Thoothukudi – 628 003<br />
                Tamil Nadu, India
              </p>

              <p>
                0461-2330856<br />
                82203 44477
              </p>

              <p>
                info@palmsindia.org
              </p>
            </div>

            <div className="my-5 flex gap-6">
              <a
                href="https://www.facebook.com/palmstraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--palms-blue)] transition-all duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/palmsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--palms-blue)] transition-all duration-300"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://www.instagram.com/palmsindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--palms-blue)] transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>
            </div>

            <div className=" flex flex-col sm:flex-row justify-between gap-6 text-xs text-white/50">

              <span>
                © {new Date().getFullYear()} PALMS Training & Consulting
              </span>

              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </div>

            </div>

          </div>

        </div>

        <div className="relative  overflow-hidden h-[300px]">
          <h1
            className="text-[160px] md:text-[250px] font-extrabold font-coyoto
               tracking-[0.1em] text-white/10
               text-left select-none"
            aria-hidden="true"
          >
            PALMS
          </h1>
        </div>


      </div>

      {/* POWERED BY */}
<div className="border-t border-white/10 mt-10 py-6 text-center text-md text-white/50">
  Powered by{" "}
  <a
    href="https://tecnowok.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[var(--palms-green)] transition"
  >
    Tecnowok
  </a>
</div>
    </footer>
    
  );
};

export default Footer;
