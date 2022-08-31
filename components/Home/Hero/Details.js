import React from "react";
import Circle from "../../common/Wrappers/Circle";
import LandingPageData from "../data/LandingPageData";
const Details = () => {
  return (
    <div className="flex flex-col space-y-5 ">
      {LandingPageData.hero.details.map((detail, index) => {
        return (
          <div key={index} className="flex space-x-2 md:space-x-8">
            <Circle />

            <div key={index} className="text-herodetails text-grey">
              {detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
