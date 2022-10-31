import React from "react";
import CourseDescription from "./CourseDescription";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import Coursesdata from "./data/Coursesdata";

const GameDevelopment = () => {
  return (
    <>
      <div className="relative mx-32 my-2">
        <img
          src={Coursesdata.coursedetails.gamedevelopment.bannerimage}
          alt=""
          className="rounded-2xl absolute  top-0 left-0 max-h-[400px] w-full z-0"
          height={407}
        />
        <div className="absolute top-20 left-32 new2:left-6">
          <CourseDetails
            title={
              Coursesdata.coursedetails.gamedevelopment.coursedetails.title
            }
            description={
              Coursesdata.coursedetails.gamedevelopment.coursedetails
                .description
            }
            duration={
              Coursesdata.coursedetails.gamedevelopment.coursedetails.duration
            }
            lessons={
              Coursesdata.coursedetails.gamedevelopment.coursedetails.lessons
            }
            instructor={
              Coursesdata.coursedetails.gamedevelopment.coursedetails.instructor
            }
            language={
              Coursesdata.coursedetails.gamedevelopment.coursedetails.language
            }
          />
        </div>
        <div className="absolute z-10 right-20 top-52 new2:right-9 new3:right-2">
          <CoursePrice
            price={Coursesdata.coursedetails.gamedevelopment.courseprice.price}
            discountprice={
              Coursesdata.coursedetails.gamedevelopment.courseprice
                .discountprice
            }
            hours={Coursesdata.coursedetails.gamedevelopment.courseprice.hours}
            minutes={
              Coursesdata.coursedetails.gamedevelopment.courseprice.minutes
            }
            sections={
              Coursesdata.coursedetails.gamedevelopment.courseprice.sections
            }
            imageurl={
              Coursesdata.coursedetails.gamedevelopment.courseprice.imageurl
            }
            includes={
              Coursesdata.coursedetails.gamedevelopment.courseprice.includes
            }
          />
        </div>
        <div className="absolute top-[420px] left-0 w-1/2">
          <CourseDescription
            coursedescription={
              Coursesdata.coursedetails.gamedevelopment.coursedescription
                .description
            }
            requirements={
              Coursesdata.coursedetails.gamedevelopment.coursedescription
                .requirements
            }
            whatyouwilllearn={
              Coursesdata.coursedetails.gamedevelopment.coursedescription
                .whatyouwilllearn
            }
          />
        </div>
      </div>
    </>
  );
};

export default GameDevelopment;
