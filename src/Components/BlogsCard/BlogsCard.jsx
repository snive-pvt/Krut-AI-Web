import React from 'react'
import toolsbgg from "../../assets/Images/toolsbgg.jpeg"




const BlogsCard = () => {
  return (
    <>
      <div className="bg-white xl:w-[90%] relative mt-8 mx-8 my-2 px-2 py-2 min-h-[15rem] xl:min-h-[24rem] 2xl:h-[32rem] rounded-[1rem] ">
      
      <img
        src={toolsbgg}
        alt=""
        className='h-[16rem] xl:l 2xl:h-[24rem] w-full object-fill rounded-[1rem]'
      />
      
    
      <div className="absolute bottom-0 left-0 p-3 w-full h-[8rem] lg:h-[10rem] 2xl:h-[12rem]  bg-white  rounded-b-3xl">
        <h6 className="font-extrabold xl:text-2xl  2xl:text-3xl">AI vs Human:Who Creates Better Art?</h6>
      <a href="/blog">
      <p className="font-semibold  text-sm 2xl:text-xl   my-2 2xl:mt-8">Read More</p>
        </a> 
      </div>
    </div> 
    </>
  )
}

export default BlogsCard