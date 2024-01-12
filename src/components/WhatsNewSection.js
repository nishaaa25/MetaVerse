import React from "react";
import whatsnew from "../assets/whats-new.png";
import headset from "../assets/headset.svg";
import varpano from "../assets/vrpano.svg";

const WhatsNewSection = () => {
  return (
    <div className="container text-start">
      <div className="w-7/12 py-9 h-full relative z-40">
        <p className="taglineText">|Whats New</p>
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
      </div>
      <div className="w-5/12">
        <img
          src={whatsnew}
          alt="getstartedimg"
          className="w-[100%] relative z-50"
        />
      </div>
    </div>
  );
};

export default WhatsNewSection;
