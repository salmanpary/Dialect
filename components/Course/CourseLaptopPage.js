import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar";
import CourseHero from "./GameDevelopment";
import { useMediaQuery } from "usehooks-ts";

const CourseLaptopPage = () => {
  const matches=useMediaQuery('(max-width: 1110px)')
  return (
    <>
      <Navbar />
      <CourseHero />
      <div className="absolute top-[1100px] left-0 right-0 ">
        <Footer />
      </div>
    </>
  );
};

export default CourseLaptopPage;
