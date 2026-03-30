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

      {/* ================= HERO (FIXED 🔥) ================= */}
   <div className="relative overflow-hidden bg-[#0f172a] py-28 px-6">

  {/* 🔥 BACKGROUND GRADIENT BLOBS */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[var(--palms-green)]/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* 🔥 LEFT → CONTENT */}
    <div>

      <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
        {event.title}
      </h1>

      <p className="mt-6 text-white/70 text-lg">
        {event.venue} · {formatDate(event.date)} · {event.time}
      </p>

      {/* CTA */}
      <div className="mt-8 flex gap-4 flex-wrap">

        <button
          onClick={() => navigate(`/events/${slug}/register`)}
          className="px-8 py-4 bg-[var(--palms-green)] text-white rounded-xl font-medium hover:scale-105 transition"
        >
          Register Now
        </button>

        <div className="px-6 py-4 bg-white/10 text-white rounded-xl backdrop-blur">
          ₹{event.price}
        </div>

      </div>

    </div>

    {/* 🔥 RIGHT → FLOATING POSTER */}
    <div className="relative flex justify-center md:justify-end">

      {/* Glow */}
      <div className="absolute inset-0 blur-[100px] bg-[var(--palms-green)]/30 rounded-full" />

      {/* Poster */}
      <img
        src={event.bannerImage?.url}
        alt="Event Poster"
        className="
          relative
          w-[460px] sm:w-[350px] md:w-[340px]
          object-contain
          rounded-2xl
          shadow-[0_40px_100px_rgba(0,0,0,0.6)]
          rotate-[-2deg]
          hover:rotate-0 hover:scale-105
          transition duration-500
        "
      />

      {/* Floating tag */}
      <div className="absolute -top-4 -right-4 bg-[var(--palms-green)] text-white px-4 py-2 text-xs rounded-full shadow-lg">
        Live Event
      </div>

    </div>

  </div>

</div>
      {/* ================= INFO ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

        <InfoCard label="Speaker" value={event.speaker} />
        <InfoCard label="Seats Left" value={seatsLeft} />
        <InfoCard label="Deadline" value={formatDate(event.deadline)} />
        <InfoCard label="Price" value={`₹${event.price}`} />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-semibold text-slate-900">
            About the Programme
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="space-y-5">
          {[
            "Interactive learning sessions",
            "Real-world case discussions",
            "Networking opportunities",
            "Practical frameworks & tools",
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-3 h-3 bg-[var(--palms-green)] rounded-full mt-2" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ================= COUNTDOWN ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-20">

        <h3 className="text-xl text-slate-500 mb-6 uppercase">
          Event Starts In
        </h3>

        <div className="grid grid-cols-4 gap-6 text-center">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Sec" />
        </div>

      </div>

      {/* ================= STICKY CARD ================= */}
      <div className="fixed bottom-6 right-6 md:top-28 md:right-10 w-[300px] z-50">

        <div className="bg-white rounded-2xl p-6 shadow-2xl">

          <h3 className="text-2xl font-bold text-slate-900">
            ₹{event.price}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {seatsLeft} seats left
          </p>

          <button
            onClick={() => navigate(`/events/${slug}/register`)}
            className="mt-4 w-full bg-[var(--palms-blue)] text-white py-3 rounded-xl"
          >
            Register Now
          </button>

        </div>

      </div>

    </section>
  );
};

export default EventDetails;


/* COMPONENTS */

const InfoCard = ({ label, value }) => (
  <div className="bg-white rounded-xl p-5 shadow border">
    <p className="text-xs text-gray-400 uppercase">{label}</p>
    <p className="text-lg font-semibold mt-2">{value}</p>
  </div>
);

const TimeBox = ({ value = 0, label }) => (
  <div className="bg-white rounded-xl py-5 shadow">
    <p className="text-xl font-bold">{value ?? 0}</p>
    <p className="text-xs text-gray-500 uppercase">{label}</p>
  </div>
);