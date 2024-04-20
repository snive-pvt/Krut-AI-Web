import React from "react";
import Header from "../../Components/Header/Header";
import Comp2Gif from "../../assets/Images/Comp2.gif";
import bgVector from "../../assets/Images/vector_spiral.png";
import cardData from "../../Data/CardData";
import ToolsCard from "../../Components/ToolsCard/ToolsCard";
import dicordVector from "../../assets/Images/discord_vector.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* First Section */}
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ backgroundImage: `url(${Comp2Gif})` }} 
      >
        <Header />
        <div className="sec-one-title text-center py-10 2xl:py-40 xl:py-20 flex flex-col justify-center items-center">
          <div className="leading-tight ">
            <h1 className="text-white text-8xl 2xl:text-[9rem] font-bold">
              Design Your <span className="text-cyan-400">Ideas</span>
            </h1>
            <h1 className="text-white text-8xl 2xl:text-[9rem] font-bold">
              Into <span className="text-cyan-400">Visuals</span>
            </h1>
          </div>

          <div className="mt-4 leading-normal">
            <p className="text-white text-center 2xl:text-2xl">
              Acquire the tools necessary for designing ads, banners, websites
              and more, all with the
            </p>
            <p className="text-white text-center 2xl:text-2xl">click of a button.</p>
            <ul class="list-disc text-white flex gap-10 justify-center items-center mt-3 2xl:text-2xl">
              <li>Cost-saving</li>
              <li>Increased Efficiency</li>
              <li>Higher Accuracy</li>
              <li>Time-Efficient</li>
            </ul>
          </div>

          <div className="sec-one-button border border-cyan-400 text-white rounded-full px-20 py-2 mt-8 2xl:mt-14 2xl:py-4 2xl:px-28 text-2xl 2xl:text-4xl font-bold">
            Try Krut AI
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div class=" min-h-[27rem] flex justify-center items-center">
        <iframe
          className="rounded-[2rem] mt-[-3.5rem] mb-[-3.5rem] "
          width="1110"
          height="600"
          src="https://youtu.be/KltLKdztwOw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* Third Section */}
      <div
        className=" min-h-[95rem] bg-cover bg-center "
        style={{ backgroundImage: `url(${bgVector})` }}
      >
        <div className=" text-center pt-40">
          <h1 className="text-cyan-300 text-6xl font-bold leading-tight">
            AI Creative Suite{" "}
            <span className="text-white text-6xl font-bold leading-tight">
              For Your
            </span>
          </h1>
          <h1 className="text-cyan-300 text-6xl font-bold leading-tight">
            Creative Ideas
          </h1>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-16 mt-10">
          {cardData.map((card, index) => (
            <div className="col-span-1" key={index}>
              <ToolsCard title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="min-h-screen bg-cover bg-no-repeat bg-center py-10" style={{ backgroundImage: `url(${bgVector})` }}>

     <div className="border border-cyan-400 text-white rounded-full mx-[15rem] flex flex-col  justify-center items-center">
        <h1 className="text-center font-semibold text-5xl">Our Trusted Partners</h1>  
        <div className="flex gap-10">
         
        </div>
     </div>
     
  </div> */}
      <div class="container-fluid min-h-[40rem] mt-5">
        <div class=" bg-gray-200 min-h-[33rem] rounded-[6rem] flex mx-16">
          <div class="lg:w-1/2 sm:w-full discord-img flex justify-center items-center">
            <img src={dicordVector} class="h-auto w-[33rem] mt-4" alt="" />
          </div>
          <div class="lg:w-1/2 sm:w-full xl:w-1/2 text-center align-middle pr-4 flex flex-col justify-center items-center">
            <h4 class="font-medium text-xl px-4">
              Share your ideas and get inspired. Connect with like-minded
              creators and discuss your ideas on our{" "}
              <span className="font-bold">Discord server</span>
            </h4>
            <Link to={"/"}>
              {" "}
              <div class="mt-7 bg-black w-[13rem] text-white py-3 px-2 rounded-full text-2xl font-semibold ">
                Join Discord
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div
        className="min-h-[100vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${bgVector})` }}
      >
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold leading-tight">
            The <span className="text-cyan-400">Ideal Plans</span> At The
          </h1>
          <h1 className="text-cyan-400 text-7xl font-bold leading-tight">
            Ideal Price
          </h1>
        </div>
        <div className="px-60 mt-8 price-cards  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            <div className="  border-2 border-cyan-400 text-white rounded-[2.5rem]">
              <div className="p-5">
              <h1 className="font-semibold text-3xl mb-4">Free</h1>
              <p className=" text-sm mb-4">For anyone who wants to try image generation</p>
              <h1 className="font-semibold text-2xl mb-4">$0/month*</h1>
              <div className="flex items-center justify-center">
              <button className="bg-white text-black justify-center px-6 py-1 font-semibold rounded-2xl mb-5">Try for free</button>
              </div>
              
              </div>
              
              <div className=" bg-white text-gray-500 font-medium text-sm leading-loose rounded-t-[1.5rem] rounded-b-[2.5rem] px-5 py-5 tracking-tight">
                  <p> &#x2713; 5GB Storage</p> 
                  <p> &#x2713; Limited i Stock</p>
                  <p>&#x2713; Unlimited Projects</p>
                  <p>&#x2713; Watermark Included</p>
                  <p>&#x2713; Unlock 25 Background</p>
                  
              </div>
            </div>
            <div className="border-2 border-cyan-400 text-white rounded-[2.5rem] h-full" >
              <div className="p-5">
              <h1 className="font-semibold text-3xl mb-4">Plus</h1>
              <p className=" text-sm mb-4 ">Meet your goals and accomplish more with Advanced AI features.</p>
              <h1 className="font-semibold text-2xl mb-4">$20/month*</h1>
              <div className="flex items-center justify-center">
              <button className="text-black justify-center px-6 py-1 font-semibold rounded-2xl bg-gradient-to-b from-white via-gray-300 to-black mb-5">Get Plus</button>


              </div>
              </div>
              <div className=" bg-white  text-gray-500 text-sm leading-loose rounded-t-[1.5rem] rounded-b-[2.5rem] px-5 py-5 tracking-tight">
              <p> &#x2713;  50GB Storage</p>
                  <p> &#x2713;  Unlimited Photos by iStock</p>
                  <p>&#x2713;  Unlimited Projects</p>
                  <p>&#x2713;  Watermark Not Included</p>
                  <p>&#x2713;  Unlock 150 Background</p>
                  
              </div>
            </div>
            <div className="border-2 border-cyan-400 text-white rounded-[2.5rem] h-full">
              <div className="p-5">
              <h1 className="font-semibold text-3xl mb-4">Pro</h1>
              <p className="text-sm mb-4">Collaborate in teams of all scale your brand with better ROI</p>
              <h1 className="font-semibold text-2xl mb-4">$50/month*</h1>
              <div className="flex items-center justify-center">
              <button className="bg-gradient-to-b  from-cyan-400 via-cyan-400 to-gray-600 text-black justify-center px-6 py-1 font-semibold rounded-2xl mb-5">Be a Pro</button>
              </div>
              </div>
              <div className=" bg-white  text-gray-500 text-sm leading-loose font-medium rounded-t-[1.5rem] rounded-b-[2.5rem] px-5 py-5 tracking-tight">
              <p> &#x2713;  5GB Storage</p>
                  <p> &#x2713;  Unlimited Photos By iStock</p>
                  <p>&#x2713;  Unlimited Projects</p>
                  <p>&#x2713;  Watermark Not Included</p>
                  <p>&#x2713;  Unlock 250+ Background</p>
                  
              </div>
            </div>
          </div>
         
          
        </div>
        <div className="flex items-center justify-center text-white mt-10 mb-2">
             <div className="border-2 border-cyan-500 rounded-[2rem] w-1/4 py-2 mx-10 text-xl font-semibold  flex justify-center px-10">
             Compare More 
             </div>
              
             
        </div>
      </div>
    </>
  );
};

export default Home;
