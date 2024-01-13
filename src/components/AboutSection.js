import React from "react";
import arrow from "../assets/arrow-down.svg";
import { motion } from "framer-motion";
import Tagline from "./Tagline";
import { containerVariants, AboutTextVariants } from "../Motion";

const AboutSection = () => {
  return (
    <motion.div
      className="container flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="w-full h-full gradient-02"></div>
      <div className="w-full h-full gradient-03"></div>
      <Tagline text="| About Metaverse" />
      <motion.div variants={AboutTextVariants}>
        <p
          className="text-light-grey text-2xl pb-6"
        >
          <span className="font-bold text-white">Metaverse</span> is a new thing
          in the future, where you can enjoy the virtual world by feeling like
          it's really real, you can feel what you feel in this metaverse world,
          because this is really the
          <span className="font-bold text-white">madness of the metaverse</span>
          of today, using only <span className="font-bold text-white">VR</span>
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let's
          <span className="font-bold text-white">explore</span> the madness of
          the metaverse by scrolling down
        </p>
        <img
          src={arrow}
          alt="arrowdownimg"
          width={18}
          className="m-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
