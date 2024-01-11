import React from "react";
import arrow from "../assets/arrow-down.svg"

const AboutSection = () => {
  return (
    <div className="container">
      <div className="w-full h-full gradient-02">
      </div>
      <div className="w-full h-full gradient-03">
      </div>
      <p className="taglineText">| About Metaverse</p>
      <p className="text-light-grey text-2xl pb-6">
        <span className="font-bold text-white">Metaverse</span> is a new thing in the future, where you can enjoy
        the virtual world by feeling like it's really real, you can feel what
        you feel in this metaverse world, because this is really the{" "}
        <span className="font-bold text-white">madness of the metaverse</span> of today, using only{" "}
        <span className="font-bold text-white">VR</span> devices you can easily explore the metaverse world you
        want, turn your dreams into reality. Let's <span className="font-bold text-white">explore</span> the
        madness of the metaverse by scrolling down
      </p>
      <img src={arrow} alt="arrowdownimg" width={18}/>
    </div>
  );
};

export default AboutSection;
