import React from "react";
import CourseCard from "./CourseCard";
const CoursesToGetYouStarted = () => {
  const CourseData = [
    {
      imageurl: "/images/game.jpg",
      heading: "Complete C# Unity Game Developer 2D",
      instructor: "Prince",
      time: {
        hours: 18,
        minutes: 17,
      },
      sections: 5,
      discountprice: 1800,
      price: 1400,
      path: "unity",
    },
    {
      imageurl: "/images/flutter.png",
      heading: "Flutter & Dart - The Complete Guide",
      instructor: "Farhan",
      time: {
        hours: 1,
        minutes: 30,
      },
      sections: 24,
      discountprice: 1800,
      price: 1400,
      path: "flutter/inprogress",
    },
    {
      imageurl: "/images/reactnative.jpg",
      heading: "React Native - The Practical Guide",
      instructor: "Javas",
      time: {
        minutes: 30,
      },
      sections: 12,
      price: 1400,
      path: "reactnative/inprogress",
    },
    {
      imageurl: "/images/reactnative.jpg",
      heading: "React Native - The Practical Guide",
      instructor: "Javas",
      time: {
        minutes: 30,
      },
      sections: 12,
      price: 1400,
      path: "react/inprogress",
    },
    {
      imageurl: "/images/reactnative.jpg",
      heading: "React Native - The Practical Guide",
      instructor: "Javas",
      time: {
        minutes: 30,
      },
      sections: 12,
      price: 1400,
      path: "python/inprogress",
    },
  ];
  return (
    <>
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center gap-2 pb-4 text-center">

    <h1 className="font-extrabold text-4xl text-courseheading">Courses To Get You Started</h1>
      <div >
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-start">
        {CourseData.map((item, index) => {
          return (
            <CourseCard
              key={index}
              imageurl={item.imageurl}
              heading={item.heading}
              instructor={item.instructor}
              time={item.time}
              sections={item.sections}
              discountprice={item.discountprice}
              price={item.price}
              path={item.path}
            />
          );
        })}
      </div>
      
    </div>
     
    </>
  );
};

export default CoursesToGetYouStarted;
