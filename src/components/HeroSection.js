import React from "react";
import { motion } from "framer-motion";
import cover from "../assets/cover.png";
import stamp from "../assets/stamp.png";
import { containerVariants,textVariants,imgVariants } from "../Motion";

const HeroSection = () => {
  return (
    <motion.div
      className="container w-full flex-center flex-col "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.p
        className="text-3xl md:text-[100px] xl:text-xxl font-bold leading-[64px] md:leading-[116px] lg:leading-[160px] mx-auto relative z-40 lg:pl-16"
        variants={textVariants}
      >
        METAVERSE <br />
        MA
        <span className="inline-block dText md:w-[220px] md:h-[110px] md:border-[20px] border-8"></span>
        NESS
      </motion.p>
      <motion.div
        className="w-full h-[370px] md:h-[565px] relative"
        variants={imgVariants}
      >
        <div className="w-full h-[300px] rounded-tl-[140px] bg-black absolute top-[-50px] left-0 z-0 hero-gradient"></div>
        <img
          src={cover}
          alt="coverimg"
          className="w-full h-[340px] md:h-[500px] object-cover rounded-tl-[140px] relative z-40 top-[-18px]"
        />
        <img
          src={stamp}
          alt="stampimg"
          className="w-[100px] md:w-[155px] absolute bottom-0 right-[40px] z-50"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
