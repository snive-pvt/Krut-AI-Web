
import React from 'react'

function HeroPricing({isMonthly, setIsMonthly}) {

    const linearGreenBackground = {
        backgroundColor: 'black',
        backgroundImage: `url("/images/Green_shade.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <>
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
                        <label className="tab h-10 sm:h-12 lg:text-xl" htmlFor="radio-2">Yearly<span className='ps-2 text-base text-blue-800'>(20% off)</span></label>
                        <span className="glider h-10 sm:h-12"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroPricing