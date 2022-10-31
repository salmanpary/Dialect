import Link from "next/link";
import React from "react";
import CourseCardStyle from "./CourseCard.module.css";
const CourseCard = ({
  imageurl,
  heading,
  instructor,
  time,
  sections,
  discountprice,
  price,
 path
}) => {
  console.log(path)
  return (
    <div className="border rounded-2xl p-2 w-[365px] h-[380px]">
      <img
        src={imageurl}
        width={342.56}
        height={182.82}
        className="rounded-xl max-h-[182.82px]"
      />
      <h1 className="font-bold text-base p-2">{heading}</h1>
      <div className="flex gap-2 p-2 text-sm">
        <h2 className="text-coursecardinstructor">Instructor</h2>
        <div className="line border-l-2 h-4 mt-1 text-coursecardline"></div>
        <h2 className="text-coursecardinstructor">{instructor}</h2>
      </div>
      <div className="flex  gap-4">
        <div className="flex gap-1">
          <img
            src="/icons/video.png"
            width={18}
            height={20}
            className="max-h-3.5 mt-0.5 "
          />
          <div className="flex gap-1 text-sm">
            {time.hours && <span>{time.hours} Hr</span>}
            {time.minutes} Minutes
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src="/icons/cap.png"
            width={20}
            height={20}
            className="max-h-4 mt-0.5 "
          />
          <div className="text-sm">{sections} sections</div>
        </div>

        <img src="/icons/rating.png" className="max-h-4 mt-1" />
      </div>

      {discountprice && (
        <div className="text-base text-coursediscount px-2 py-1">
          <span className={CourseCardStyle.strikethrough}>
            ₹ {discountprice}
          </span>
        </div>
      )}

      <div className={discountprice ? "" : "h-16 pt-7"}>
        <div className={`flex justify-between p-2`}>
          <div className="text-xl font-bold">₹ {price}</div>
          <Link href={`/${path}`}>
          <div className="text-bluebutton border rounded-lg w-28 border-bluebutton grid place-content-center px-1.5 py-1 text-sm font-medium">
            Enroll Now
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
