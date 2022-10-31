import React from "react";

const CourseDescription = ({
  coursedescription,
  requirements,
  whatyouwilllearn,
}) => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl py-2">Course Description</h1>
      <p className="font-semibold text-base text-courseheading">
      {coursedescription}
      </p>
      <h1 className="font-extrabold text-base py-2">Requirements</h1>
      <ul className="list-disc list-inside py-1 text-base">
        {requirements?.map((item, index) => {
          return <li key={index} className="py-2">{item}</li>;
        })}
      </ul>
      <h1 className="font-bold text-2xl py-2">What you will learn</h1>
      <ul className="list-disc list-inside text-base">
        {whatyouwilllearn?.map((item, index) => {
          return <li key={index} className="py-2">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CourseDescription;
