import React from "react";
import CoursePriceStyle from "./CoursePrice.module.css";
import StartLearning from "../common/Buttons/StartLearning";
const CoursePrice = ({imageurl,discountprice,price,hours,minutes,sections,includes}) => {
 
  return (
    <div className="w-[370px] rounded-2xl shadow-2xl p-8 bg-white new3:w-[320px]">
      <img
        src={imageurl}
        alt=""
        width={441}
        height={240}
        className="rounded-2xl"
      />

      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <div className="text-base text-coursediscount px-2 ">
            <span className={CoursePriceStyle.strikethrough}>₹ {discountprice}</span>
          </div>
          <div className="text-3xl font-bold text-courseheading">₹ {price}</div>
        </div>
        <div className="flex flex-col gap-1 mt-1 font-semibold">
          <div className="flex gap-2">
            <img src="/icons/video.png" alt="" className="max-h-4 mt-1" />
            <span>{hours}hr {minutes}min</span>
          </div>
          <div className="flex gap-2">
            <img src="/icons/cap.png" alt="" className="max-h-4 mt-1" />
            <span>{sections} Sections</span>
          </div>
        </div>
      </div>
      <StartLearning />
      <div>
        <h1 className="text-courseheading font-bold px-2 text-xl py-1 mt-5">This Includes:</h1>
        {includes?.map((item,index) => {
          return (
            <div className="flex gap-2 px-2 py-1" key={index}>
              <img src={item.imageurl} alt="" className="max-h-4 max-w-[30px] mt-1" />
              <span className="font-semibold">{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePrice;
