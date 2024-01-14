import React, { useState, useEffect } from "react";
import PlanetSections from "../Components/PlanetSections";
import axios from "axios";

const Mars = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/4",
          {
            headers: {
              "X-RapidAPI-Key":
                "12a5a4f51amshf4531d1240f1466p1c5ea6jsndb3000e4ec7a",
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
    <section className="Mars" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Mars;
