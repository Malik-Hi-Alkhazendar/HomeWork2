import React, { useState, useEffect } from "react";
import PlanetSections from "../Components/PlanetSections";
import axios from "axios";

const Earth = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/3",
          {
            headers: {
              "X-RapidAPI-Key":
                "3d4489b28amshde476e1b117a208p10201djsn008b7607bd30",
              "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const h1 = data ? data.name : "";
  // Check if data is available before trying to access its properties
  const p1 = data ? data.description : "Loading...";

  const a = data ? data.wikiLink : "";

  return (
    <section className="Earth" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Earth;
