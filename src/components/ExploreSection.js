import React, { useState } from "react";
import planet1 from "../assets/planet-01.png";
import planet2 from "../assets/planet-02.png";
import planet3 from "../assets/planet-03.png";
import planet4 from "../assets/planet-04.png";
import planet5 from "../assets/planet-05.png";
import headset from "../assets/headset.svg";

const images = [
  {
    imgUrl: planet1,
    name: "The Hogwarts",
  },
  {
    imgUrl: planet2,
    name: "The Upside Down",
  },
  {
    imgUrl: planet3,
    name: "Kadirojo Parmai",
  },
  {
    imgUrl: planet4,
    name: "Paradise Island",
  },
  {
    imgUrl: planet5,
    name: "Hawkins Labs",
  },
];

const ExploreSection = () => {
  const [active, setActive] = useState(1);
  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="container flex-col">
      <p className="taglineText">| The World</p>
      <h1 className="headingText w-8/12">
        Choose the world you want to explore
      </h1>
      <div className="flex-between w-full my-[50px]">
        {images.map((img, index) => {
          return (
            <div
              className={`planetcover ${active === index ? "active" : ""}`}
              key={img.imgUrl}
            >
              <img
                src={img.imgUrl}
                alt="planetimg"
                className="planetimg"
                onClick={() => {
                  handleClick(index);
                }}
              />
              {active===index ? (
                <div className="w-full p-10 absolute bg-black bg-opacity-[50%] z-50 bottom-0 left-0 text-start">
                  <div className="glassmorphism inline-block py-4 px-3 mb-2 rounded-2xl"><img src={headset} alt="headset" width={32}/></div>
                  <p className="text-base mb-3">ENTER METAVERSE</p>
                  <p className="text-2xl font-bold">{img.name}</p>
                </div>
              ) : (
                <p className="text-[26px] text-start font-bold absolute bottom-20 left-0 z-50 transform -rotate-90">
                  {img.name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
