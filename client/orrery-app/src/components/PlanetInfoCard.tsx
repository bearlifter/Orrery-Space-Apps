import { X } from "lucide-react";
import React from "react";

interface PlanetInfoCardProps {
  planet: string;
  planetCategorie: string;
  planetDescription: string;
  earthYears: number;
  distanceFromSun: number;
  namesake: string;
  moons: number;
  image: string;
}

const PlanetInfoCard: React.FC<PlanetInfoCardProps> = ({
  planet,
  planetCategorie,
  planetDescription,
  earthYears,
  distanceFromSun,
  namesake,
  moons,
  image,
}) => {
  return (
    <div className="text-white bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-0 p-4 shadow-lg">
      <div className="relative">
        <X className="absolute top-0 right-0 w-5 h-5 cursor-pointer" />
        <div className="mb-3">
          <h1 className="text-2xl font-bold">{planet}</h1>
          <p className="text-xs text-gray-400">{planetCategorie}</p>
        </div>
        <img
          className="w-full max-h-48 object-contain mb-3"
          src={image}
          alt={`Image of ${planet}`}
        />
        <p className="mb-4 text-xs">{planetDescription}</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <div className="border-b border-gray-700 pb-1 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-amber-500">
                {earthYears}
              </span>
              <span className="text-xs uppercase">Earth Years</span>
            </div>
            <p className="text-xs uppercase mt-1">Length Of Year</p>
          </div>
          <div>
            <div className="border-b border-gray-700 pb-1 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-amber-500">
                {distanceFromSun}
              </span>
              <span className="text-xs uppercase">AU</span>
            </div>
            <p className="text-xs uppercase mt-1">Distance From Sun</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col justify-between">
            <div className="border-b border-gray-700 pb-1 h-full flex items-end">
              <span className="text-xs">{namesake}</span>
            </div>
            <p className="text-xs uppercase mt-1">Namesake</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="border-b border-gray-700 pb-1 h-full flex items-end justify-between">
              <span className="text-2xl font-bold text-amber-500">{moons}</span>
              <span className="text-xl">🌙</span>
            </div>
            <p className="text-xs uppercase mt-1">Moons</p>
          </div>
        </div>
      </div>
      <p className="text-xs mt-4">
        AU: Astronomical Unit, the distance between the Earth and the Sun.
      </p>
    </div>
  );
};

export default PlanetInfoCard;
