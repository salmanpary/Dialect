import React from 'react'
import GetEarlyAccess from '../common/Buttons/GetEarlyAccess'
const GetCritical = () => {
  return (
    <>
    {/* <div className='relative margin'> */}


  
   <div className="margin  bg-green w-[73.125rem] h-[23.375rem] rounded-2xl flex flex-col justify-center items-center text-center mt-[9rem] md:w-auto md:h-auto md:mx-4 md:p-5">
    <div className='relative'>
      <img src="/icons/smalldots.png" alt="" width={148} height={148} className="absolute top-[-2rem] left-[-7rem] md:hidden"/>
      <img src="/icons/smalldots.png" alt="" width={250} height={250} className="absolute bottom-[-9rem]  right-[-10rem] md:hidden"/>


    <div className="flex justify-center items-center flex-col gap-y-3">
     <div className='text-white font-extrabold text-[3.5rem]'>
     Get critical career skills
     </div>
     <div className='text-white w-[40ch]'>
     Take the next step toward your personal and professional goals with Dialect..
     </div>
     <div>

     <GetEarlyAccess />
     </div>
     
    </div>
    </div>

   </div>
   
    {/* </div> */}
   </>
  )
}

export default GetCritical