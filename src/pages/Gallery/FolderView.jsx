import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { galleryFolders } from "../../data/galleryData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const FolderView = () => {
  const { slug } = useParams();
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [folder, setFolder] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const res = await fetch("https://palms-backend-bwad.onrender.com/api/gallery");
        const data = await res.json();
        const found = data.find(f => f.slug === slug);

        setFolder(found || null);
      } catch (error) {
        console.error("Folder fetch failed");
      } finally {
        setLoading(false);
      }
    };

    fetchFolder();
  }, [slug]);

  useEffect(() => {
    if (!folder) return;

    // 🔥 LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      lerp: 0.07,
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // 🔥 IMAGE PARALLAX
    const ctx = gsap.context(() => {

      gsap.utils.toArray(".img-container").forEach(container => {
        const img = container.querySelector("img");

        gsap.fromTo(
          img,
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              scrub: true
            }
          }
        );
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };

  }, [folder]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-[var(--palms-blue)] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!folder) {
    return <div className="p-20 text-center">Folder not found</div>;
  }

  return (


    <section
      ref={sectionRef}
      className="min-h-screen bg-white py-32 px-6"
    >


      <div className="max-w-[1400px] mx-auto">

        <button
          onClick={() => navigate("/gallery")}
          className="
    fixed
    top-28
    left-8
    z-50
    flex items-center gap-3
    px-5 py-3
    rounded-full
    backdrop-blur-xl
    bg-white/70
    border border-white/40
    text-[var(--palms-blue)]
    font-medium
    shadow-lg
    transition-all duration-300
    hover:scale-105
    hover:shadow-xl
  "
        >
          <span className="text-lg">←</span>
          Back
        </button>

        {/* HEADER */}
        <div className="text-center text-[var(--palms-blue)] mb-28">
          <h1 className="text-5xl font-semibold mb-6">
            {folder.name}
          </h1>
          <p className="text-[var(--palms-grey)]">
           {folder.description || "A collection of moments captured from leadership journeys, workshops, and meaningful learning engagements."}
          </p>
        </div>

        {/* 3 COLUMN STRUCTURE */}
        <div className="flex flex-col md:flex-row gap-14">

          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-14">
            {folder.images
              .filter((_, i) => i % 3 === 0)
              .map((img, i) => (
                <Card key={i} img={img} height="h-[300px] object-cover" />
              ))}
          </div>

          {/* CENTER */}
          <div className="flex-1 flex flex-col gap-14">
            {folder.images
              .filter((_, i) => i % 3 === 1)
              .map((img, i) => (
                <Card key={i} img={img} height="h-full object-cover" />
              ))}
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-14">
            {folder.images
              .filter((_, i) => i % 3 === 2)
              .map((img, i) => (
                <Card key={i} img={img} height="h-[300px] object-cover" />
              ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FolderView;



// CARD COMPONENT (UPDATED FOR PARALLAX)
const Card = ({ img, height }) => (
  <div
    className={`
      ${height}
      relative
      rounded-3xl
      overflow-hidden
      bg-gray-100
    `}
  >
    <div className="img-container w-full h-full relative overflow-hidden rounded-3xl">
      <img
        src={img.url.replace("/upload/", "/upload/q_auto,f_auto,c_fill,g_auto/")}
        alt=""
        loading="lazy"
        decoding="async"
        className="
          absolute
          top-0
          w-full
          h-full
          object-cover
          
        "
      />
    </div>
  </div>
);