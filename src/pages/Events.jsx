import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";
import EventCard from "../Components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <section className="bg-[#f4f6f9] min-h-screen pb-32">

      {/* PREMIUM HERO */}
      <div className="relative bg-[var(--palms-blue)] text-white py-36 overflow-hidden">

        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold leading-tight"
          >
            Upcoming Programmes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-white/70 text-lg max-w-[620px]"
          >
            Leadership and professional development programmes crafted
            to shape clarity, confidence and sustainable growth.
          </motion.p>
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-14"
        >
          {events.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Events;