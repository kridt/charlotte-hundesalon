import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth, database } from "../firebase";

export default function Admin() {
  const [showHide, setShowHide] = useState(false);
  const history = useNavigate();

  const { currentUser, login } = useAuth();

  console.log(currentUser);

  async function logIndForm(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      database
        .collection("logins")
        .add({
          user: email,
          time: new Date(),
        })
        .then(() => {
          history("/dashboard");
        });
    } catch (error) {}

    console.log(email, password);
  }

  console.log(auth.currentUser);

  return (
    <div>
      <h1>Admin</h1>

      <form onSubmit={(e) => logIndForm(e)}>
        <div>
          <label htmlFor="email">Din email:</label>
          <input type="email" name="email" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="password">Din adgangskode:</label>
          <input type={showHide ? "text" : "password"} name="password" />
          <div>
            <label htmlFor="show">vis</label>
            <input type="checkbox" onClick={() => setShowHide(!showHide)} />
          </div>
        </div>

        <input type="submit" value="Log ind" />
      </form>
    </div>
  );
}
