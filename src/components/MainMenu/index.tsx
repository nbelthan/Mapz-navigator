import React from "react";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export const MainMenu = () => {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://mapz.live/">
          <img src="/Mapzlogo.png" alt="logo" />
        </a>
        <h1>Mapz</h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <a href="https://mapz.live/mapz-waitlist/" className="button">
          Join Waitlist
        </a>
      </div>
    </div>
  );
};
