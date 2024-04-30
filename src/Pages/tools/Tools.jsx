import React from "react";
import IntroTools from "../../Components/tools/IntroTools";
import ToolSlider from "../../Components/tools/ToolSlider";
import Faq from "../../Components/faq/Faq";

const Tools = () => {
  const faqData = {
    title: "Frequently Asked Questions",

    mainImage: "https://via.placeholder.com/606x614",
    faqs: [
      {
        question: "What is the best free AI art generator?",
        answer:
          "There are many free image generators available online like Dall-E 3, Microsoft Designer, Dream  Studio, etc but one that stands out is our art generator: Krut.AI",
      },
      {
        question: "How do I get free model photographs?",
        answer:
          `You can get started with the model studio given on krut.ai to get model photographs for free.
          `,
      },
      {
        question: "Lorem ipsum dolor sit amet.",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet semper lacus. Integer sit amet ipsum ac turpis.",
      },
    ],
  };

  return (
    <div>
      <IntroTools heading="Product Studio"></IntroTools>
      {/* <ToolSlider /> */}
      <Faq {...faqData} />
    </div>
  );
};

export default Tools;
