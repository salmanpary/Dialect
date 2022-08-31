import React from 'react'
import Navbar from '../common/Navbar'
import GetCritical from '../Home/GetCritical/GetCritical'
import Footer from '../common/Footer/Footer'
import Faqsection from './FaqQuestions'
const FaqPage = () => {
  return (
<>


<Navbar/>
<Faqsection/>

<GetCritical/>
<Footer/>

</>
  )
}

export default FaqPage