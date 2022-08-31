import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import MobileNavbar from './MobileNavbar';
import LaptopNavbar from './LaptopNavbar';
const Navbar = () => {
  const matches = useMediaQuery("(max-width: 768px)");
return (
  <>
  {
    matches ? <MobileNavbar/> : <LaptopNavbar/>
  }
  </>
)
  
}

export default Navbar