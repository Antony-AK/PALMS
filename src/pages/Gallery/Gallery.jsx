import React, { useEffect, useState } from "react";import { useNavigate } from "react-router-dom";
import cover1 from "../../assets/hero.png";
import cover2 from "../../assets/hero1.jpg";

const Gallery = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchFolders = async () => {
    try {
      const res = await fetch("https://palms-backend-bwad.onrender.com/api/gallery");
      const data = await res.json();
      setFolders(data);
    } catch (error) {
      console.error("Failed to fetch folders");
    } finally {
      setLoading(false);
    }
  };

  fetchFolders();
}, []);

  return (
    <section className="relative min-h-screen bg-white text-[var(--palms-blue)] overflow-hidden">

      {/* Background Glow */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--palms-green)] opacity-20 blur-[140px] rounded-full" /> */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[140px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-24">

        {/* HERO */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-[var(--palms-green)] uppercase">
            Visual Archive
          </span>

          <h1 className="text-6xl font-semibold mt-2 mb-6 tracking-tight">
            Gallery
          </h1>

          <p className="text-[var(--palms-blue)] max-w-[600px] mx-auto text-lg leading-relaxed">
            Moments captured from leadership journeys, workshops,
            and meaningful learning engagements.
          </p>
        </div>

        {/* EDITORIAL LAYOUT */}
        <div className="space-y-32">

          {folders.map((folder, index) => {

            const isReverse = index % 2 !== 0;

            return (
              <div
                key={folder._id}
                className={`flex flex-col lg:flex-row items-center gap-16 ${isReverse ? "lg:flex-row-reverse" : ""
                  }`}
              >

                {/* IMAGE */}
                <div className="relative w-full lg:w-2/4">

                  {/* BACK LAYER CARD */}
                  <div className="
    absolute
    top-6
    left-6
    w-full
    h-full
    bg-[var(--palms-blue)]
    rounded-3xl
    opacity-20
    blur-sm
  " />

                  {/* MIDDLE BLUE CARD */}
                  <div className="
    absolute
    top-3
    left-3
    w-full
    h-full
    bg-[var(--palms-blue)]
    rounded-3xl
    opacity-70
  " />

                  {/* MAIN IMAGE CARD */}
                  <div
                    onClick={() => navigate(`/gallery/${folder.slug}`)}
                    className="
      group
      relative
      rounded-3xl
      overflow-hidden
      cursor-pointer
      transition-all duration-500
      hover:-translate-y-2
    "
                  >
                    <img
                      src={folder.coverImage?.url}
                      alt={folder.name}
                      className="
        w-full
        h-[350px]
        object-cover
        transition duration-1000
        group-hover:scale-105
      "
                    />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> */}

                    {/* Soft border */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="w-full lg:w-1/3 text-left">

                  <span className="text-white/40 text-sm tracking-widest">
                    0{index + 1}
                  </span>

                  <h3 className="text-3xl font-semibold mt-4 mb-6">
                    {folder.name}
                  </h3>

                  <p className="text-[var(--palms-blue)] mb-8 leading-relaxed">
                    Explore captured moments and reflections from this experience.
                  </p>

                  <button
                    onClick={() => navigate(`/gallery/${folder.slug}`)}
                    className="
                      px-8 py-3
                      rounded-full
                      bg-[var(--palms-green)]
                      text-white
                      transition
                      hover:scale-105
                    "
                  >
                    View Gallery
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Gallery;