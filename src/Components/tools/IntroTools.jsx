import React from "react";
function IntroTools({ heading, desc }) {
  return (
    <div className="conatiner-fluid  bg-cover bg-no-repeat bg-center min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen ">
      <div className="flex flex-col  items-center justify-center w-full py-10">
        <h1 className="text-white text-4xl sm:text-7xl xl:text-[96px] font-bold ">
          {heading}
        </h1>
        <div className="mt-4 md:mt-10 lg:mt-4 2xl:mt-6 xl:mt-5 leading-normal">
          <p className=" text-white text-center  2xl:text-2xl mx-auto lg:text-lg xl:text-xl">
            Create visually appealing product photoshoots in seconds
          </p>
        </div>
      </div>
      <div class=" min-h-[8rem] md:min-h-[9rem] lg:min-h-[414px] flex justify-center items-center">
        <video
          className="w-full h-[414px] mx-7 lg:mx-9 rounded-2xl 2xl:rounded-[3rem] 2xl:mx-16 mt-[-1rem] mb-[-1rem] md:mb-[-2rem] lg:mb-[-3rem] 2xl:mt-[-4rem] 2xl:mb-[-4rem]"
          controls
        >
          <source src="movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
export default IntroTools;