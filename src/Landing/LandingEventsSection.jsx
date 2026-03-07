import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { motion } from "framer-motion";

const LandingEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get("/events");

        const upcoming = res.data
          .filter(event => new Date(event.date) >= new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 3);

        setEvents(upcoming);
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="relative bg-white py-16 sm:py-20 px-5 sm:px-6 md:px-8 mb-12">
      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="mb-14 sm:mb-16 md:mb-20 max-w-[800px]">
          <span className="text-sm sm:text-base md:text-lg tracking-widest uppercase text-gray-500 block mb-6">
            Upcoming Events
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-[var(--palms-blue)]">
            Experiences that shape
            <br /> leaders and organisations
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--palms-grey)] max-w-[620px]">
            Discover our upcoming leadership and development programmes
            designed for meaningful growth.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {loading ? (
            // 🔥 Skeleton Loader
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-[200px] sm:h-[230px] md:h-[260px] bg-gray-100 rounded-2xl animate-pulse"
              />
            ))
          ) : (
            events.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/events/${event.slug}`)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 bg-white"
              >

                {/* Image */}
                <div className="relative h-[200px] sm:h-[230px] md:h-[260px] overflow-hidden">
                  <img
                    src={event.bannerImage?.url}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white">
                  <span className="text-[10px] tracking-widest bg-white/20 px-2 py-1 rounded-full">
                    {new Date(event.date).toLocaleDateString()}
                  </span>

                  <h3 className="mt-3 text-base sm:text-lg font-semibold max-w-[220px] transition-all duration-300 group-hover:-translate-y-1">
                    {event.title}
                  </h3>

                  <div className="mt-3 h-[2px] w-0 bg-[var(--palms-green)] transition-all duration-300 group-hover:w-12" />
                </div>

              </motion.div>
            ))
          )}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/events")}
className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-[var(--palms-blue)] text-[var(--palms-blue)] hover:bg-[var(--palms-blue)] hover:text-white transition duration-300"          >
            Explore All Programmes
          </button>
        </div>

      </div>
    </section>
  );
};

export default LandingEventsSection;