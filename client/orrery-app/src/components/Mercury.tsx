import React from "react";
import mercuryImage from "../assets/mercurio.png";
import PlanetInfoCard from "./PlanetInfoCard";

const Mercury: React.FC = () => {
  return (
    <PlanetInfoCard
      planet="Mercury"
      planetCategorie="Terrestrial"
      planetDescription="Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets."
      earthYears={0.24}
      distanceFromSun={0.39}
      namesake="Messenger of the Roman gods"
      moons={0}
      image={mercuryImage}
    />
  );
};

export default Mercury;
