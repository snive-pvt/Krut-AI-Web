import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";


const GetStarted = () => {
  return (
    <>

    <div className='min-h-[20rem] lg:min-h-[25rem] 2xl:min-h-[30rem] rounded-[2rem] bg-red-500 mx-8  lg:mx-16 2xl:mx-24 my-4 flex flex-col justify-center items-center lg:mt-16' style={{background: 'linear-gradient(176.42deg, rgba(255, 255, 255, 0.78) -13.17%, #81EEF4 53.37%, #289DA3 114%)'}}>
        <h1 className="text-center font-black text-3xl lg:text-6xl ">Your Vision Shapes</h1>
        <h1 className="text-center font-black text-3xl lg:text-6xl ">Krut's Actions</h1>
        <button className="bg-black  py-4  text-krutNeon w-3/5 lg:w-1/4 rounded-full lg:my-6 my-4 font-medium flex justify-center items-center text-xs gap-4 "> 
        <BsArrowRightCircle className=" text-xl lg:text-2xl"/>
        Get Started for free</button>
      </div>


    </>
  )
}


export default GetStarted