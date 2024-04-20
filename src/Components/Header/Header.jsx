import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/image_prev_ui (2).png";

const Header = () => {
  return (
    <>
<div className=" px-8 py-4 2xl:px-16 2xl:py-6">
      <div className="flex justify-between items-center mt-5 2xl:mt-3">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-36 h-auto 2xl:w-56 " />
        </div>
        <div className="header-items flex gap-16 mt-2">
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Tools</span>
          </Link>
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Support</span>
          </Link>
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Community</span>
          </Link>
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Pricing</span>
          </Link>
        </div>
        <Link to="/" className="border border-cyan-400 rounded-full text-white text-2xl 2xl:text-3xl px-7 py-2  2xl:px-9 2xl:py-4">
          Book A Demo
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header