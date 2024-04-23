import React from "react";
import Header from "../../Components/Header/Header";
import Comp2Gif from "../../assets/Images/Comp2.gif";
import bgVector from "../../assets/Images/vector_spiral.png";
import cardData from "../../Data/CardData";
import ToolsCard from "../../Components/ToolsCard/ToolsCard";
import dicordVector from "../../assets/Images/discord_vector.png";
import { Link } from "react-router-dom";
import GetStarted from "../../Components/GetStarted/GetStarted";


const Home = () => {
  return (
    <>
      {/* First Section */}
      <div
        className="conatiner-fluid  bg-cover bg-no-repeat bg-center min-h-[560px] lg:min-h-[600px] 2xl:min-h-screen  "
         style={{ backgroundImage: `url(${Comp2Gif})` }} 
      >
        <div className="bg-black bg-opacity-90">
        <Header />
        <div className="text-center py-10 2xl:py-24 xl:py-16 flex flex-col justify-center items-center">
          <div className="leading-tight ">
            <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl  xl:text-8xl 2xl:text-[9rem] font-bold">
              Design Your <span className="text-krutNeon">Ideas</span>
            </h1>
            <h1 className="text-white sm:text-5xl md:text-6xl text-4xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-bold">
              Into <span className="text-krutNeon">Visuals</span>
            </h1>
          </div>

          <div className="mt-10 lg:mt-4 2xl:mt-6 xl:mt-5 leading-normal">

            <p className="hidden md:block text-white text-center  2xl:text-3xl mx-auto lg:text-lg xl:text-xl">
              Acquire the tools necessary for designing ads, banners, websites
              and more, all with the
            </p>
            <p className="hidden md:block text-white text-center 2xl:text-3xl xl:text-xl mx-auto">click of a button</p>

            <p className="md:hidden text-white text-center  2xl:text-3xl mx-4 lg:text-lg xl:text-xl">
              Acquire the tools necessary for designing ads, banners, websites
              and more, all with the click of button which saves cost,increases efficiency and accuracy at minimal cost
            </p>
            {/* <p className="md:hidden text-white text-center 2xl:text-3xl xl:text-xl mx-auto">click of a button</p> */}
            


              <ul class="hidden md:flex list-disc text-white  lg:gap-10 gap-5 justify-center items-center mt-5 lg:mt-3 xl:mt-4 2xl:mt-5 text-xs lg:text-sm xl:text-lg 2xl:text-2xl mx-auto">
                <li>Cost-saving</li>
                <li>Increased Efficiency</li>
                <li>Higher Accuracy</li>
                <li>Time-Efficient</li>
              </ul>
          </div>

          <div className="sec-one-button border border-krutNeon text-white rounded-full px-8 py-1 mt-16 text-lg  lg:px-20 lg:py-2 lg:mt-8 2xl:mt-14 2xl:py-4 2xl:px-28 lg:text-2xl 2xl:text-4xl font-bold">
            Try Krut AI
          </div>
        </div>
        </div>
      </div>


      {/* Second Section */}
      <div class=" min-h-[8rem] md:min-h-[9rem] lg:min-h-[10rem] flex justify-center items-center">
        <video className="w-full h-auto mx-7 lg:mx-9 rounded-2xl 2xl:rounded-[3rem] 2xl:mx-16 mt-[-1rem] mb-[-1rem] md:mb-[-2rem] lg:mb-[-3rem] 2xl:mt-[-4rem] 2xl:mb-[-4rem]" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>


      {/* Third Section */}
      <div
        className="min-h-[80rem]   xl:min-h-[95rem] bg-cover bg-center "
        style={{ backgroundImage: `url(${bgVector})` }}
      >
        <div className=" text-center pt-24 mx-2 lg:pt-40">
          <h1 className="text-krutNeon text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            AI Creative Suite{" "}
            <span className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              For Your
            </span>
          </h1>
          <h1 className="text-krutNeon text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Creative Ideas
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:gap-5 lg:mx-16  lg:mt-16 2xl:mt-20 2xl:mx-20 mt-12">
  {cardData.map((card, index) => (
    <div  className={`col-span-1 ${index >= 4 ? 'hidden sm:block' : ''}`} key={index}>
      {/* Check if card index is 8 */}
      <ToolsCard
        title={card.title}
        description={card.description}
        gif={card.gif}
        // Pass isComingSoon prop with value true if index is 8
        isComingSoon={index === 8}
      />
    </div>
  ))}
</div>

        <div className="md:hidden border border-krutNeon mx-16 py-2 text-white text-center rounded-full  mt-10 text-lg font-bold">
          Explore More
        </div>
      </div>

      {/* <div className="min-h-screen bg-cover bg-no-repeat bg-center py-10" style={{ backgroundImage: `url(${bgVector})` }}>

     <div className="border border-krutNeon min-h-[15rem] text-white rounded-full mx-[15rem] flex flex-col  justify-center items-center">
        <h1 className="text-center font-semibold text-5xl">Our Trusted Partners</h1>  
        <div className="flex gap-10">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
     </div>
     
  </div> */}


      <div class="container-fluid min-h-[40rem] mt-12 md:mt-8 lg:mt-5 2xl:mt-20 ">
        <div class=" bg-gray-200 min-h-[34rem]  md:min-h-[28rem] lg:min-h-[33rem] 2xl:min-h-[38rem]  rounded-xl md:rounded-5xl  lg:rounded-[6rem] md:flex mx-6 md:mx-16 2xl:mx-36">
          <div class="lg:w-1/2 sm:w-full discord-img flex justify-center items-center">
            <img src={dicordVector} class="h-auto w-[25rem] md:w-[33rem] mt-4" alt="" />
          </div>
          <div class="lg:w-1/2 sm:w-full xl:w-1/2 text-center  md:pr-4 flex flex-col justify-center items-center">
            <h4 class="font-medium text-lg md:text-xl px-2 md:px-4 leading-tight">
              Share your ideas and get inspired. Connect with like-minded
              creators and discuss your ideas on our{" "}
              <span className="font-bold">Discord server</span>
            </h4>
            <Link to={"/"}>
              {" "}
              <div class="mt-7 bg-black w-[11rem] md:w-[13rem] text-white md:py-3 px-4 py-2 md:px-2 rounded-full text-xl md:text-2xl font-semibold ">
                Join Discord
              </div>
            </Link>
          </div>
        </div>
      </div>

      
     


      {/* <div
        className="min-h-[50rem] bg-center bg-cover bg-no-repeat bg-opacity-30 "
        style={{ backgroundImage: `url(${bgVector})` }}
      >
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold leading-tight">
            The <span className="text-krutNeon">Ideal Plans</span> At The
          </h1>
          <h1 className="text-krutNeon text-7xl font-bold leading-tight">
            Ideal Price
          </h1>
        </div>
        <div className="px-60 mt-8 price-cards  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            <div className="  border-2 border-krutNeon text-white rounded-[2.5rem]">
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
            <div className="border-2 border-krutNeon text-white rounded-[2.5rem] h-full" >
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
            <div className="border-2 border-krutNeon text-white rounded-[2.5rem] h-full">
              <div className="p-5">
              <h1 className="font-semibold text-3xl mb-4">Pro</h1>
              <p className="text-sm mb-4">Collaborate in teams of all scale your brand with better ROI</p>
              <h1 className="font-semibold text-2xl mb-4">$50/month*</h1>
              <div className="flex items-center justify-center">
              <button className="bg-gradient-to-b  from-krutNeon via-krutNeon to-gray-600 text-black justify-center px-6 py-1 font-semibold rounded-2xl mb-5">Be a Pro</button>
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
        <div className="flex items-center justify-center text-black mt-10 mb-10">
        <div className=" rounded-[2rem] w-[2/5] py-2 mx-10 text-xl font-black flex justify-center px-10" style={{ background: 'linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)' }}>
  Compare More 
</div>

              
             
        </div>
      </div> */}

      <GetStarted />
      
    </>
  );
};

export default Home;
