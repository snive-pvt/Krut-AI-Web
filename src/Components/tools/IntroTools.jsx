import React, { useEffect, useState } from "react";
function IntroTools({ heading, description, video }) {
  const [key, setKey] = useState(0);

  const handleVideoChange = () => {
    // Increment the key to force remount of the component
    setKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    handleVideoChange();
  }, [video])


  return (
    <div className="text-center">
      <div className="items-center justify-center w-full my-10">
        <h1 className="text-white text-4xl sm:text-6xl xl:text-[96px] font-bold">
          {heading}
        </h1>
        <div className="mt-4 md:mt-10 lg:mt-4 2xl:mt-6 xl:mt-5 leading-normal">
          <p className="px-8 text-white text-center  2xl:text-2xl mx-auto lg:text-lg xl:text-xl">
            {description}
          </p>
        </div>
      </div>
      <div className="my-10 px-8 flex justify-center items-center">
        <video key={key}
          className="max-h-[414px] md:mx-7 lg:mx-9 rounded-2xl"
          controls autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
export default IntroTools;