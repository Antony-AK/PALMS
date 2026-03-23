import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../../services/api";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        await API.get("/admin/verify");
        setIsAuth(true);
      } catch (err) {
        localStorage.removeItem("adminToken");
        setIsAuth(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuth === null) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;