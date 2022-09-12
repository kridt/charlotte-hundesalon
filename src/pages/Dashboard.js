import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Dashboard() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  function signOut() {
    auth.signOut();
    navigate("/admin");
  }

  return (
    <div>
      <h1>dashboard</h1>

      <div>
        <p>Du er logget ind med {user?.email}</p>
      </div>
      <button type="submit" onClick={() => signOut()}>
        Log ud
      </button>
    </div>
  );
}
