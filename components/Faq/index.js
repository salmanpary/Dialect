import React from 'react'
import Navbar from '../common/Navbar'
import GetCritical from '../Home/GetCritical/GetCritical'
import Footer from '../common/Footer/Footer'
import Faqsection from './FaqQuestions'
const FaqPage = () => {
  return (
<>
<div className='bg-gradient-to-l from-wrappergrey py-2'>

<Navbar/>
<Faqsection/>
</div>
<GetCritical/>
<Footer/>

</>
  )
}

export default FaqPage