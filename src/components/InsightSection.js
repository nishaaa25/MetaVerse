import React from "react";
import planet7 from "../assets/planet-07.png";
import planet6 from "../assets/planet-06.png";
import planet8 from "../assets/planet-08.png";
import PlanetInfo from "./PlanetInfo";
import {motion} from "framer-motion";
import Tagline from "./Tagline";
import { headingTextVariants, staggerVariants } from "../Motion";

const InsightSection = () => {
  return (
    <motion.div className="container flex-col" variants={staggerVariants} initial="hidden" whileInView="visible">
      <div className="gradient-04"></div>
      <Tagline text="| Insight"/>
      <motion.h1 className="headingText mb-12" variants={headingTextVariants}>Insight about metaverse</motion.h1>
      <div className="flex flex-col gap-8">
        <PlanetInfo
          imgUrl={planet7}
          para="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
          heading="The launch of the Metaverse makes Elon musk ketar-ketir"
        />
        <PlanetInfo
          imgUrl={planet8}
          para="Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"
          heading="7 tips to easily master the madness of the Metaverse"
        />
        <PlanetInfo
          imgUrl={planet6}
          para="Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem"
          heading="With one platform you can explore the whole world virtually "
        />
      </div>
    </motion.div>
  );
};

export default InsightSection;
