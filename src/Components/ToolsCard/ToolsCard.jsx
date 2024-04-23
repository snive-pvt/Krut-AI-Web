import React from 'react';
import toolImage from '../../assets/Images/toolsbgg.jpeg';

const ToolsCard = ({ title, description,gif, isComingSoon }) => {
  return (

    <div className="bg-white relative px-2 py-2 xl:h-[24rem] 2xl:h-[24rem] rounded-[1rem] transition ease-in-out hover:-translate-1 hover:scale-105 duration-300">
      {/* Apply opacity style conditionally */}
      {/* <img
        src={gif}
        alt=""
        className={`h-[16rem] xl:l2xl:h-[24rem] w-full object-fill rounded-[1rem] ${isComingSoon ? 'opacity-80' : ''}`}
      /> */}
      <video autoPlay
        loop
        muted src={gif}  className={`h-[16rem] xl:h-[20rem] 2xl:h-[18rem] w-full object-fill rounded-[1rem] ${isComingSoon ? 'opacity-80' : ''}`}></video>
      {/* Conditionally render "Coming soon" text */}
      {/* {isComingSoon && <div className="absolute bottom-35 left-50 p-3 w-full h-full flex justify-center items-center text-white text-3xl font-bold opacity-100">Coming soon</div>} */}
      <div className="absolute bottom-0 left-0 p-3 w-full md:h-[6rem] h-[8rem]  bg-white  rounded-b-3xl">
        <h6 className="font-extrabold 2xl:text-xl">{title}</h6>
        <p className="font-medium text-sm 2xl:text-base   my-2">{description}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
