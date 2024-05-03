import React from 'react'


const BlogsCard = ({blog}) => {
  return (
    <>
      <div className="bg-white xl:w-[90%] relative mt-8 mx-8 my-2 px-2 py-2 min-h-[15rem] xl:min-h-[24rem] 2xl:h-[32rem] rounded-[1rem] ">
      
      <img
        src={blog?.titleImg}
        alt={blog?.title}
        className='h-[16rem] xl:l 2xl:h-[24rem] w-full rounded-[1rem] object-cover'/>
      
    
      <div className="absolute bottom-0 left-0 p-3 w-full h-[8rem] lg:h-[10rem] 2xl:h-[12rem]  bg-white  rounded-b-3xl">
        <h6 className="font-extrabold xl:text-2xl  2xl:text-3xl">{blog?.title}</h6>
      <a href={`/blog?id=${blog?.id}`}>
      <p className="font-semibold  text-sm 2xl:text-xl   my-2 2xl:mt-8">Read More</p>
        </a> 
      </div>
    </div> 
    </>
  )
}

export default BlogsCard