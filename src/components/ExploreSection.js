import React, { useState } from "react";
import planet1 from "../assets/planet-01.png";
import planet2 from "../assets/planet-02.png";
import planet3 from "../assets/planet-03.png";
import planet4 from "../assets/planet-04.png";
import planet5 from "../assets/planet-05.png";
import headset from "../assets/headset.svg";
import Tagline from "./Tagline";
import { motion } from "framer-motion";
import { planetVariants, headingTextVariants, staggerVariants } from "../Motion";

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
    <motion.div
      className="container flex-col"
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Tagline text="| The World" />
      <motion.h1 className="headingText lg:w-8/12" variants={headingTextVariants}>
        Choose the world you want to explore
      </motion.h1>
      <div className="flex-between flex-col lg:flex-row w-full gap-4 my-[50px]">
        {images.map((img, index) => {
          return (
            <motion.div
              className={`planetcover ${active === index ? "active" : ""}`}
              key={img.imgUrl}
              variants={planetVariants}
            >
              <img
                src={img.imgUrl}
                alt="planetimg"
                className="planetimg"
                onClick={() => {
                  handleClick(index);
                }}
              />
              {active === index ? (
                <div className="w-full p-10 absolute bg-black bg-opacity-[50%] z-50 bottom-0 left-0 text-start">
                  <div className="glassmorphism inline-block py-4 px-3 mb-2 rounded-2xl">
                    <img src={headset} alt="headset" width={32} />
                  </div>
                  <p className="text-base mb-3">ENTER METAVERSE</p>
                  <p className="text-2xl font-bold">{img.name}</p>
                </div>
              ) : (
                <p className="text-sm lg:text-[26px] text-start font-bold absolute top-2 lg:bottom-20 left-10 z-50 transform lg:-rotate-90">
                  {img.name}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExploreSection;
