import React from "react";

export default function Spinner() {
  return (
    <div
      className="d-flex justify-content-center middle"
      style={{ height: "100vh" }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
