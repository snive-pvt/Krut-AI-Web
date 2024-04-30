import React, { useEffect, useState } from "react";
import IntroTools from "../../Components/tools/IntroTools";
import ToolSlider from "../../Components/tools/ToolSlider";
import Faq from "../../Components/faq/Faq";
import ToolsList from "../../Components/Home/ToolsList";
import cardData from "../../Data/CardData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { faqData } from "../../Data/faqData";

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
        video={ToolData?.video}>
      </IntroTools>

      <ToolSlider
        beforeImg={ToolData?.beforeImg}
        afterImg={ToolData?.afterImg}>
      </ToolSlider>

      <ToolsList />
      <Faq {...faqData} />
      <Footer />
    </>
  )
}

export default Tools;
