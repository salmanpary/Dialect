import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import CoursesOffered from './CoursesOffered/CoursesOffered'

import Faqsection from './Faq/Faqsection'
import GetCritical from './GetCritical/GetCritical'
import Footer from './Footer/Footer'
const Mainpage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WhyChooseUs/>
    <CoursesOffered/>
    <Faqsection/>
    <GetCritical/>
    <Footer/>
   
    </>
  )
}

export default Mainpage