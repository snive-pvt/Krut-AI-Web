import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import "./pricing.css"
import Footer from '../../Components/Footer/Footer'
import { comparisonTable, comparisonTableDemo, pricingTable } from '../../assets/pricingTable'
import GetStarted from '../../Components/GetStarted/GetStarted'

function Pricing() {
    const [plusMultiplier, setPlusMultiplier] = useState(1);  //multiplier for no of users _ plus
    const [proMultiplier, setProMultiplier] = useState(1);  //multiplier for no of users _ pro
    const [isMonthly, setIsMonthly] = useState(false);  //boolean for monthly or yearly
    const [isPricingExpanded, setIsPricingExpanded] = useState(false);
    const [PricingDetails, setPricingDetails] = useState(comparisonTableDemo);

    const linearGreenBackground = {
        backgroundColor: 'black',
        backgroundImage: `url("/images/Green_shade.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    const [talkToUsBackground, setTalkToUsBackground] = useState({
        backgroundColor: 'black',
        backgroundImage: `url("/images/pricingPageBanner.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    });


    useEffect(() => {
        // Function to update the background image URL based on screen size
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Assuming lg breakpoint is 768px
                setTalkToUsBackground({
                    ...talkToUsBackground,
                    backgroundImage: `url("/images/pricingPageBannerLg.png")`,
                });
            } else {
                setTalkToUsBackground({
                    ...talkToUsBackground,
                    backgroundImage: `url("/images/pricingPageBanner.png")`,
                });
            }
        };

        // Call handleResize initially and on window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    useEffect(() => {
        if (isPricingExpanded) {
            setPricingDetails(comparisonTable);
        } else {
            setPricingDetails(comparisonTableDemo);
        }
    }, [isPricingExpanded]);


    function setPricingExpandView() {
        isPricingExpanded ? setIsPricingExpanded(false) : setIsPricingExpanded(true);
        if (isPricingExpanded) {
            const PriceListElement = document.getElementById('CompareChart');
            if (PriceListElement) {
                PriceListElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <>
            <div className='min-h-screen'>
                {/* <Header /> */}
                <div className="h-[624px] w-full absolute top-0 -z-50" style={linearGreenBackground}></div>

                <div className="flex items-center justify-center w-full py-10">
                    <h1 className='text-white text-4xl sm:text-7xl xl:text-[96px] font-bold '>The <span className='text-krutNeon'>Ideal Plans</span></h1>
                </div>

                <div className="flex items-center justify-center w-full pb-10 sm:py-10">
                    <div className="container w-[200px] sm:w-[300px] lg:w-[400px]">
                        <div className="tabs">
                            <input className='py-3' type="radio" id="radio-1" name="tabs" checked={isMonthly} onChange={(e) => { setIsMonthly(e.target.checked) }} />
                            <label className="tab h-10 sm:h-12 lg:text-xl" htmlFor="radio-1">Monthly</label>
                            <input className='py-3' type="radio" id="radio-2" name="tabs" checked={!isMonthly} onChange={(e) => { setIsMonthly(!e.target.checked) }} />
                            <label className="tab h-10 sm:h-12 lg:text-xl" htmlFor="radio-2">Yearly</label>
                            <span className="glider h-10 sm:h-12"></span>
                        </div>
                    </div>
                </div>


                {/* ======== Pricing Cards ========= */}
                <div className="w-full">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
                        {pricingTable && pricingTable.map((list, index) =>

                            <div key={index} className="border-2 border-krutNeon border-opacity-40 text-white rounded-3xl h-full mx-8 sm:mx-4 xl:mx-8 max-w-[468px] mt-14 sm:my-5" >

                                {/* Best value Ribbon */}
                                <div className={`flex w-full justify-end relative mt-5 ms-9 ${list?.title !== "Pro" ? "opacity-0" : ""}`}>
                                    <div className="text-white text-center p-1 w-36"
                                        style={{ transform: 'rotate(45deg)', background: 'linear-gradient(76.49deg, #FFFFFF -13.8%, #D155E0 1.49%, #00979F 51.08%)', 
                                        clipPath: 'polygon(21% 0, 78% 0, 100% 100%, 0% 100%)' }}>
                                        <span className='text-bold'>Best Value</span>
                                    </div>
                                </div>

                                <div className="p-7 pt-0 w-full">
                                    <h1 className="font-semibold text-3xl sm:text-4xl lg:5xl  mb-4">{list?.title}</h1>
                                    <p className="text-sm sm:text-base font-light mb-4 text-wrap">{list?.description}</p>
                                    <h1 className="font-semibold text-2xl sm:text-3xl lg:4-xl mb-4">${(list?.title !== "Plus" ? plusMultiplier : proMultiplier) * (isMonthly ? list?.priceMonthly : list?.priceYearly)}/month*</h1>

                                    <br />

                                    <div className="h-16 mb-3">
                                        <div className="flex items-center justify-center h-full relative">
                                            {list?.title !== "Free" && <div className="w-[75%]">

                                                {/* Multiplier value */}
                                                <div className="absolute z-50"
                                                    style={{
                                                        marginLeft: `${(((list?.title !== "Plus" ? plusMultiplier : proMultiplier) - 1) * (72.5 / 11)) + 4.5}%`
                                                    }}  >
                                                    <div className="flex" >
                                                        <span className="multiplier-value relative text-black text-lg font-semibold w-[30px] h-[30px] mt-2" >
                                                            {(list?.title !== "Plus" ? plusMultiplier : proMultiplier)}x
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* slider */}
                                                <input type="range" id={`Multiplier_${index}`} name={`Multiplier_${index}`} list="markers" min="1" max="10"
                                                    className="w-full accent-white border-gray-300 cursor-ew-resize relative h-[50px]"
                                                    style={{
                                                        borderRadius: '25px', // Set border radius to half of the height for a circular slider
                                                        background: 'linear-gradient(to right, #00D4EF 0%, #00D4EF calc((var(--range-value) - 1) * 10%), #000000 calc(var(--range-value) * 10%), #000000 100%)', // Set background gradient
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
                                                    <p className='text-sm'>More Than 10 Users? <span className='text-krutNeon'>
                                                        Contact<span className='text-transparent text-xs'>.</span>Us</span>
                                                    </p>
                                                </div>
                                            </div>
                                            }
                                        </div>

                                    </div>


                                    <div className="flex items-center justify-center">

                                        <button className="text-black text-xl sm:text-2xl xl:text-3xl justify-center px-6 py-3 w-[75%] font-bold rounded-[1.5rem] mt-7" style={{
                                            backgroundImage: list?.title === "Pro" ?
                                                'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' :
                                                'linear-gradient(180deg, #FFFFFF 60.19%, #000000 325.69%)'
                                        }}>
                                            {list?.buttonText}
                                        </button>

                                    </div>
                                </div>


                                <div className=" bg-white  text-gray-500 text-base sm:text-lg leading-8 sm:leading-10 rounded-t-3xl rounded-b-3xl px-5 py-5 tracking-tight">
                                    <p> &#x2713;  <span className='ms-3'>{list?.storage} GB Storage</span></p>
                                    <p> &#x2713;  <span className='ms-3'>{list?.iStock} Photos by iStock</span></p>
                                    <p>&#x2713;  <span className='ms-3'>Unlimited Projects</span></p>
                                    <p>&#x2713;  <span className='ms-3'>Watermark {list?.watermark}</span></p>
                                    <p>&#x2713;  <span className='ms-3'>Unlock {list?.backgrounds} Background</span></p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-center items-center my-10">
                    <a href="#CompareChart" >
                        <button className='text-white text-xl rounded-3xl border border-krutNeon py-1.5 px-10'>Compare</button>
                    </a>
                </div>

                {/* ======== Talk to Us ========= */}
                <div className="px-8 sm:px-4 xl:px-8 mb-16">
                    <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full rounded-3xl p-10" style={talkToUsBackground}>
                        <div className="">
                            <div className="max-w-sm lg:max-w-full text-white font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:space-y-4">
                                <p className='block md:hidden'>Ready to start on your AI journey? Let's find your Ideal Krut Plan together.</p>
                                <p className='hidden md:block'>Ready to start on your AI journey? </p>
                                <p className='hidden md:block'>Let's find your Ideal Krut Plan together.</p>
                            </div>
                        </div>
                        <div className="lg:w-full lg:flex lg:justify-end lg:mt-44"> {/* Change: Added justify-end */}
                            <button className='max-w-[200px] bg-white text-xl rounded-3xl mb-5 mt-8 py-1.5 px-10 font-semibold'>
                                Talk to Us
                            </button>
                        </div>
                    </div>
                </div>


                {/* ======== Mini Pricing Cards ========= */}
                <div className="w-full scroll-mt-20" id='CompareChart'>
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
                        {pricingTable && pricingTable.map((list, index) =>
                            <div key={index} className="border-2 border-krutNeon border-opacity-40 text-white rounded-3xl h-full mx-8 sm:mx-4 xl:mx-8 max-w-[468px] mt-14 sm:my-5" >
                               
                                {/* Best value Ribbon */}
                                <div className={`flex w-full justify-end relative mt-5 ms-9 ${list?.title !== "Pro" ? "opacity-0" : ""}`}>
                                    <div className="text-white text-center p-1 w-36"
                                        style={{ transform: 'rotate(45deg)', background: 'linear-gradient(76.49deg, #FFFFFF -13.8%, #D155E0 1.49%, #00979F 51.08%)', 
                                        clipPath: 'polygon(21% 0, 78% 0, 100% 100%, 0% 100%)' }}>
                                        <span className='text-bold'>Best Value</span>
                                    </div>
                                </div>
                               
                                <div className="p-7 w-full">
                                    <h1 className="font-semibold text-3xl sm:text-4xl lg:5xl  mb-4">{list?.title}</h1>
                                    <p className="text-sm sm:text-base font-light mb-4 text-wrap">{list?.description}</p>
                                    <h1 className="font-semibold text-2xl sm:text-3xl lg:4-xl mb-4">${(list?.title !== "Plus" ? plusMultiplier : proMultiplier) * (isMonthly ? list?.priceMonthly : list?.priceYearly)}/month*</h1>

                                    <br />

                                    <div className="h-16 mb-3">
                                        <div className="flex items-center justify-center h-full relative">
                                            {list?.title !== "Free" && <div className="w-[75%]">

                                                {/* Multiplier value */}
                                                <div className="absolute z-50"
                                                    style={{
                                                        marginLeft: `${(((list?.title !== "Plus" ? plusMultiplier : proMultiplier) - 1) * (72.5 / 11)) + 4.5}%`
                                                    }}  >
                                                    <div className="flex" >
                                                        <span className="multiplier-value relative text-black text-lg font-semibold w-[30px] h-[30px] mt-2" >
                                                            {(list?.title !== "Plus" ? plusMultiplier : proMultiplier)}x
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* slider */}
                                                <input type="range" id={`Multiplier_${index}`} name={`Multiplier_${index}`} list="markers" min="1" max="10"
                                                    className="w-full accent-white border-gray-300 cursor-ew-resize relative h-[50px]"
                                                    style={{
                                                        borderRadius: '25px', // Set border radius to half of the height for a circular slider
                                                        background: 'linear-gradient(to right, #00D4EF 0%, #00D4EF calc((var(--range-value) - 1) * 10%), #000000 calc(var(--range-value) * 10%), #000000 100%)', // Set background gradient
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
                                                    <p className='text-sm'>More Than 10 Users? <span className='text-krutNeon'>
                                                        Contact<span className='text-transparent text-xs'>.</span>Us</span>
                                                    </p>
                                                </div>
                                            </div>
                                            }
                                        </div>

                                    </div>


                                    <div className="flex items-center justify-center">

                                        <button className="text-black text-xl sm:text-2xl xl:text-3xl justify-center px-6 py-3 w-[75%] font-bold rounded-[1.5rem] mt-7" style={{
                                            backgroundImage: list?.title === "Pro" ?
                                                'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' :
                                                'linear-gradient(180deg, #FFFFFF 60.19%, #000000 325.69%)'
                                        }}>
                                            {list?.buttonText}
                                        </button>

                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>



                {/* ======== Price comparison Table ========= */}
                <div className="rounded-3xl bg-white mx-8  lg:mx-16 2xl:mx-24 mt-10 p-10 overflow-x-scroll md:overflow-hidden">
                    <table className="w-full text-start text-sm lg:text-base">
                        <thead>
                            <tr className="border-b border-gray-400">
                                <th className="py-3"></th>
                                <th className="py-3 text-start">Free</th>
                                <th className="py-3 text-start">Plus</th>
                                <th className="py-3 text-start">Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(PricingDetails[0]).map((key, index) => {
                                if (key !== "title") {
                                    return (
                                        <tr key={index} className="border-b border-gray-400">
                                            <td className="py-3">{key}</td>
                                            <td className="py-3">
                                                <div className="flex items-center">
                                                    <span class={`material-symbols-outlined pe-1 md:block
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                            (key === "Number of Downloads (per month)" || key === "Download Format") ? "hidden" : ""} `}>
                                                        {PricingDetails[0][key] === "Not Included" ? "close" : "done"}
                                                    </span>
                                                    <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format") ? "" : "hidden"} md:block`}>
                                                        {PricingDetails[0][key]}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="py-3">
                                                <div className="flex items-center">
                                                    <span class={`material-symbols-outlined pe-1 md:block 
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                            (key === "Number of Downloads (per month)" || key === "Download Format") ? "hidden" : ""}  `}>
                                                        {PricingDetails[1][key] === "Not Included" ? "close" : "done"}
                                                    </span>
                                                    <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format") ? "" : "hidden"} md:block`}>
                                                        {PricingDetails[1][key]}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="py-3">
                                                <div className="flex items-center">
                                                    <span class={`material-symbols-outlined pe-1 md:block 
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                            (key === "Number of Downloads (per month)" || key === "Download Format") ? "hidden" : ""}  `}>
                                                        {PricingDetails[2][key] === "Not Included" ? "close" : "done"}
                                                    </span>
                                                    <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format") ? "" : "hidden"} md:block`}>
                                                        {PricingDetails[2][key]}
                                                    </span>
                                                </div>
                                            </td>

                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-center relative -mt-6">
                    <button className='bg-white rounded-full border h-12 w-12 flex justify-center items-center'
                        onClick={setPricingExpandView}
                    >
                        <span class={`material-symbols-outlined ${isPricingExpanded ? "rotate-180" : ""}`}>  expand_more </span>
                    </button>
                </div>

                <br />

                {/* ==============  FAQ  ============ */}



                <GetStarted />
                <Footer />

            </div>
        </>
    )
}

export default Pricing