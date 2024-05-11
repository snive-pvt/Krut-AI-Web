import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const Navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  lg:mt-10 flex flex-col justify-center items-center px-6 lg:px-[79px] bg-transparent mx-auto py-8">
      <div className="w-full mb-2 text-2xl  text-center text-white md:text-5xl font-semibold ">
        Frequently Asked Questions
      </div>

      <div className="flex flex-col justify-center items-center mt-10 md:flex-row gap-11">
        <div className="w-full md:w-[600px] full">
          {faqs &&
            faqs.map((faq, index) => (
              <div
                key={index}
                className={`mb-4 rounded-md border overflow-hidden ${openIndex === index ? "border" : ""
                  }`}
              >
                <div
                  className="w-full flex items-center justify-between cursor-pointer p-4"
                  onClick={() => handleToggle(index)}
                >
                  <h2
                    className={`text-lg text-white md:text-xl font-bold ${openIndex === index ? "text-white" : ""
                      }`}
                  >
                    {faq.question}
                  </h2>
                  <span>
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15 12.5L10 7.5L5 12.5"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15 12.5L10 7.5L5 12.5"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p
                    className="p-4 text-white text-sm  md:text-base"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                )}
              </div>
            ))}

        </div>
      </div>
      <div className="text-white">
        <p>Can't find what your're looking for?
          <span onClick={()=> Navigate("/contact")} className="text-krutNeon font-bold cursor-pointer"> Contact our Support</span>
        </p>
      </div>
    </div>
  );
};

export default Faq;
