import React from "react";
import Navbar from "../common/Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import CoursesOffered from "./CoursesOffered/CoursesOffered";
import CoursesToGetYouStarted from "./CoursesToGetYouStarted";
import Faqsection from "../common/Faq/Faqsection";
import GetCritical from "./GetCritical/GetCritical";
import Footer from "../common/Footer/Footer";
const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <WhyChooseUs />
  <CoursesToGetYouStarted/>
      <GetCritical />
      <Faqsection />
      <Footer />
    </>
  );
};

export default Mainpage;
