import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://palms-backend-bwad.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      // Save token
      localStorage.setItem("adminToken", data.token);

      // Redirect to dashboard
      navigate("/admin/dashboard");

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-[var(--palms-blue)] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl">

        <h2 className="text-3xl font-semibold text-center mb-8 text-[var(--palms-blue)]">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--palms-green)] text-white py-3 rounded-xl hover:scale-105 transition"
          >
            Login
          </button>

        </form>

      </div>
    </section>
  );
};

export default AdminLogin;