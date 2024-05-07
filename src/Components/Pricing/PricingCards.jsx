import React, { useState } from 'react';
import { pricingTable } from '../../assets/pricingTable';
import { useNavigate } from 'react-router-dom';

function PricingCards({ isMonthly, isExpanded, isHomePage = false }) {
    const [plusMultiplier, setPlusMultiplier] = useState(1);  //multiplier for no of users _ plus
    const [proMultiplier, setProMultiplier] = useState(1);  //multiplier for no of users _ pro
    const Navigate = useNavigate();

    return (
        <>
            {/* ======== Pricing Cards ========= */}
            <div className={`w-full ${isExpanded ? "block" : "hidden xl:block"}`}>
                <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-evenly overflow-hidden">
                    {pricingTable && pricingTable.map((list, index) =>

                        <div key={index} className="border-2 border-krutNeon border-opacity-40 text-white rounded-3xl h-full mx-8 sm:mx-4 xl:mx-8 max-w-[468px] mt-14 sm:my-5" >

                            {/* Best value Ribbon */}
                            <div className={`flex w-full justify-end relative mt-6 ms-9 ${list?.title !== "Pro" ? "opacity-0" : ""}`}>
                                <div className="text-white text-center p-1 w-36"
                                    style={{
                                        transform: 'rotate(45deg)', background: 'linear-gradient(76.49deg, #FFFFFF -13.8%, #D155E0 1.49%, #00979F 51.08%)',
                                        clipPath: 'polygon(21% 0, 78% 0, 100% 100%, 0% 100%)'
                                    }}>
                                    <span className='text-bold'>Best Value</span>
                                </div>
                            </div>

                            <div className="p-7 pt-0 w-full">
                                <h1 className="font-semibold text-3xl sm:text-4xl lg:5xl  mb-4">{list?.title}</h1>
                                <p className="text-base sm:text-xl font-light mb-4 text-wrap">{list?.description}</p>
                                <h1 className="font-semibold text-2xl sm:text-3xl lg:4-xl mb-4">${(list?.title !== "Plus" ? plusMultiplier : proMultiplier) * (isMonthly ? list?.priceMonthly : list?.priceYearly)}/month*</h1>

                                <br />

                                {!isHomePage && <div className="hidden xl:block h-16 mb-3">
                                    <div className="flex items-center justify-center h-full relative">
                                        {list?.title !== "Free" && <div className="w-[75%]">

                                            {/* Multiplier value */}
                                            <div className="absolute z-50"
                                                style={{
                                                    marginLeft: `${(((list?.title !== "Plus" ? plusMultiplier : proMultiplier) - 1) * (73 / 11)) + 5.5}%`
                                                }}  >
                                                <div className="flex" >
                                                    <span className="multiplier-value relative text-black text-lg font-semibold w-[30px] h-[30px] mt-2 pointer-events-none" >
                                                        {(list?.title !== "Plus" ? plusMultiplier : proMultiplier)}x
                                                    </span>
                                                </div>
                                            </div>

                                            {/* slider */}
                                            <input type="range" id={`Multiplier_${index}`} name={`Multiplier_${index}`} list="markers" min="1" max="10"
                                                className="w-full accent-white border-gray-300 cursor-ew-resize relative h-[50px]"
                                                style={{
                                                    borderRadius: '25px', // Set border radius to half of the height for a circular slider
                                                    background: 'linear-gradient(to right, #00D4EF 0%, #FFF calc((var(--range-value) - 1) * 10%), #000000 calc(var(--range-value) * 10%), #000000 100%)', // Set background gradient
                                                    outline: 'white solid 1px', // Set white outline
                                                    appearance: 'none', // Remove default styles
                                                    '--range-value': (list?.title !== "Plus" ? plusMultiplier : proMultiplier) // Set custom property for the current value
                                                }}
                                                value={(list?.title !== "Plus" ? plusMultiplier : proMultiplier)}
                                                onChange={(e) => {
                                                    if (list?.title !== "Plus") {
                                                        setPlusMultiplier(parseInt(e.target.value))
                                                    } else if (list?.title !== "Pro") {
                                                        setProMultiplier(parseInt(e.target.value))
                                                    }
                                                }}
                                            />

                                            <div className="text-center">
                                                <p className='text-sm'>More Than 10 Users? <span className='text-krutNeon cursor-pointer' onClick={() => Navigate('/contact')}>
                                                    Contact<span className='text-transparent text-xs'>.</span>Us</span>
                                                </p>
                                            </div>
                                        </div>
                                        }
                                    </div>

                                </div>}


                                <div className="flex items-center justify-center">

                                    <button className="zoomEffect text-black text-xl sm:text-2xl xl:text-3xl justify-center px-6 py-3 w-[75%] font-bold rounded-[1.5rem] mt-7 cursor-pointer"
                                        onClick={() => Navigate('/contact')}
                                        style={{
                                            backgroundImage: list?.title === "Pro" ?
                                                'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' :
                                                'linear-gradient(180deg, #FFFFFF 60.19%, #000000 325.69%)'
                                        }}>
                                        {list?.buttonText}
                                    </button>

                                </div>
                            </div>


                            {isExpanded && <div className=" bg-white  text-gray-500 text-base sm:text-lg leading-8 sm:leading-10 rounded-t-3xl rounded-b-3xl px-5 py-5 tracking-tight">
                                <p> &#x2713;  <span className='ms-3'>{list?.storage} GB Storage</span></p>
                                <p> &#x2713;  <span className='ms-3'>{list?.iStock} Photos by iStock</span></p>
                                <p>&#x2713;  <span className='ms-3'>Unlimited Projects</span></p>
                                <p>&#x2713;  <span className='ms-3'>Watermark {list?.watermark}</span></p>
                                <p>&#x2713;  <span className='ms-3'>Unlock {list?.backgrounds} Backgrounds</span></p>

                            </div>}
                        </div>
                    )}
                </div>
            </div>

            {isExpanded && <div className="flex justify-center items-center my-10">
                {isHomePage ?
                    <button className='text-white text-xl rounded-3xl border border-krutNeon hover:bg-krutNeon hover:text-black zoomEffect py-1.5 px-10' 
                    onClick={() => Navigate("/pricing")} >
                        Compare
                    </button>
                    :
                    <a href="#CompareChart" >
                        <button className='text-white text-xl rounded-3xl border border-krutNeon hover:bg-krutNeon hover:text-black zoomEffect py-1.5 px-10'>Compare</button>
                    </a>
                }
            </div>}
        </>
    )
}

export default PricingCards