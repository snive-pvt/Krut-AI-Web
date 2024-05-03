import React, { useEffect, useState } from "react";

import "./SlideToUnlock.css"; // Import your CSS file for styling
function ToolSlider({ beforeImg, afterImg }) {
  const [isClicked, setIsClicked] = useState(false);
  const [slideValue, setSlideValue] = useState(0);

  useEffect(() => {
    //reset status
    setIsClicked(false);
    setSlideValue(0);
  }, [beforeImg]);

  useEffect(() => {
    if (slideValue > 95) setIsClicked(true);
    else setIsClicked(false);
  }, [slideValue]);

  return (
    <div className="my-10">
      <div className="flex items-center justify-center ">

        <div className="relative">
          <img className="w-[40vw] h-[40vw] rounded-l-3xl relative -z-10 left-6 object-cover border border-krutNeon" src={beforeImg} />
        </div>


        {isClicked && (
          <img
            className="w-[40vw] h-[40vw] bg-white rounded-3xl object-cover border border-krutNeon"
            src={afterImg} alt="Processed Image" />
        )}

        {isClicked == false && (
          <div className="w-[40vw] h-[40vw] bg-white rounded-3xl border border-krutNeon" ></div>
        )}
      </div>



      <div className="flex items-center justify-center h-full relative mt-10
      lg:w-[50%] lg:ms-24 lg:-mt-28
      ">
        <div className="w-[50%]">

          {/* Center Text */}
          <div className="absolute -z-10"
            style={{
              left: '50%', // Set left position to 50%
              transform: 'translateX(-50%)', // Move element left by half of its width
              width: 'fit-content' // Make the width fit the content
            }}  >
            <div className="flex h-[45px] items-center" >
              <span className="block md:hidden text-lg lg:text-xl xl:text-2xl relative text-white font-semibold mt-2 pointer-events-none" >
                Swipe it
              </span>
              <span className="hidden md:block text-lg lg:text-xl xl:text-2xl relative text-white font-semibold mt-2 pointer-events-none" >
                Swipe to Future
              </span>
            </div>
          </div>

          {/* slider */}

          <input type="range" id="Slider" name="Slider" list="markers" min="1" max="100"
            className="w-full accent-white border-gray-300 cursor-ew-resize relative h-[50px]"
            style={{
              borderRadius: '30px', // Set border radius to half of the height for a circular slider
              background: 'linear-gradient(to right, #00D4EF 0%, #FFF calc((var(--range-value) - 1)*1%), rgba(0, 0, 0, 0.1) calc(var(--range-value) * 1%), rgba(0, 0, 0, 0.1) 100%)',
              outline: 'white solid 2px', // Set white outline
              appearance: 'none', // Remove default styles
              '--range-value': slideValue // Set custom property for the current value
            }}
            value={slideValue}
            onChange={(e) => { setSlideValue(parseInt(e.target.value)) }}
          />
        </div>
      </div>

    </div>
  );
}
export default ToolSlider
