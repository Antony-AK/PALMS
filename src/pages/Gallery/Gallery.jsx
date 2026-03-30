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
  <section className="min-h-screen bg-white text-[var(--palms-blue)]">

    <div className="max-w-[1200px] mx-auto px-5 py-20">

      {/* HERO */}
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest text-[var(--palms-green)] uppercase">
          Visual Archive
        </span>

        <h1 className="text-4xl md:text-4xl font-semibold mt-2 mb-4">
          Gallery
        </h1>

        <p className="text-[var(--palms-blue)] max-w-[1200px] mx-auto text-sm md:text-base leading-relaxed">
          Moments captured from leadership journeys, workshops,
          and meaningful learning engagements.
        </p>
      </div>

      {/* 🔥 SIMPLE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {folders.map((folder) => (
          <div
            key={folder._id}
            onClick={() => navigate(`/gallery/${folder.slug}`)}
            className="group cursor-pointer"
          >

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={folder.coverImage?.url}
                alt={folder.name}
                className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
            </div>

            {/* NAME BELOW */}
            <h3 className="mt-4 text-lg font-semibold text-center">
              {folder.name}
            </h3>

          </div>
        ))}

      </div>

    </div>
  </section>
);
};

export default Gallery;