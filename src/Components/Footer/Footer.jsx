import React, { useState } from 'react'
import logo from "../../assets/Images/image_prev_ui (2).png"
import { useNavigate } from 'react-router-dom'
import { subscribeAPI } from '../../utils/APIservice';
import toast from 'react-hot-toast';
import cardData from '../../Data/CardData';

function Footer() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");

    // Validation function for email using regex
    function isValidEmail(inputEmail) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    }

    //---------------_ Handle User Login ----------------------------------
    async function handleUserSubscribe() {
        setEmail(email.trimEnd());
        const emailCheck = isValidEmail(email);
        if (!email || !emailCheck) {
            return toast.error("Please enter a valid email address");
        }
            toast.promise(
                subscribeAPI({ email }),
                {
                    loading: 'Subscribing...',
                    success: <b>Subscribed successfully!</b>,
                    error: <b>Subscription failed. Please try again later.</b>,
                }
            );
    }

    return (
        <>
            <div className="flex flex-col mt-10">

                <div className="m-5">
                    <div className="flex flex-col lg:flex-row justify-center md:justify-between">

                        <div className="m-3 w-[90%] lg:max-w-[40%] xl:max-w-2xl text-white space-y-7">
                            <h2 className='text-3xl sm:text-5xl font-bold'>Receive <span className='text-krutNeon'>messages</span> from the future</h2>
                            <div className="flex">
                                <input className='w-[70%] bg-transparent border border-white rounded px-3 py-0.5' type="text" placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className='ms-5 sm:ms-10 border border-white w-8 h-8 rounded-full flex justify-center items-center 
                                hover:bg-white hover:text-black'
                                    onClick={() => handleUserSubscribe()}
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>

                            <img src={logo} alt="Krut logo" className='w-[180px] sm:w-[250px] ' />

                        </div>

                        <div className=" flex text-white m-5 justify-center xl:space-x-10 xl:px-10">

                            <div className='px-3 sm:px-6'>
                                <h3 className="text-lg sm:text-xl font-semibold  mt-4 mb-2">Company</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li>Community</li>
                                    <li className='cursor-pointer' onClick={() => Navigate('/blogs')}>Blogs</li>
                                    <li>Tutorials</li>
                                    <li className='cursor-pointer' onClick={() => Navigate('/pricing')}>Pricing</li>
                                    <li className='cursor-pointer' onClick={() => Navigate('/contact')}>Contact Us</li>
                                    <li>Legal</li>
                                    {/* <li className='hidden lg:block'>Pricing</li>
                                    <li className='hidden lg:block'>Contact Us</li>
                                    <li className='hidden lg:block'>Legal</li> */}
                                </ul>
                            </div>
                            {/* <div className='px-3 sm:px-6 block lg:hidden'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Company</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li>Pricing</li>
                                    <li>Contact Us</li>
                                    <li>Legal</li>
                                </ul>
                            </div> */}
                            <div className='px-3 sm:px-6'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Tools</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[0]?.link)}>{cardData[0]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[1]?.link)}>{cardData[1]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[2]?.link)}>{cardData[2]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[3]?.link)}>{cardData[3]?.title}</li>
                                </ul>
                            </div>
                            <div className='px-3 sm:px-6'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Tools</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[4]?.link)}>{cardData[4]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[5]?.link)}>{cardData[5]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[6]?.link)}>{cardData[6]?.title}</li>
                                    <li className='cursor-pointer' onClick={() => Navigate(cardData[7]?.link)}>{cardData[7]?.title}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* social links */}
                <div className="py-5 w-full px-3 ">
                    <div className="flex justify-center items-center">
                        <div className="flex space-x-12 md:space-x-5">
                            <a href="https://discord.gg/vf2jJxEVn7" target="_blank">
                                <img className='h-8 zoomEffect' src="/icons/discord.png" alt="discord" />
                            </a>
                            <a href="https://www.linkedin.com/company/krut-ai/?viewAsMember=true" target="_blank">
                                <img className='h-8 zoomEffect' src="/icons/linkedIn.png" alt="linkedIn" />
                            </a>
                            <a href="https://www.instagram.com/_krut.ai/" target="_blank">
                                <img className='h-8 zoomEffect' src="/icons/instagram.png" alt="instagram" />
                            </a>
                            <a href="https://twitter.com/krutAI_" target="_blank">
                                <img className='h-8 zoomEffect' src="/icons/x.png" alt="x" />
                            </a>
                        </div>
                    </div>

                    <div className="text-center text-white mt-8 my-3">
                        <p>Privacy Policy | Terms & Conditions</p>
                        <p>@2024 Krut AI</p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer