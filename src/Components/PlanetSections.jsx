import React from "react";

const PlanetSections = ({ h1, p1, a }) => {
  return (
    <>
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="text-center black-back">
          <h1 style={{ color: "white" }}>{h1}</h1>
          <p style={{ color: "white" }}>{p1}</p>
          <a href={a}>More Info</a>
        </div>
      </div>
    </>
  );
};

export default PlanetSections;
