import React, { useEffect, useState } from "react";

import "./SlideToUnlock.css"; // Import your CSS file for styling
function ToolSlider({ beforeImg, afterImg }) {

function ToolSlider() {
  const [isClicked, setIsClicked] = useState(false);

  //before img
  //after img

  return (
    <div className="  bg-cover bg-no-repeat bg-center min-h-[560px] lg:min-h-[600px]">
      <div className="flex   items-center justify-center ">
        <div className="relative">
          <img
            className="w-[600px] h-[511px]  rounded-l-3xl relative -z-10 left-6 "
            src="https://s3-alpha-sig.figma.com/img/df07/ce07/3fd779dba89545e807b28d76be6ffbbc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUCdEdc~cqXINQOdf1Xpuu0nKp9phif5dbJziuYubvgfis4mGhq47KqCG2z~wn8iMmK71r5GdkQeu02oJ8Y58r18FfJBgThmXlXxKbhkrn8Vco7wvrJiERnIOGJoDdD84b8QDLs4ZRI-5oflYCUqiDa-stlmJBE6p09p-wAj354vIkPLdBDaj3x8fZuCGvHtPPCWLy9-t0GdjmuHlpYiP09pAR8EZwyvk7sddgJIldBJu65D3tvkhnWcHa21bTVKXumnu0K~K7isb2bgcaajaxi~Ax56x~nS2wh55dUDKcRvcVN72NJO2ka4doN5ckckOejW~WQJpOiJAjrhvC7EbQ__"
          />
          <div
            className="w-[315px] h-[57px] absolute left-36 bottom-20 z-10 cursor-pointer "
            onClick={() => setIsClicked(!isClicked)}
          >
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
            className="w-[600px] h-[511px] bg-white rounded-3xl"
            src="https://s3-alpha-sig.figma.com/img/df07/ce07/3fd779dba89545e807b28d76be6ffbbc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lUCdEdc~cqXINQOdf1Xpuu0nKp9phif5dbJziuYubvgfis4mGhq47KqCG2z~wn8iMmK71r5GdkQeu02oJ8Y58r18FfJBgThmXlXxKbhkrn8Vco7wvrJiERnIOGJoDdD84b8QDLs4ZRI-5oflYCUqiDa-stlmJBE6p09p-wAj354vIkPLdBDaj3x8fZuCGvHtPPCWLy9-t0GdjmuHlpYiP09pAR8EZwyvk7sddgJIldBJu65D3tvkhnWcHa21bTVKXumnu0K~K7isb2bgcaajaxi~Ax56x~nS2wh55dUDKcRvcVN72NJO2ka4doN5ckckOejW~WQJpOiJAjrhvC7EbQ__"
            alt="Your Image"
          />
        )}

        {isClicked == false && (
          <div
            className="w-[600px] h-[511px] bg-white rounded-3xl"
            src="https://via.placeholder.com/1175x511"
          ></div>
        )}
      </div>
    </div>
  );
}
export default ToolSlider;
