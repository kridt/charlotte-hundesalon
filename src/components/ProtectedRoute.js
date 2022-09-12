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
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
