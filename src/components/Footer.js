import React from "react";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import { motion } from "framer-motion";
import { footerVariants } from "../Motion";

const Footer = () => {
  return (
    <motion.div
      className="container z-50 flex-col text-start"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="footer-gradient"></div>
      <div className="flex-between w-full pb-4">
        <h1 className="headingText">Enter The Metaverse</h1>
        <button className="bg-blue-800 px-8 py-4 rounded-4xl">
          Enter Metaverse
        </button>
      </div>

      <div className="flex-between w-full  border border-x-0 border-b-0 border-t-white border-opacity-10  pt-8">
        <p className="text-xl font-bold">METAVERSE</p>
        <p className="text-base text-grey-700">
          Copyright &copy; 2024 Metaverse. All rights reserved.
        </p>
        <div className="flex gap-4">
          <img src={twitter} alt="twitter.png" />
          <img src={linkedin} alt="linkedin.png" />
          <img src={instagram} alt="instagram.png" />
          <img src={facebook} alt="facebook.png" />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
