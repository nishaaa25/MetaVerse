import React from "react";
import map from "../assets/map.png";
import people1 from "../assets/people-01.png";
import people2 from "../assets/people-02.png";
import people3 from "../assets/people-03.png";
import { motion } from "framer-motion";
import Tagline from "./Tagline";
import { headingTextVariants, mapVariants } from "../Motion";

const TrackSection = () => {
  return (
    <motion.div className="container flex-col" initial="hidden" whileInView="visible">
      <Tagline text="| People on the world" />
      <motion.h1
        className="headingText mb-[68px]"
        variants={headingTextVariants}
      >
        Track friends around you and invite them to play together in the same
        world
      </motion.h1>
      <motion.div className="relative w-full h-[58vh]" variants={mapVariants}>
        <img src={map} alt="mapimg" className="w-full h-full object-cover"/>
        <div className="p-2 bg-blue-600 absolute right-[7%] top-[70%] rounded-full">
          <img src={people1} alt="people1" width={60} />
        </div>
        <div className="p-2 bg-blue-600 absolute top-[10%] left-[6%] rounded-full">
          <img src={people2} alt="people2" width={60} />
        </div>
        <div className="p-2 bg-blue-600 absolute top-[50%] left-[45%] rounded-full">
          <img src={people3} alt="people3" width={60} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrackSection;
