import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const email = params.get("email");

  const API = "https://palms-backend-bwad.onrender.com";


  useEffect(() => {
    if (email) {
      axios.post(`${API}/api/unsubscribe`, { email });
    }
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md">

        <img
          src="/logo1.jpg"
          alt="PALMS"
          className="h-12 mx-auto mb-6"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Sorry to see you go!
        </h2>

        <p className="text-gray-600">
          You've successfully unsubscribed from our emails.
        </p>

      </div>
    </div>
  );
};

export default Unsubscribe;