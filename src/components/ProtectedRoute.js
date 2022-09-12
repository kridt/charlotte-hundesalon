import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const user = auth?.currentUser;
  useEffect(() => {
    if (!user) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
