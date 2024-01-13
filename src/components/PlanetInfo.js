import React from "react";
import arrow from "../assets/arrow.svg";
import {motion} from "framer-motion";
import { planetVariants2 } from "../Motion";

const PlanetInfo = (props) => {
  return (
    <motion.div className="w-full lg:h-[250px] relative z-50 flex-between flex-col lg:flex-row" variants={planetVariants2}>
      <div className="w-full lg:w-[270px] h-[250px] rounded-3xl overflow-hidden relative">
        <img
          src={props.imgUrl}
          alt="planetimg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-[994px] flex-between lg:pl-[46px] xl:pl-[78px] py-6">
        <div className="lg:w-[70%] text-start">
          <h2 className="text-[26px] lg:text-3xl mb-4">{props.heading}</h2>
          <p className="text-light-grey lg:text-lg">{props.para}</p>
        </div>
        <div className="hidden lg:block border border-white rounded-full py-8 px-7" >
          <img src={arrow} alt="arrowimg" className="w-[42px]"/>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanetInfo;
