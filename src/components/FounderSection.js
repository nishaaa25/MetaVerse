import React from "react";
import planet from "../assets/planet-09.png";
import stamp from "../assets/stamp.png";
import { motion } from "framer-motion";
import {
  founderIMgVariants,
  founderTextVariants,
  stampVariants,
} from "../Motion";

const FounderSection = () => {
  return (
    <motion.div className="container gap-6" initial="hidden" whileInView="visible">
      <motion.div
        className="relative lg:w-[370px] lg:h-[610px] border border-white border-opacity-40 rounded-3xl text-start p-4 lg:p-8 flex flex-col justify-end "
        variants={founderTextVariants}
      >
        <div className="feedback-gradient" />
        <h2 className="text-2xl font-bold">Samantha</h2>
        <p className="lg:text-md mb-6">Founder MetaVerse</p>
        <p className="text-md lg:text-xl leading-[40px] lg:leading-[44px]">
          "With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything"
        </p>
      </motion.div>
      <motion.div
        className="relative lg:w-[664px] xl:w-[886px] lg:h-[610px] rounded-3xl overflow-hidden"
        variants={founderIMgVariants}
      >
        <img
          src={planet}
          alt="planetimg"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.img
        src={stamp}
        alt="stampimg"
        className="hidden lg:block absolute w-[160px] left-[24%] top-[12%]"
        variants={stampVariants}
      />
    </motion.div>
  );
};

export default FounderSection;
