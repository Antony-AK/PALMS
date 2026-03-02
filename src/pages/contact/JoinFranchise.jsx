import React from "react";

const JoinFranchise = () => {
  const inputStyle =
    "w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition";

  return (
    <section className="min-h-screen bg-[#f5f7fb] px-6 py-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-14">

        <h1 className="text-4xl font-semibold text-[var(--palms-blue)] mb-6">
          Franchise Partnership Application
        </h1>

        <p className="text-[var(--palms-grey)] mb-12 leading-relaxed">
          PALMS is expanding its training operations across Tamil Nadu.
          Interested partners may submit the application below.
        </p>

        <form className="grid md:grid-cols-2 gap-8">

          <input placeholder="Name *" required className={inputStyle} />
          <input placeholder="Occupation" className={inputStyle} />
          <input placeholder="Address" className={`${inputStyle} md:col-span-2`} />
          <input placeholder="Desired Business Location (City)" className={inputStyle} />
          <input placeholder="Preferred Centre Location" className={inputStyle} />
          <input type="email" placeholder="Email *" required className={inputStyle} />
          <input placeholder="Contact Number *" required className={inputStyle} />
          <input placeholder="Convenient Time for Call" className={inputStyle} />
          <input placeholder="Referred By / Source" className={inputStyle} />
          <input placeholder="Liquid Capital Available" className={inputStyle} />
          <input placeholder="Time Frame to Start Business" className={inputStyle} />

          <button className="md:col-span-2 mt-6 bg-[var(--palms-blue)] text-white py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
};

export default JoinFranchise;