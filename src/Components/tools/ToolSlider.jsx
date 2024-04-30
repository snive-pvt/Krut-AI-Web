import React, { useEffect, useState } from "react";

import "./SlideToUnlock.css"; // Import your CSS file for styling
function ToolSlider({ beforeImg, afterImg }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    //reset status
    setIsClicked(false);
  }, [beforeImg])

  return (
    <div className="my-10">
      <div className="flex items-center justify-center ">

        <div className="relative">
          <img className="w-[600px] h-[511px] rounded-l-3xl relative -z-10 left-6 object-cover" src={beforeImg} />
          <div className="w-[315px] h-[57px] absolute left-36 bottom-20 z-10 cursor-pointer " onClick={() => setIsClicked(!isClicked)}>

            <div className="w-[315px] h-[57px] rounded-[36.50px] border border-white flex items-center hs"></div>
            <div className="w-[55px] h-[55px] left-0 top-[1px] absolute flex items-center justify-center bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
              >
                <path
                  d="M1 9.97897H21.5234M21.5234 9.97897L12.5444 1M21.5234 9.97897L12.5444 18.9579"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="h-[31px] left-[94px] top-[13px] absolute text-center text-white text-xl font-medium font-['Satoshi']">
              Swipe To Future
            </div>
          </div>
        </div>


        {isClicked && (
          <img
            className="w-[600px] h-[511px] bg-white rounded-3xl object-cover"
            src={afterImg}
            alt="Processed Image"
          />
        )}

        {isClicked == false && (
          <div className="w-[600px] h-[511px] bg-white rounded-3xl" ></div>
        )}
      </div>
    </div>
  );
}
export default ToolSlider
