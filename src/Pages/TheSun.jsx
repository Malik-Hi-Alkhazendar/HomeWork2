import React from "react";
import PlanetSections from "../Components/PlanetSections";

const TheSun = () => {
  const h1 = "The Sun";
  const p1 =
    "The Sun is the Solar System's star and by far its most massive component. Its large mass (332,900 Earth masses), which comprises 99.86% of all the mass in the Solar System, produces temperatures and densities in its core high enough to sustain nuclear fusion of hydrogen into helium. This releases an enormous amount of energy, mostly radiated into space as electromagnetic radiation peaking in visible light." +
    "Because the Sun fuses hydrogen into helium at its core, it is a main-sequence star. More specifically, it is a G2-type main-sequence star, where the type designation refers to its effective temperature. Hotter main-sequence stars are more luminous but shorter lived. The Sun's temperature is intermediate between that of the hottest stars and that of the coolest stars. Stars brighter and hotter than the Sun are rare, whereas substantially dimmer and cooler stars, known as red dwarfs, make up about 75% of the stars in the Milky Way." +
    'The Sun is a population I star; it has a higher abundance of elements heavier than hydrogen and helium ("metals" in astronomical parlance) than the older population II stars. Elements heavier than hydrogen and helium were formed in the cores of ancient and exploding stars, so the first generation of stars had to die before the universe could be enriched with these atoms. The oldest stars contain few metals, whereas stars born later have more. This higher metallicity is thought to have been crucial to the Sun\'s development of a planetary system because the planets form from the accretion of "metals".';
  const a = "https://en.wikipedia.org/wiki/Sun";
  return (
    <section className="sun" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default TheSun;
