import React from "react";
import getstarted from "../assets/get-started.png";
import Tagline from "./Tagline";
import {motion} from "framer-motion";
import { guidePlanetImgVariants, sideTextVariants } from "../Motion";

const GuideSection = () => {
  return (
    <motion.div className="container ml-12 text-start" initial="hidden" whileInView="visible" >
      <div className="gradient-04"></div>
      <motion.div variants={guidePlanetImgVariants}>
        <img
          src={getstarted}
          alt="getstartedimg"
          className="w-[86%] relative z-50"
        />
      </motion.div>
      <motion.div className="w-full h-full relative z-40" variants={sideTextVariants}>
        <Tagline text="| How Metaverse Works"/>
        <h1 className="headingText pb-8">Get started with just a few clicks</h1>
        <div className="flex flex-col gap-6">
          <div className="flex justify-start items-center gap-7">
            <div className="bg-blue-400 py-5 px-[22px] text-lg font-bold rounded-[20px] ">
              01
            </div>
            <p className="text-grey-700 text-md w-1/2 leading-[32.4px]">
              Find a world that suits you and you want to enter
            </p>
          </div>
          <div className="flex justify-start items-center gap-7">
            <div className="bg-blue-400 py-5 px-[22px] text-lg font-bold rounded-[20px]">
              02
            </div>
            <p className="text-grey-700 text-md w-1/2 leading-[32.4px]">
              Enter the world by reading god to be safe
            </p>
          </div>
          <div className="flex justify-start items-center gap-7">
            <div className="bg-blue-400 py-5 px-[22px] text-lg font-bold rounded-[20px]">
              03
            </div>
            <p className="text-grey-700 text-md w-1/2 leading-[32.4px]">
              No need to beat around the bush, just stay on the gas and have fun
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GuideSection;
