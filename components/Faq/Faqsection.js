import React from 'react'
import Faqs from './Faqs'
const Faqsection = () => {
  return (
    <div className="flex justify-center gap-x-20 xl:flex-col sm:mx-5">
        <div className='mt-[7.688rem] md:flex md:flex-col md:justify-center md:items-center'>
        <h2 className='font-extrabold text-faqheading md:text-center'>Any questions?</h2>
        <h2 className='font-extrabold text-faqheading md:text-center'>We got you.</h2>

        </div>
        <Faqs/>
        
    </div>
  )
}

export default Faqsection