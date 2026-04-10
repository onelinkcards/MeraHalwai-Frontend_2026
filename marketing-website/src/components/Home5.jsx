import Image from "next/image";
import React from "react";
import Button from "./Button";

const Home5 = () => {
  return (
    <section
      id="how-it-works"
      className="w-full min-h-[594px]  flex justify-center pt-20 md:pt-24 lg:pt-28 2xl:pt-32 pb-14 md:pb-16 lg:pb-20 2xl:pb-24 scroll-mt-10 md:scroll-mt-12 lg:scroll-mt-16 2xl:scroll-mt-20 relative z-0 bg-white"
      style={{
        marginBottom: "75px", 
      }}
    >
      <div className="h-[500px] w-[500px] absolute -top-[350px] -right-[250px] bg-radial from-[#EFFF64] to-transparent blur-3xl rounded-full opacity-70 z-1">
      </div>
      <div className="flex flex-col items-center w-[90%] max-w-7xl px-4 sm:px-6 xl:px-8 h-full gap-10 sm:gap-20 xl:gap-24 relative z-10">
        <div className="text-[#FF0000] translate-y-6 lg:translate-y-20 text-center md:text-left  text-xl inter font-medium w-full">
          How it works
        </div>
        <div className="text-2xl w-full sm:text-5xl leading-snug xl:text-5xl pixel text-center md:text-left  text-[#8A3E1D]">
          Your Event Journey, Simplified
        </div>

        <div className="w-full justify-center flex flex-col xl:flex-row items-center gap-8 xl:gap-10 relative h-fit mt-2">
          
          <div className="w-full md:hidden relative z-20 flex-shrink-0">
            <Image
              src="/a1-phone.png"
              alt="home3"
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto rounded-4xl object-contain"
            />
          </div>
          <div className="w-full hidden md:block relative z-20 flex-shrink-0">
            <Image
              src="/a1.png"
              alt="home3"
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto rounded-4xl object-contain"
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-10 xl:mt-10"
        >
          <Button text={"Get Started Now"} bgcolor={"#8A3E1D"} />
        </div>
      </div>
      <div className="h-[500px] w-[500px] absolute -bottom-[250px] -left-[250px] bg-radial from-[#EFFF64] to-transparent blur-3xl rounded-full opacity-70 z-1">
      </div>
    </section>
  );
};

export default Home5;