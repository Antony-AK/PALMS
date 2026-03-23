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
    API.get(`/events/${slug}`).then((res) => setEvent(res.data));
  }, [slug]);

  // ⏳ COUNTDOWN
  useEffect(() => {
    if (!event?.date) return;

    const interval = setInterval(() => {
      const diff = new Date(event.date) - new Date();

      if (diff <= 0) return clearInterval(interval);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) return <div className="py-40 text-center">Loading...</div>;

  const seatsLeft = event.seatsAvailable - event.seatsBooked;

  const formatDate = (date) => {
    if (!date) return "";

    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="bg-[#f8fafc] min-h-screen pb-32">

      {/* ================= HERO ================= */}
      <div className="relative h-[100vh] overflow-hidden">

        <img
          src={event.bannerImage?.url}
          className="w-full h-full object-cover scale-110"
          alt=""
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* content */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {event.title}
            </h1>

            <p className="mt-6 text-white/80 text-lg">
              {event.venue} · {new Date(event.date).toDateString()} · {event.time}
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= FLOATING INFO ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <InfoCard label="Speaker" value={event.speaker} />
          <InfoCard label="Seats Left" value={seatsLeft} />
          <InfoCard label="Deadline" value={formatDate(event.deadline)} />
          <InfoCard label="Price" value={`₹${event.price}`} />

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-semibold text-slate-900">
            About the Programme
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {[
            "Interactive learning sessions",
            "Real-world case discussions",
            "Networking opportunities",
            "Practical frameworks & tools",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ================= COUNTDOWN ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h3 className="text-xl text-slate-500 mb-6 uppercase tracking-wide">
          Event Starts In
        </h3>

        <div className="grid grid-cols-4 gap-6 text-center">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Sec" />
        </div>
      </div>

      {/* ================= STICKY BOOKING ================= */}
      <div className="fixed bottom-6 right-6 md:top-28 md:bottom-auto md:right-10 w-[320px] z-50">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">

          <h3 className="text-3xl font-bold text-slate-900">
            ₹{event.price}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {seatsLeft} seats left
          </p>

          <button
            onClick={() => navigate(`/events/${slug}/register`)}
            disabled={seatsLeft <= 0}
            className="mt-6 w-full bg-[var(--palms-blue)] text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            {seatsLeft > 0 ? "Register Now" : "Closed"}
          </button>

        </div>
      </div>

      {/* ================= CTA ================= */}
      {/* <section className="mt-32 py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">

        <h2 className="text-5xl font-semibold max-w-3xl mx-auto leading-tight">
          Let’s create meaningful impact together.
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="mt-10 bg-white text-black px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Talk to PALMS
        </button>

      </section> */}

    </section>
  );
};

export default EventDetails;

/* ================= COMPONENTS ================= */

const InfoCard = ({ label, value }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
    <p className="text-xs text-gray-400 uppercase">{label}</p>
    <p className="text-lg font-semibold mt-2 text-gray-900">{value}</p>
  </div>
);

const TimeBox = ({ value = 0, label }) => (
  <div className="bg-white rounded-xl py-6 shadow-md">
    <p className="text-2xl font-bold text-slate-900">{value ?? 0}</p>
    <p className="text-xs text-slate-500 uppercase">{label}</p>
  </div>
);