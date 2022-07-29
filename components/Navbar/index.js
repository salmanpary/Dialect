import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
const Navbar = () => {
  const matches = useMediaQuery('(max-width: 768px)')
  const [style,setstyle]=React.useState("margin")
  React.useEffect(()=>{

    if(!matches){
      setstyle("margin")
    }
    else{
      setstyle("mx-10 justify-center flex items-center")
    }
  },[matches])
  return (
    <nav className={style}>

      <img src="/icons/logo.png" width={280} height={120} ></img>
    </nav>
  )
}

export default Navbar