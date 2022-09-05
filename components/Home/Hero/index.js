import React from 'react'
import Eligiblity from '../../common/Buttons/LearningButton'
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
   <div className='bg-gradient-to-l from-wrappergrey md:bg-none py-10'>

 
   <div className={style}>
       
   <div className="flex md:flex-col-reverse gap-x-20">
    <div className='flex flex-col justify-center items-start gap-y-10 md:justify-center md:items-center'>
   <div className="text-heroheading font-extrabold md:text-center md:text-5xl   md:leading-relaxed md:whitespace-nowrap new2:text-4xl flex flex-col gap-4">
    <div>

    {LandingPageData.hero.heading1}
    </div>
    <div>
    {LandingPageData.hero.heading2}
    </div>
   </div>
   
   <Details/>
   <div className="mdo:hidden">
<img src="/images/hero.png" alt="" width={700} height={700}/>
</div>
   <Eligiblity/>

    </div>
    <div className="md:hidden">

    <img src="/images/hero.png" alt="" width={700} height={600}/>
    </div>

   </div>

   </div>
   </div>
  
   </>
  )
}

export default Hero