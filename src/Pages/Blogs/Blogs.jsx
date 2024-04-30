import React from "react";
import Header from "../../Components/Header/Header";
import BlogsCard from "../../Components/BlogsCard/BlogsCard";
import GetStarted from "../../Components/GetStarted/GetStarted"
import Footer from "../../Components/Footer/Footer";

const Blogs = () => {
  const linearGreenBackground = {
    backgroundColor: "black",
    backgroundImage: `url("/images/Green_shade.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };


  return (
    <>
      <div className="min-h-screen">
        <Header />
        <div
          className="h-[624px] w-full absolute top-0 -z-50"
          style={linearGreenBackground}
        ></div>


        <div className="my-10 2xl:my-16">
          <h1 className="text-white text-3xl sm:text-4xl xl:text-7xl 2xl:text-8xl text-center font-bold">
            Blogs
          </h1>
          <p className="mt-8 mx-2 sm:mx-4 text-xl text-center xl:text-xs 2xl:text-lg 2xl:font-normal text-white xl:font-light">
            Get Valuable insights,practical tips,and thought-provoking analyses to keep you informed and inspired.
          </p>

          <div className="min-h-[220px] md:min-h-[240px] xl:min-h-[340px] 2xl:min-h-[440px] xl:mx-20 2xl:mx-40 border border-krutNeon rounded-2xl 2xl:rounded-3xl mx-4 md:mx-12 mt-16 mb-4 flex">

            <div className="bg-white text-black min-h-[200px] w-3/5 lg:w-[55%] rounded-2xl 2xl:rounded-3xl">
              <h1 className="mx-2 lg:mx-8 font-bold xl:font-black py-2 lg:pt-4 xl:py-8 sm:text-xl xl:text-4xl 2xl:text-5xl  ">Inside AI Art</h1>
              <p className="mt-2 lg:mt-2 mx-2 lg:mx-8 text-xs sm:text-xs  2xl:text-base lg:font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus vitae voluptas doloribus eveniet rerum deserunt s
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure quibusdam delectus recusandae i
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure quibusdam delectus recusandae i
              </p>
            </div>

            <div className="min-h-[200px] md:min-h-[240px] xl:min-h-[340px] 2xl:min-h-[440px]  w-2/5 lg:w-[45%] flex flex-col justify-center md:justify-end md:items-end items-center relative md:mb-8 md:mx-4 lg:pr-4">
              <div className="absolute top-2 lg:top-4 lg:right-6 right-1 min-h-[8px] md:min-h-[16px] lg:min-h-[24px] w-[8px] md:w-[16px] lg:w-[24px] bg-white rounded-full"></div>
              <h1 className="text-white font-semibold text-center  sm:text-lg md:text-xl lg:text-5xl xl:text-7xl  2xl:text-8xl xl:font-bold ">
                Recent Post
              </h1>
              <button className="border lg:border-2  border-krutNeon text-white text-[10px] sm:text-sm lg:text-lg 2xl:text-2xl rounded-lg lg:rounded-full px-2 lg:px-8 lg:font-medium py-1  mt-2">
                Read more
              </button> 
            </div>

          </div>

         
        </div>
         {/* blogsCard */}
           
         <div className=" xl:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   my-20">
  <BlogsCard />
  <BlogsCard />
  <BlogsCard />
  <BlogsCard  />
  <BlogsCard />
  <BlogsCard  />
</div>

     <GetStarted />

     <Footer />

      </div>
    </>
  );
};

export default Blogs;
