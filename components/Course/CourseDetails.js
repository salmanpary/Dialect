import React from "react";

const CourseDetails = ({title,description,duration,lessons,instructor,language}) => {
  return (
    <div className="bg-coursedetails text-white rounded-2xl py-10 px-5 w-[600px] bg-opacity-90 new4:w-[490px]">
      <h1 className="font-semibold text-2xl new4:text-lg">{title}</h1>
      <h2 className="pt-2 text-xs">
        {description}
      </h2>
      <div className="flex justify-between p-2 pt-3">
        <div className="flex gap-10">
          <div className="flex gap-3">
            <img src="/icons/video-white.png" className="max-h-4 mt-1"/>
            <span>
                {duration} Hours
            </span>
          </div>
          <div className="flex gap-3">
            <img src="/icons/cap-white.png" className="max-h-4 mt-1"/>
            <span>
                {lessons} lessons
            </span>
          </div>
        </div>
        <div>
          <img src="/icons/rating.png" />
        </div>
      </div>
      <div className="flex justify-between pt-1 px-2">

      <div className="flex gap-2 p-2 text-sm">
        <h2 >Instructor</h2>
        <div className="line border-l-2 h-4 mt-1 text-coursecardline"></div>
        <h2>{instructor}</h2>
      </div>
      <span>{language}</span>
      </div>
      
    </div>
  );
};

export default CourseDetails;
