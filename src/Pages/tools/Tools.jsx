import React, { useEffect, useState } from "react";
import IntroTools from "../../Components/tools/IntroTools";
import ToolSlider from "../../Components/tools/ToolSlider";

import ToolsList from "../../Components/Home/ToolsList";
import cardData from "../../Data/CardData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Tools = () => {
  const [ToolData, setToolData] = useState(cardData[0]);
  const location = useLocation();

  useEffect(() => {
    const location = window.location.search.split('=')[1];
    const keywords = location.split('%20');
    const data = cardData.filter((item) => item.title.includes(keywords[0]) && ((keywords[1]) ? item.title.includes(keywords[1]) : true));
    setToolData(data[0]);
  }, [location.search])

  return (
    <>
      <Header />
      <IntroTools
        heading={ToolData?.title}
        description={ToolData?.description}
        video={ToolData?.gif}>
      </IntroTools>

      <ToolSlider
        beforeImg={ToolData?.beforeImg}
        afterImg={ToolData?.afterImg}>
      </ToolSlider>

      <ToolsList />
      <Footer />
    </>

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
        question: "What is the easiest way to use AI image generators?",
        answer:
          "Open Krut.ai's Product Studio, just input the  prompt or take a recommendation and get your image in seconds.",
      },
      {
        question: "What are the disadvantages of upscaling?",
        answer:
          "OpWhile there are cons of image upscaling like Loss of quality, limited effectiveness, and a restriction of file size, Krut.Ai's Image Upscaler helps you overcome them so there are near to zero disadvantages of upscaling.",
      },
      {
        question: "What is the better alternative for generative fill?         ",
        answer:
          "Krut AI is a free AI image generator tool, which offers a huge collection of AI tools to generate and alter your pictures. Its Magic Replace feature works like Photoshop's Generative Fill, but it'seven easier to use..",
      },
      {
        question: "How to remove multiple objects from a picture? ",
        answer:
          "Krut AI is a free AI image generator tool, which offers a huge collection of AI tools to generate and alter your pictures. Its Magic Replace feature works like Photoshop's Generative Fill, but it'seven easier to use..",
      },
      {
        question: "Can I use AI-generated images for commercial use? ",
        answer:
          "Our terms do not limit your usage but if you want to check for other AI image generators, go to their legal section to know more.",
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
