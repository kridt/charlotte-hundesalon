import React from "react";

export default function Paws() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          scale: "60%",
          rotate: "-30deg",

          paddingTop: "2em",
        }}
      >
        <img
          alt="paw"
          src="https://img.icons8.com/external-those-icons-fill-those-icons/96/000000/external-Paw-pets-and-accessories-those-icons-fill-those-icons.png"
        />
      </div>
      <div
        style={{
          rotate: "30deg",
          position: "relative",
          right: "20px",
        }}
      >
        <img
          alt="paw"
          src="https://img.icons8.com/external-those-icons-fill-those-icons/96/000000/external-Paw-pets-and-accessories-those-icons-fill-those-icons.png"
        />
      </div>
    </div>
  );
}
