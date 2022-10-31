import React from "react";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import Coursesdata from "./data/Coursesdata";
import CourseDescription from "./CourseDescription";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer/Footer";
const CourseMobilePage = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="mt-4">

        <img src="/images/gamebanner.jpg" alt="" className="w-full h-72" />
       
        <div className="absolute inset-0 flex justify-center items-center">
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
          ></CourseDetails>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10">
        <CoursePrice
          price={Coursesdata.coursedetails.gamedevelopment.courseprice.price}
          discountprice={
            Coursesdata.coursedetails.gamedevelopment.courseprice.discountprice
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
      <div className="flex justify-center items-center p-10">
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
      <Footer />
    </>
  );
};

export default CourseMobilePage;
