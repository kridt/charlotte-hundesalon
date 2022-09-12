import React from "react";
import { Link } from "react-router-dom";
import Paws from "./Paws";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <h2>logo</h2>
        </div>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          <div className="pawPart">
            <h1>Charlottes Hundesalon</h1>
            <div className="paws">
              <Paws />
            </div>
          </div>
        </Link>
        <ul>
          <li>
            <Link to={"/"}>Start</Link>
          </li>
          <li>
            <Link to={"/about"}>Om os</Link>
          </li>
          <li>
            <Link to={"/contact"}>Kontakt</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
