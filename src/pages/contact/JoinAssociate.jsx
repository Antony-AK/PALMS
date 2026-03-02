import React from "react";

const JoinAssociate = () => {
  const inputStyle =
    "w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition";

  return (
    <section className="min-h-screen bg-[#f5f7fb] px-6 py-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-14">

        <h1 className="text-4xl font-semibold text-[var(--palms-blue)] mb-6">
          Business Associate Application
        </h1>

        <p className="text-[var(--palms-grey)] mb-12 leading-relaxed">
          Professionals with strong networks across industries,
          business communities, and academic institutions may collaborate
          on a structured commission model.
        </p>

        <form className="grid md:grid-cols-2 gap-8">

          <input placeholder="Name *" required className={inputStyle} />
          <input placeholder="Mobile *" required className={inputStyle} />
          <input type="email" placeholder="Email *" required className={inputStyle} />
          <input placeholder="City / Town" className={inputStyle} />

          <div className="md:col-span-2 space-y-4 text-sm text-[var(--palms-grey)]">

            <p className="font-medium text-[var(--palms-blue)]">
              Areas of Interest
            </p>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Promote Distant Online Training Membership Plan
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Promote Special Training Programmes
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Get Advertisements for PALMS PLUS Magazine
            </label>

          </div>

          <button className="md:col-span-2 mt-6 bg-[var(--palms-blue)] text-white py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Submit Application
          </button>

        </form>

      </div>
    </section>
  );
};

export default JoinAssociate;