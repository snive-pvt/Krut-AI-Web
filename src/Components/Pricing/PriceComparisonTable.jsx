import React, { useState } from 'react'
import { useEffect } from 'react';
import { comparisonTable, comparisonTableDemo } from '../../assets/pricingTable'

function PriceComparisonTable() {
    const [PricingDetails, setPricingDetails] = useState(comparisonTableDemo);
    const [isPricingExpanded, setIsPricingExpanded] = useState(false);


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
                                                <span className={`material-symbols-outlined pe-1 md:block
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage") ? "hidden" : ""} `}>
                                                    {PricingDetails[0][key] === "Not Included" ? "close" : "done"}
                                                </span>
                                                <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                    (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage" ) ? "" : "hidden"} md:block`}>
                                                    {PricingDetails[0][key]}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="py-3">
                                            <div className="flex items-center">
                                                <span className={`material-symbols-outlined pe-1 md:block 
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage") ? "hidden" : ""}  `}>
                                                    {PricingDetails[1][key] === "Not Included" ? "close" : "done"}
                                                </span>
                                                <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                    (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage") ? "" : "hidden"} md:block`}>
                                                    {PricingDetails[1][key]}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="py-3">
                                            <div className="flex items-center">
                                                <span className={`material-symbols-outlined pe-1 md:block 
                                                    ${(key === "Availability" || key === "Contact Method") ||
                                                        (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage") ? "hidden" : ""}  `}>
                                                    {PricingDetails[2][key] === "Not Included" ? "close" : "done"}
                                                </span>
                                                <span className={`${(key === "Availability" || key === "Contact Method") ||
                                                    (key === "Number of Downloads (per month)" || key === "Download Format" || key === "Storage") ? "" : "hidden"} md:block`}>
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
                <button className='bg-white rounded-full border h-12 w-12 flex justify-center items-center hover:bg-krutNeon zoomEffect'
                    onClick={setPricingExpandView}
                >
                    <span className={`material-symbols-outlined ${isPricingExpanded ? "rotate-180" : ""}`}>  expand_more </span>
                </button>
            </div>

            <br />
        </>
    )
}

export default PriceComparisonTable