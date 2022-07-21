import React from 'react'
import TechStackCard from './TechStackCard'
import LandingPageData from '../data/LandingPageData'
import { useMediaQuery } from "usehooks-ts";
const CoursesOffered = () => {
    const matches = useMediaQuery("(max-width: 576px)");
    const [style,setstyle]=React.useState("margin")
    React.useEffect(()=>{
        if(!matches){
            setstyle("margin")
        }
        else{
            setstyle("mx-10")
        }
    }
    ,[matches])
  return (
    <div className={style}>
        <h2 className='font-bold text-5xl flex justify-center items-center mt-[3.4375rem] md:text-center'>Courses Offered</h2>
        <div className="flex flex-wrap gap-[3.563rem] justify-center items-center mt-[5.125rem]">
            {
                LandingPageData?.coursesoffered?.details?.map((item,index)=>{
                    return <TechStackCard key={index} icon={item.icon} heading={item.heading} content={item.content} />
                })
            }


        </div>
    </div>
  )
}

export default CoursesOffered