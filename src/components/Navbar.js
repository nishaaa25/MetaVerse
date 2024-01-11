import React from "react";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: "-10vw" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 1,
      type: "spring",
    },
  },
};
const Navbar = () => {
  return (
    <div className="w-full relative pt-6 pb-8">
      <div className="w-full h-full absolute top-0 left-[-50%] gradient-01 z-0"></div>
      <motion.div
        className="flex-between relative z-50"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={search} alt="searchicon" width={24} />
        <div>
          <p className="text-xl font-bold">METAVERSUS</p>
        </div>
        <img src={menu} alt="menuicon" width={24} />
      </motion.div>
    </div>
  );
};

export default Navbar;
