import React from "react";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: "-20px", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.7,
      type: "spring",
    },
  },
};
const Navbar = () => {
  return (
    <motion.div
      className="w-full relative pt-6 pb-8"
      variants={navVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="w-full h-full absolute top-0 left-[-50%] gradient-01 z-0"></div>
      <div className="flex-between relative z-50">
        <img src={search} alt="searchicon" width={24} />
        <div>
          <p className="text-xl font-bold">METAVERSUS</p>
        </div>
        <img src={menu} alt="menuicon" width={24} />
      </div>
    </motion.div>
  );
};

export default Navbar;
