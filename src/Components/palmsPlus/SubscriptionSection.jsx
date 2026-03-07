import React, { useState, useEffect } from "react";

const API = "http://localhost:5000/api/subscribers";

const SubscriptionSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    subscriptionType: "free",
    agree: false
  });



  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      return setMessage("Please accept mailing list consent.");
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: formData.organisation,
          subscriptionType: formData.subscriptionType
        })
      });

      const data = await res.json();

      setMessage(data.message);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          organisation: "",
          subscriptionType: "free",
          agree: false
        });
      }

    } catch (error) {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
<section id="subscribe-section" className="py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-8 bg-white">     
<div className="max-w-3xl mx-auto bg-[#f8f9fb] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-md">

        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--palms-blue)] text-center">
          Subscribe to PALMS PLUS
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-10 space-y-5 sm:space-y-6">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
className="w-full p-3 sm:p-4 border border-[var(--palms-blue)]/30 rounded-lg text-sm sm:text-base"          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
className="w-full p-3 sm:p-4 border border-[var(--palms-blue)]/30 rounded-lg text-sm sm:text-base"          />

          <input
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Organisation (Optional)"
className="w-full p-3 sm:p-4 border border-[var(--palms-blue)]/30 rounded-lg text-sm sm:text-base"          />

<div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base">            <label>
              <input
                type="radio"
                name="subscriptionType"
                value="free"
                checked={formData.subscriptionType === "free"}
                onChange={handleChange}
              />
              Free Newsletter
            </label>

            <label>
              <input
                type="radio"
                name="subscriptionType"
                value="paid"
                checked={formData.subscriptionType === "paid"}
                onChange={handleChange}
              />
              Paid E-Subscription
            </label>
          </div>

<div className="text-sm sm:text-base">
              <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              Add me to PALMS mailing list
            </label>
          </div>

          <button
            type="submit"
className="btn-primary w-full py-3 sm:py-4 text-sm sm:text-base"          >
            {loading ? "Subscribing..." : "Subscribe to PALMS PLUS"}
          </button>

          {message && (
            <p className="text-center text-xs sm:text-sm mt-4 text-green-600">
              {message}
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default SubscriptionSection;