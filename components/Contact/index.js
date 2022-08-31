import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer/Footer'
import AddressCard from './AddressCard'
import Typeform from './Typeform'
const ContactUsPage = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-white to-wrappergrey py-2'>

    <Navbar/>
    <Typeform/>
    </div>
    <AddressCard/>
    <Footer/>
    </>
  )
}

export default ContactUsPage