import React from "react";
import Card from "./Card";
import LandingPageData from "../data/LandingPageData";
import { useMediaQuery } from "usehooks-ts";
const WhyChooseUs = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [style, setstyle] = React.useState("margin");
  React.useEffect(() => {
    if (!matches) {
      setstyle("margin");
    } else {
      setstyle("");
    }
  }, [matches]);
  return (
    <div className={style}>
      <div className="relative bg-wrappergrey rounded-2xl px-[5.188rem] pt-14 pb-[5.625rem] w-full mt-[5.188rem] overflow-x-hidden">
        <h3 className="flex justify-center items-center text-blue text-xl font-extrabold sm:text-center">
          WHY DIALECT
        </h3>
        <h2 className="flex justify-center items-center font-bold text-cardheading sm:text-center pb-[3.125rem] md:text-4xl md:whitespace-nowrap">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-10 xl:grid-cols-1    xl:flex xl:justify-center xl:flex-col xl:items-center xl:gap-y-11">
          {LandingPageData?.whychooseus?.cards?.map((item, index) => {
            return (
              <Card
                key={index}
                roundcolor={item.roundcolor}
                heading={item.heading}
                content={item.content}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
