import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../../services/api";

const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    API.get(`/events/${slug}`).then(res => setEvent(res.data));
  }, [slug]);

  // COUNTDOWN TIMER
  useEffect(() => {
    if (!event?.date) return;

    const interval = setInterval(() => {
      const difference = new Date(event.date) - new Date();
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) return <div className="py-40 text-center">Loading...</div>;

  const seatsLeft = event.seatsAvailable - event.seatsBooked;

  return (
    <section className="bg-[#f8fafc] min-h-screen pb-32">

      {/* HERO */}
      <div className="relative h-[860px] overflow-hidden">

        {/* Background Image */}
        <img
          src={event.bannerImage?.url}
          className="w-full h-full object-cover scale-105"
          alt=""
        />

        {/* Dark Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" /> */}

        {/* Soft Blur Layer */}
        {/* <div className="absolute inset-0 backdrop-blur-[2px]" /> */}

        {/* Content Container */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">

          <div className="bg-[var(--palms-blue)]/40 backdrop-blur-md rounded-3xl p-10 border border-white/10">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-semibold text-white leading-tight"
            >
              {event.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-white/80 text-lg"
            >
              {event.venue} · {new Date(event.date).toDateString()} · {event.time}
            </motion.p>

          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-20 mt-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-14"
        >

          {/* ABOUT */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              About the Programme
            </h2>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500 rounded-full" />
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              {event.description}
            </p>
          </div>

          {/* EVENT INFO GRID */}
          <div className="grid grid-cols-2 gap-10 border-t pt-10">

            <Info label="Speaker" value={event.speaker} />
            <Info label="Registration Deadline" value={new Date(event.deadline).toDateString()} />
            <Info label="Total Seats" value={event.seatsAvailable} />
            <Info label="Seats Left" value={seatsLeft} />

          </div>

        </motion.div>

        {/* RIGHT SIDE PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10 sticky top-28 h-fit space-y-8 border border-slate-100"
        >

          {/* PRICE */}
          <div>
            <p className="text-sm text-slate-400 uppercase tracking-wider">
              Registration Fee
            </p>
            <h3 className="text-4xl font-semibold text-slate-900 mt-2">
              ₹{event.price}
            </h3>
          </div>

          {/* COUNTDOWN */}
          <div className="space-y-4">
            <p className="text-sm text-slate-400 uppercase tracking-wider">
              Event Starts In
            </p>

            <div className="grid grid-cols-4 gap-3 text-center">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Min" />
              <TimeBox value={timeLeft.seconds} label="Sec" />
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate(`/events/${slug}/register`)}
            disabled={seatsLeft <= 0}
            className="w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-slate-800 transition font-medium"
          >
            {seatsLeft > 0 ? "Register Now" : "Registration Closed"}
          </button>

          <p className="text-xs text-slate-400 text-center">
            {seatsLeft} seats remaining
          </p>

        </motion.div>

      </div>
    </section>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-slate-400 uppercase tracking-wider">{label}</p>
    <p className="mt-2 text-lg font-medium text-slate-900">{value}</p>
  </div>
);

const TimeBox = ({ value = 0, label }) => (
  <div className="bg-slate-100 rounded-xl py-4">
    <p className="text-xl font-semibold text-slate-900">
      {value ?? 0}
    </p>
    <p className="text-xs text-slate-500 uppercase">{label}</p>
  </div>
);

export default EventDetails;