import React from "react";

const JoinTrainer = () => {
  const inputStyle =
    "w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[var(--palms-blue)] focus:ring-2 focus:ring-[var(--palms-blue)]/10 transition";

  return (
    <section className="min-h-screen bg-[#f5f7fb] px-6 py-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-14">

        <h1 className="text-4xl font-semibold text-[var(--palms-blue)] mb-6">
          Trainer Association Application
        </h1>

        <p className="text-[var(--palms-grey)] mb-12 leading-relaxed">
          We invite qualified training professionals to collaborate
          in delivering leadership and management development programmes.
        </p>

        <form className="grid md:grid-cols-2 gap-8">

          <input placeholder="Name *" required className={inputStyle} />
          <input placeholder="Qualification" className={inputStyle} />
          <input type="number" placeholder="Age" className={inputStyle} />

          <select className={inputStyle}>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input placeholder="Mobile *" required className={inputStyle} />
          <input placeholder="Whatsapp Number" className={inputStyle} />
          <input type="email" placeholder="Email *" required className={inputStyle} />
          <input placeholder="Town / City" className={inputStyle} />

          <input placeholder="Organisation Name (if any)" className={`${inputStyle} md:col-span-2`} />
          <input placeholder="Years of Training Experience" className={inputStyle} />
          <input placeholder="Languages You Can Speak" className={inputStyle} />
          <input placeholder="Topics Handled" className={`${inputStyle} md:col-span-2`} />
          <input placeholder="Expected Honorarium" className={inputStyle} />

          <div className="md:col-span-2 space-y-4 text-sm text-[var(--palms-grey)]">

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Have you conducted corporate training programmes?
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Comfortable with online programmes
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Willing to travel outstation
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

export default JoinTrainer;