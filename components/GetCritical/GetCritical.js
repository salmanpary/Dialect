import React from 'react'
import GetEarlyAccess from '../common/Buttons/GetEarlyAccess'
import { useMediaQuery } from 'usehooks-ts'
const GetCritical = () => {
    const matches = useMediaQuery("(max-width: 671px)");
    const [style,setstyle]=React.useState("margin")
    React.useEffect(()=>{
        if(!matches){

            setstyle("margin")
        }
        else{

            setstyle("mx-4")
        }
    }
    ,[matches])
  return (
    <>
    {/* <div className='relative margin'> */}

<div className={style}>

   <div className="  bg-green  h-[23.375rem] rounded-2xl flex flex-col justify-center items-center text-center mt-20 2xl:w-auto md:h-auto md:p-10">
    <div className='relative'>
      <img src="/icons/smalldots.png" alt="" width={148} height={148} className="absolute top-[-2rem] left-[-7rem] xl:hidden"/>
      <img src="/icons/smalldots.png" alt="" width={250} height={250} className="absolute bottom-[-9rem]  right-[-10rem] xl:hidden"/>


    <div className="flex justify-center items-center flex-col gap-y-3">
     <div className='text-white font-extrabold text-[3.5rem] mobile:text-2xl'>
     Get critical career skills
     </div>
     <div className='text-white w-[40ch] mobile:w-[30ch]'>
     Take the next step toward your personal and professional goals with Dialect..
     </div>
     <div>

     <GetEarlyAccess />
     </div>
     
    </div>
    </div>

   </div>
</div>
  
   
    {/* </div> */}
   </>
  )
}

export default GetCritical