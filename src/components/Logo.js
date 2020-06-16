import React from "react";
import Brand from "../assets/images/logo.png";

export default function Logo() {
  return (
    <img
      src={Brand}
      alt="Kaikaya By The Sea"
      style={{ height: "7vh", maxWidth: "212px", maxHeight: "100px" }}
    />
  );
}
