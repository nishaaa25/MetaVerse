import React from "react";
import whatsnew from "../assets/whats-new.png";
import headset from "../assets/headset.svg";
import varpano from "../assets/vrpano.svg";
import {motion} from "framer-motion";
import { sideTextVariants2, whatsnewPlanetImgVariants } from "../Motion";
import Tagline from "./Tagline";

const WhatsNewSection = () => {
  return (
    <motion.div className="container text-start" initial="hidden" whileInView="visible">
      <motion.div variants={sideTextVariants2} className="w-7/12 py-9 h-full relative z-40">
        <Tagline text="| What'S New"/>
        <h1 className="headingText pb-8">What's new about Metaversus?</h1>
        <div className="flex-between">
          <div className="flex flex-col justify-start items-start">
            <div className="bg-blue-400 py-5 px-4 rounded-[20px] mb-[26px]">
              <img
                src={headset}
                alt="getstartedimg"
                className="w-[36px] relative z-50"
              />
            </div>
            <p className="text-xl font-bold mb-[16px]">Title A new world</p>
            <p className="text-grey-700 w-9/12 text-md  leading-[32.4px]">
              We have the latest update with new world for you to try never mind
            </p>
          </div>
          <div className="flex flex-col justify-start items-start ">
            <div className="bg-blue-400 py-5 px-4 rounded-[20px] mb-[26px]">
              <img
                src={varpano}
                alt="getstartedimg"
                className="w-[36px] relative z-50"
              />
            </div>
            <p className="text-xl font-bold pb-[16px]">Title More realistic</p>
            <p className="text-grey-700 text-md w-9/12 leading-[32.4px]">
              In the latest update, your eyes are narrow, making the world more
              realistic than ever
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-5/12" variants={whatsnewPlanetImgVariants}>
        <img
          src={whatsnew}
          alt="getstartedimg"
          className="w-[100%] relative z-50"
        />
      </motion.div>
    </motion.div>
  );
};

export default WhatsNewSection;
