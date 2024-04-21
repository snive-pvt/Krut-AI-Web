import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/image_prev_ui (2).png";
import { FaBars } from 'react-icons/fa';


const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
   
  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);


  return (
    <>
<div className="px-8 py-4 2xl:px-16 2xl:py-6">
      <div className="flex justify-between items-center mt-5 2xl:mt-3">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-36 h-auto 2xl:w-56" />
        </div>


        {/* Mobile Mode */}
        <div className="sm:hidden">
          <FaBars className="text-white text-3xl" onClick={toggleMenu}/>
        </div>

        {isOpen && (
          <div ref={dropdownRef} className="sm:hidden absolute top-0 left-0 w-full bg-white p-4">
            <div className="flex flex-col justify-center items-center gap-4 py-5">
              <Link to="/" className="text-black text-xl 2xl:text-2xl font-semibold">Tools</Link>
              <Link to="/" className="text-black text-xl 2xl:text-2xl font-semibold">Support</Link>
              <Link to="/" className="text-black text-xl 2xl:text-2xl font-semibold">Community</Link>
              <Link to="/pricing" className="text-black text-xl 2xl:text-2xl font-semibold">Pricing</Link>
              <Link to="/" className="border border-krutNeon rounded-full text-black text-2xl px-7 py-2 font-semibold hover:bg-krutNeon hover:text-white" >Book A Demo</Link>
            </div>
          </div>
        )}

        <div className="header-items hidden sm:flex gap-16 mt-2"> 
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Tools</span>
          </Link>
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Support</span>
          </Link>
          <Link to="/" className="text-white text-xl 2xl:text-2xl">
            <span>Community</span>
          </Link>
          <Link to="/pricing" className="text-white text-xl 2xl:text-2xl">
            <span>Pricing</span>
          </Link>
        </div>
       
            <Link to="/" className="hidden sm:block border border-krutNeon rounded-full text-white text-2xl 2xl:text-3xl px-7 py-2 2xl:px-9 2xl:py-4"> {/* Show on small screens */}
              Book A Demo
            </Link>
      </div>
    </div>
  
    </>
  )
}

export default Header