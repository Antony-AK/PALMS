import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventCard = ({ event, index }) => {
  const navigate = useNavigate();
  const seatsLeft = event.seatsAvailable - event.seatsBooked;
  const fillPercent =
    (event.seatsBooked / event.seatsAvailable) * 100 || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => navigate(`/events/${event.slug}`)}
      className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer
                 border border-slate-100 shadow-sm hover:shadow-2xl
                 transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative bg-slate-100 flex justify-center items-center p-4">

  <img
    src={event.bannerImage?.url}
    alt={event.title}
    className="
      w-full
      max-w-[260px]
      h-auto
      object-contain
      rounded-xl
      transition duration-500 group-hover:scale-105
    "
  />

  {/* DATE TAG */}
  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md
                  px-3 py-1.5 rounded-lg text-xs font-medium shadow">
    {new Date(event.date).toDateString()}
  </div>

</div>

      {/* CONTENT */}
      <div className="p-8 space-y-5">

        <h3 className="text-2xl font-semibold text-slate-900 leading-snug">
          {event.title}
        </h3>

        <div className="flex justify-between text-sm text-slate-500">
          <span className="font-medium text-slate-700">
            ₹{event.price}
          </span>
          <span>{seatsLeft} seats left</span>
        </div>

        {/* Modern Progress */}
        <div className="w-full h-[6px] bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 rounded-full transition-all duration-700"
            style={{ width: `${fillPercent}%` }}
          />
        </div>

        <div className="pt-3 text-sm font-medium text-slate-700 group-hover:text-black transition">
          View Details →
        </div>

      </div>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-slate-200 transition duration-500" />
    </motion.div>
  );
};

export default EventCard;