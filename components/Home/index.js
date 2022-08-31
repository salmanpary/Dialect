import React from 'react'
import Navbar from '../common/Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import CoursesOffered from './CoursesOffered/CoursesOffered'

import Faqsection from '../common/Faq/Faqsection'
import GetCritical from './GetCritical/GetCritical'
import Footer from '../common/Footer/Footer'
const Mainpage = () => {
  return (
    <>
    <div className='bg-gradient-to-l from-wrappergrey py-3'>

    <Navbar/>
    <Hero/>
    </div>
    <WhyChooseUs/>
    <CoursesOffered/>
    <GetCritical/>
    <Faqsection/>
    <Footer/>
   
    </>
  )
}

export default Mainpage