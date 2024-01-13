import React from "react";
import { motion } from "framer-motion";
import cover from "../assets/cover.png";
import stamp from "../assets/stamp.png";
import { containerVariants,textVariants,imgVariants } from "../Motion";

const HeroSection = () => {
  return (
    <motion.div
      className="container flex-center flex-col pl-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.p
        className="text-xxl font-bold leading-[160px] mx-auto relative z-40 "
        variants={textVariants}
      >
        METAVERSE <br />
        MA
        <span className="inline-block dText"></span>
        NESS
      </motion.p>
      <motion.div
        className="w-[1280px] h-[565px] relative"
        variants={imgVariants}
      >
        <div className="w-full h-[300px] rounded-tl-[140px] bg-black absolute top-[-50px] left-0 z-0 hero-gradient"></div>
        <img
          src={cover}
          alt="coverimg"
          className="w-full h-[500px] object-cover rounded-tl-[140px] relative z-40 top-[-18px]"
        />
        <img
          src={stamp}
          alt="stampimg"
          width={155}
          className="absolute bottom-0 right-[40px] z-50"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
