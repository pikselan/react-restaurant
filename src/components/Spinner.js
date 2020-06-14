import React from "react";

export default function Spinner() {
  return (
    <div
      class="d-flex justify-content-center middle"
      style={{ height: "100vh" }}
    >
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
