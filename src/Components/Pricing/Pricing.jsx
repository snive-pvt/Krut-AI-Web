import React, { useState } from 'react'
import Header from '../Header/Header'
import "./pricing.css"

function Pricing() {
    const linearGreenBackground = {
        backgroundColor: 'black',
        backgroundImage: `url("/images/Green_shade.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    const [Multiplier, setMultiplier] = useState(1)


    return (
        <div className='min-h-screen'>
            {/* <Header /> */}
            <div className="h-[624px] w-full absolute top-0 -z-50" style={linearGreenBackground}></div>

            <div className="flex items-center justify-center w-full py-10">
                <h1 className='text-white text-4xl sm:text-7xl lg:text-[96px] font-bold '>The <span className='text-krutNeon'>Right Plans</span></h1>
            </div>

            <div className="flex items-center justify-center w-full py-10">
                <div class="container w-[200px] sm:w-[300px] lg:w-[400px]">
                    <div class="tabs">
                        <input className='py-3' type="radio" id="radio-1" name="tabs" checked="" />
                        <label class="tab h-10 sm:h-12" for="radio-1">Monthly</label>
                        <input className='py-3' type="radio" id="radio-2" name="tabs" />
                        <label class="tab h-10 sm:h-12" for="radio-2">Yearly</label>
                        <span class="glider h-10 sm:h-12"></span>
                    </div>
                </div>
            </div>

            <div className="border-2 border-krutNeon border-opacity-40 text-white rounded-3xl h-full w-[468px] mt-5" >
                <div className="p-7">
                    <h1 className="font-semibold text-5xl mb-4">Plus</h1>
                    <p className=" text-lg font-light mb-4 ">Meet your goals and accomplish more with Advanced AI features.</p>
                    <h1 className="font-semibold text-4xl mb-4">$20/month*</h1>

                    <br />
                    
                    <div className="h-16 mb-3">

                            <div className="">
                                <h5 className="text-start font-medium  text-violetTxt">{Multiplier}x</h5>
                            </div>
                        <div className="flex items-center justify-center h-full">
                            {/* slider */}
                            <input
                                type="range"
                                id="Multiplier"
                                name="Multiplier"
                                list="markers"
                                min="1"
                                max="12"
                                className="w-[70%] accent-white border-gray-300 cursor-ew-resize"
                                style={{
                                    height: '50px', // Set height to 30px
                                    borderRadius: '1.5rem', // Set border radius to half of the height for a circular slider
                                    background: 'black', // Set inner part color to black
                                    outline: 'white solid 1px', // Set white outline
                                    appearance: 'none', // Remove default styles
                                }}
                                value={Multiplier}
                                onChange={(e) => setMultiplier(parseInt(e.target.value))}
                            />
                        </div>


                    </div>

                    <div className="flex items-center justify-center">
                        <button className="text-black text-3xl justify-center px-6 py-3 w-[70%] font-semibold rounded-[1.5rem] bg-gradient-to-b from-white via-gray-300 to-gray-500 mt-7">
                            Get Plus
                        </button>
                    </div>
                </div>
                <div className=" bg-white  text-gray-500 text-lg leading-10 rounded-t-3xl rounded-b-3xl px-5 py-5 tracking-tight">
                    <p> &#x2713;  <span className='ms-3'>50GB Storage</span></p>
                    <p> &#x2713;  <span className='ms-3'>Unlimited Photos by iStock</span></p>
                    <p>&#x2713;  <span className='ms-3'>Unlimited Projects</span></p>
                    <p>&#x2713;  <span className='ms-3'>Watermark Not Included</span></p>
                    <p>&#x2713;  <span className='ms-3'>Unlock 150 Background</span></p>

                </div>
            </div>


        </div>
    )
}

export default Pricing