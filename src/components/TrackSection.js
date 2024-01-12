import React from "react";
import map from "../assets/map.png";
import people1 from "../assets/people-01.png";
import people2 from "../assets/people-02.png";
import people3 from "../assets/people-03.png";

const TrackSection = () => {
  return (
    <div className="container flex-col">
      <p className="taglineText">People on the world</p>
      <h1 className="headingText mb-[68px]">
        Track friends around you and invite them to play together in the same
        world
      </h1>
      <div className="relative">
        <img src={map} alt="mapimg" />
        <div className="p-2 bg-blue-600 absolute right-[7%] top-[70%] rounded-full">
          <img src={people1} alt="people1" width={60}/>
        </div>
        <div className="p-2 bg-blue-600 absolute top-[10%] left-[6%] rounded-full">
          <img src={people2} alt="people2" width={60}/>
        </div>
        <div className="p-2 bg-blue-600 absolute top-[50%] left-[45%] rounded-full">
          <img src={people3} alt="people3" width={60}/>
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
