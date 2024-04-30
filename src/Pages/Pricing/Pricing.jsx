import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import "./pricing.css"
import Footer from '../../Components/Footer/Footer'
// import GetStarted from '../../Components/GetStarted/GetStarted'
import PriceComparisonTable from '../../Components/Pricing/PriceComparisonTable'
import TalkToUsComponent from '../../Components/Pricing/TalkToUsComponent'
import HeroPricing from '../../Components/Pricing/HeroPricing'
import PricingCards from '../../Components/Pricing/PricingCards'

function Pricing() {
    const [isMonthly, setIsMonthly] = useState(false);  //boolean for monthly or yearly

    return (
        <>
            <div className='min-h-screen'>
                <Header />
                <HeroPricing isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
                <PricingCards isMonthly={isMonthly} isExpanded={true} />
                <TalkToUsComponent />
                <div id='CompareChart' className='scroll-mt-10'></div>
                <PricingCards isMonthly={isMonthly} isExpanded={false} />
                <PriceComparisonTable />

                {/* ==============  FAQ  ============ */}

                {/* <GetStarted /> */}
                <Footer />
            </div>
        </>
    )
}

export default Pricing