import React from 'react';
import toolImage from '../../assets/Images/toolsbgg.jpeg';

const ToolsCard = ({ title, description }) => {
  return (
    <div className=" bg-white relative px-2 py-2 rounded-[1rem] transition ease-in-out  hover:-translate-1 hover:scale-105 duration-300 ">
      <img src={toolImage} alt="" className="h-[20rem] 2xl:h-[24rem] w-full object-fill rounded-[1rem]" />
      <div className="absolute bottom-0 left-0 p-3 w-full h-[8rem]  bg-white rounded-b-3xl">
        <h6 className="font-bold">{title}</h6>
        <p className="font-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
