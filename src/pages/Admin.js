import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Admin() {
  const [showHide, setShowHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  function logIndForm(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    auth.signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data);
      setLoading(false);
      history("/dashboard");
    });
    setLoading(false);

    console.log(email, password);
  }
  console.log(loading);
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
