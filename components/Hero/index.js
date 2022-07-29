import React from 'react'
import Eligiblity from '../common/Buttons/EligiblityButton'
import LandingPageData from '../data/LandingPageData'
import Details from './Details'
import { useMediaQuery } from 'usehooks-ts'

const Hero = () => {
  const matches = useMediaQuery('(max-width: 768px)')
  const [style,setstyle]=React.useState("margin")
  React.useEffect(()=>{

    if(!matches){
      setstyle("margin")
    }
    else{
      setstyle("mx-10")
    }
  },[matches])


  return (
   <>
   <div className={style}>
       
   <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-auto">
    <div className='flex flex-col justify-center items-start space-y-10 md:justify-center md:items-center'>
   <div className="text-heroheading font-extrabold md:text-center md:text-5xl md:leading-relaxed ">
    {LandingPageData.hero.heading}
   </div>
   <Details/>
   <Eligiblity/>

    </div>
    <div className="md:row-start-1 md:row-end-2 md:flex md:justify-center md:items-center">

    <img src="/images/heroimage2.png" alt="" width={600} height={600} />
    </div>

   </div>

   </div>

  
   </>
  )
}

export default Hero