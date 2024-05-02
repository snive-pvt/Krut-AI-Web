import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/image_prev_ui (2).png";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { Toaster } from 'react-hot-toast';
import { useLocation } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSupportMenu = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
      setIsSupportOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="px-[16px] md:px-8 py-4 2xl:px-16 2xl:py-6 z-50">
        <div className="flex justify-between items-center mt-4 2xl:mt-3">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-36 h-auto 2xl:w-56" />
            </Link>
          </div>

          {/* Mobile Mode */}
          <div className="md:hidden z-50">
            <HiMenuAlt4 className="text-white text-3xl" onClick={toggleMenu} />
          </div>

          {/* Mobile Header */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="md:hidden z-50 absolute top-0 left-0 w-full bg-black p-8 h-[100vh]">
              <div className="relative flex flex-col  mx-4 my-4 gap-8 py-5">

                <div className="flex items-center justify-end px-4 w-full text-white">
                  <span class="material-symbols-outlined cursor-pointer" onClick={toggleMenu}> close </span>
                </div>

                <Link to="/tools" className="text-white text-2xl font-semibold"> Tools </Link>

                <div className="relative group ">
                  <Link to="" className="text-white text-2xl font-semibold flex gap-5" onClick={toggleSupportMenu} >
                    Support{" "}
                    {isSupportOpen ? (
                      <IoChevronUpOutline
                        style={{ color: "white", marginTop: "3px" }}
                      />
                    ) : (
                      <IoChevronDownOutline
                        style={{ color: "white", marginTop: "3px" }}
                      />
                    )}
                  </Link>

                  {isSupportOpen && (
                    <div className="w-full bg-black shadow-lg rounded-lg mt-2 mx-16">

                      <Link to="/blogs" className="px-4 py-2  text-white text-2xl flex gap-2" >
                        <CgFileDocument style={{ marginTop: '3px' }} /> Blog
                      </Link>

                      {/* <Link
                        to="/tutorials"
                        className=" px-4 py-2  text-white flex gap-2"
                      >
                        <MdCastForEducation style={{marginTop:'3px'}}/> Tutorials
                      </Link> */}

                      <Link to="/contact" className=" px-4 py-2 text-white text-2xl flex gap-2" >
                        <MdOutgoingMail style={{ marginTop: '3px' }} /> Contact
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/" className="text-white text-2xl font-semibold" >
                  Community
                </Link>
                <Link to="/pricing" className="text-white text-2xl font-semibold" >
                  Pricing
                </Link>
              </div>
            </div>
          )}


          {/* Large display Header */}
          <div className="header-items hidden md:flex  lg:gap-16 md:gap-10 mt-2">
            <Link
              to="/tools"
              className="text-white md:text-sm lg:text-xl 2xl:text-2xl"
            >
              <span>Tools</span>
            </Link>
            <div className="relative group">
              <Link
                to=""
                className="text-white  md:text-sm  lg:text-xl 2xl:text-2xl"
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
              >
                Support
              </Link>
              <div className="border border-cyan-100 absolute top-full  lg:ml-[-60px] w-[16rem] bg-black shadow-lg rounded-lg mt-2 hidden group-hover:block">
                <Link to="/blogs" className="block px-4 py-2 text-white ">
                  <div className="flex  hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <CgFileDocument />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Blogs</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Discover more on our blog
                      </p>
                    </div>
                  </div>
                </Link>

                {/* <Link to="/tutorials" className="block px-4 py-2 text-white ">
                  <div className="flex  hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <MdCastForEducation />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Tutorial</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Get insights of our impactful tools!
                      </p>
                    </div>
                  </div>
                </Link> */}

                <Link to="/contact" className="block px-4 py-2 text-white ">
                  <div className="flex hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <MdOutgoingMail />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Contact</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Connect with us via our contact page
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              to="/"
              className="text-white  md:text-sm  lg:text-xl 2xl:text-2xl"
            >
              <span>Community</span>
            </Link>
            <Link
              to="/pricing"
              className="text-white  md:text-sm lg:text-xl 2xl:text-2xl"
            >
              <span>Pricing</span>
            </Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:block  rounded-full text-black font-bold md:text-lg lg:text-xl 2xl:text-2xl md:px-5 md:py-1 lg:px-7 lg:py-2 2xl:px-9 2xl:py-4"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)",
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>
      <div><Toaster /></div>
    </>
  );
};

export default Header;
