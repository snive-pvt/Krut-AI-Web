import React, { useState } from 'react'
import logo from "../../assets/Images/image_prev_ui (2).png"
import { useNavigate } from 'react-router-dom'
import { subscribeAPI } from '../../utils/APIservice';

function Footer() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("")

    //---------------_ Handle User Login ----------------------------------
    async function handleUserSubscribe(e) {
        e.preventDefault()
        if (!email) return alert("Please fill in all fields")

        const response = await subscribeAPI({ email });
        console.log(response)//test

        if (response?.status) {
            alert("subscribed successfully");
        } else {
            alert("try later");
        }
    }


    return (
        <>
            <div className="flex flex-col mt-10">

                <div className="m-5">
                    <div className="flex flex-col lg:flex-row justify-center md:justify-between">

                        <div className="m-3 w-[90%] lg:max-w-[40%] xl:max-w-2xl text-white space-y-7">
                            <h2 className='text-3xl sm:text-5xl font-bold'>Receive <span className='text-krutNeon'>messages</span> from the future</h2>
                            <div className="flex">
                                <input className='w-[70%] bg-transparent border border-white rounded px-3 py-0.5' type="text" placeholder='Email' />
                                <button className='ms-5 sm:ms-10 border border-white w-8 h-8 rounded-full flex justify-center items-center'>
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
                                    <li>Product Studio</li>
                                    <li>Model Studio</li>
                                    <li>Banner Generation</li>
                                    <li>Background Remover</li>
                                </ul>
                            </div>
                            <div className='px-3 sm:px-6'>

                                <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">Tools</h3>
                                <ul className='text-sm sm:text-lg font-thin'>
                                    <li>Upscaler</li>
                                    <li>Magic Remove</li>
                                    <li>Magic Replace</li>
                                    <li>Outpaint</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* social links */}
                <div className="py-5 w-full px-3 ">
                    <div className="flex justify-center items-center">
                        <div className="flex space-x-12 md:space-x-5">
                            <a href="http://discord.com" target="_blank">
                                <img className='h-8' src="/icons/discord.png" alt="discord" />
                            </a>
                            <a href="https://www.linkedin.com/company/krut-ai/?viewAsMember=true" target="_blank">
                                <img className='h-8' src="/icons/linkedIn.png" alt="linkedIn" />
                            </a>
                            <a href="https://www.instagram.com/_krut.ai/" target="_blank">
                                <img className='h-8' src="/icons/instagram.png" alt="instagram" />
                            </a>
                            <a href="https://twitter.com/krutAI_" target="_blank">
                                <img className='h-8' src="/icons/x.png" alt="x" />
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