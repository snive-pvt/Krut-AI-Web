import React from 'react'
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

                    <div className="flex items-center justify-center">
                        <button className="text-black justify-center px-6 py-1 font-semibold rounded-2xl bg-gradient-to-b from-white via-gray-300 to-gray-500 mb-5">Get Plus</button>
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