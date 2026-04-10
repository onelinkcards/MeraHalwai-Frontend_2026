"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Details = [
  {
    icon: "/icons/1.svg",
    title: "Curated Menus, Fully Customizable",
    queue: "/icons/d1.svg",
    desc1: "→ No more starting from scratch—just pick, personalize, and book.",
    desc2:
      "Choose pre-set meal packages and tweak them to match your guest count, event type, or dietary needs.",
  },
  {
    icon: "/icons/2.svg",
    title: "Smart Filters to Find the Right Fit",
    queue: "/icons/d2.svg",
    desc1: "→ No scrolling endlessly—just set your filters and go.",
    desc2:
      "Sort vendors by date, cuisine, guest size, or occasion to get exactly what you need—fast.",
  },
  {
    icon: "/icons/3.svg",
    title: "Pay Your Way, With Transparency",
    queue: "/icons/d3.svg",
    desc1: "→ More control, less stress.",
    desc2:
      "Split or pay in full—flexible payment options for any budget or group plan.",
  },
  {
    icon: "/icons/4.svg",
    title: "Live Booking Updates & In-App Support",
    queue: "/icons/d4.svg",
    desc1: "→ Stay informed, stay confident.",
    desc2:
    "Track your order in real-time and chat with support right from the app.",
  },
];

const Home3 = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [currentDetail, setCurrentDetail] = useState(0);
  const STEP_VH = 50;

useEffect(() => {
  const container = containerRef.current;
  const sticky = stickyRef.current;
  if (!container || !sticky) return;

  let st;

  const setup = () => {
    // kill previous trigger for this container
    if (st) st.kill();

    const isDesktop = window.matchMedia("(min-width: 768px)").matches; // md+
    if (!isDesktop) return; // no pin on mobile

    const vh = window.innerHeight;
    const stepPx = vh * (STEP_VH / 100);
    const scrollDistance = Math.max(0, stepPx * (Details.length - 1) - 269);

    st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: sticky,
      pinSpacing: true,      // ✅ ScrollTrigger handles the space
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (Details.length - 1));
        setCurrentDetail(idx);
      },
    });

    ScrollTrigger.refresh();
  };

  setup();
  window.addEventListener("resize", setup);

  return () => {
    window.removeEventListener("resize", setup);
    if (st) st.kill();
  };
}, []);



  // const STEP_VH = 50;

  // useEffect(() => {
  //   const originalBodyOverflow = document.body.style.overflow;
  //   const originalHtmlOverflow = document.documentElement.style.overflowX;

  //   document.body.style.overflowX = "hidden";
  //   document.documentElement.style.overflowX = "hidden";

  //   const container = containerRef.current;
  //   const sticky = stickyRef.current;

  //   if (!container || !sticky) return;

  //   ScrollTrigger.getAll().forEach((trigger) => {
  //     if (trigger.vars.trigger === container) {
  //       trigger.kill();
  //     }
  //   });

  //   const createScrollTrigger = () => {
  //     const step = () => window.innerHeight * (STEP_VH / 100);
  //     ScrollTrigger.create({
  //       trigger: container,
  //       start: "top top",
  //       end: () =>
  //         "+=" + window.innerHeight * (Details.length - 1) * (STEP_VH / 100),
  //       pin: sticky,
  //       pinSpacing: true,
  //       scrub: 1,
  //       invalidateOnRefresh: true,
  //       onUpdate: (self) => {
  //         const idx = Math.round(self.progress * (Details.length - 1));
  //         setCurrentDetail(idx);
  //       },
  //     });
  //   };

  //   const timeoutId = setTimeout(() => {
  //     createScrollTrigger();
  //     ScrollTrigger.refresh();
  //   }, 100);

  //   return () => {
  //     clearTimeout(timeoutId);
  //     ScrollTrigger.getAll().forEach((trigger) => {
  //       if (trigger.vars.trigger === container) {
  //         trigger.kill();
  //       }
  //     });
  //     document.body.style.overflow = originalBodyOverflow;
  //     document.documentElement.style.overflowX = originalHtmlOverflow;
  //   };
  // }, []); // Remove currentDetail from dependencies

  // Animate detail changes
  useEffect(() => {
    const detailElements = [
      ".detail-icon",
      ".detail-title",
      ".detail-queue",
      ".detail-desc1",
      ".detail-desc2",
    ];

    gsap.fromTo(
      detailElements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
    );
  }, [currentDetail]);

  return (
    <div className="w-full min-h-0 pt-4 md:pt-6 pb-4 md:pb-6 relative z-1000">
    <div
      ref={containerRef}
      className="w-full relative flex justify-center overflow-hidden"
    >
      <div
        ref={stickyRef}
        className="w-full hidden lg:flex h-[690px] justify-center items-start lg:scale-[0.9] lg:items-start relative overflow-visible z-10"
      >
        {/* Background Image - Full container size */}
        <div className="flex absolute inset-0 w-full h-fit flex justify-center items-end">
          <Image
            src="/branch.webp"
            alt="home3"
            width={1000}
            height={1000}
            className="w-[80%] top-0 relative h-auto max-w-none"
            priority // Add priority for initial load
          />
          <div className="flex flex-row-reverse w-[50%] md:w-[50%] !absolute right-[8%] bottom-[40%] md:bottom-[5%] origin-bottom-right md:scale-[0.6] lg:scale-[0.7] xl:scale-[0.8]"> 
            <div className="flex flex-col gap-2 w-full">
              <div
                className="flex flex-col gap-[30%] md:gap-30 lg:gap-10 xl:gap-30 origin-bottom items-start justify-start text-wrap w-full max-w-[1600px] h-full"
                style={{
                  padding:
                    "clamp(1rem,1vw,5rem) clamp(1rem,4vw,10rem) clamp(1rem,1vw,5rem)",
                }}
              >
                <div className="text-nowrap overflow-visible text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl leading-snug pixel text-center md:text-left text-[#F1EDE2]">
                  How We Make Every
                  <br />
                  Occasion Sweeter
                </div>

                {/* Content Section */}
                <div className="flex justify-end items-center gap-8 w-[80%] origin-left">
                  <Image
                    src="/point.svg"
                    alt="home3"
                    width={100}
                    height={100}
                    className="h-[100%] w-auto flex-shrink-0 origin-top-left scale-[1.3] relative -translate-y-3"
                  />
                  <div className="flex gap-4 relative w-[90%] lg:gap-6 text-wrap flex-col flex-1 min-w-0 overflow-hidden">
                    {/* Dynamic detail content */}
                    <div className="flex justify-between w-full gap-8 items-center overflow-hidden">
                      <Image
                        src={Details[currentDetail].icon}
                        alt="detail icon"
                        width={60}
                        height={60}
                        className="h-10 lg:h-16 w-auto detail-icon flex-shrink-0"
                      />

                      <div className="text-white text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl w-[50%] md:text-left font-semibold inter detail-title flex-1 px-2 lg:px-4 text-center lg:text-left overflow-hidden">
                        {Details[currentDetail].title}
                      </div>

                      <Image
                        src={Details[currentDetail].queue}
                        alt="detail queue"
                        width={60}
                        height={60}
                        className="w-[10%] detail-queue origin-right flex-shrink-0"
                      />
                    </div>

                    <div className="text-white inter italic md:text-left text-base text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl detail-desc1 text-center lg:text-left overflow-hidden">
                      {Details[currentDetail].desc1}
                    </div>

                    <div className="text-white inter italic md:text-left text-base text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl detail-desc2 text-center lg:text-left overflow-hidden">
                      {Details[currentDetail].desc2}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center lg:justify-start scale-[1.3] lg:scale-[1.15] md:scale-[1] !mt-[7%] relative origin-bottom-left">
                  <Button text={"Start Planning Now"} bgcolor={"#8A3E1D"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex w-full lg:w-[95%] lg:rounded-4xl lg:hidden relative h-fit overflow-x-hidden"
      style={{
        marginTop:"2vw"
      }}
      >
        <div className="w-full bg-black py-20 flex justify-center">
          <div
            className="absolute w-full h-full bg-cover z-10 opacity-30"
            style={{
              padding: "clamp(5rem,4vw,200rem) clamp(1rem,4vw,200rem)",
              backgroundImage: "url('/mb.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />

          <div
            className="flex flex-col z-50 relative items-center w-[80%] gap-12 "
            style={{
              padding: "clamp(5rem,2vw,200rem) 0",
            }}
          >
            <div className="text-xl w-[80%] leading-snug sm:text-3xl md:text-3xl pixel xl:text-left text-[#fff] text-center">
              The Smarter Way to Sweeten Your Celebrations
            </div>

            {Details.map((detail, index) => (
              <div key={index} className="flex gap-5 w-full max-w-full ">
                <Image
                  src="/point.svg"
                  alt="home3"
                  width={50}
                  height={50}
                  className="h-42 w-auto flex-shrink-0"
                />
                <div className="flex gap-6 flex-col flex-1 min-w-0">
                  <div className="flex justify-start gap-3 ">
                    <div className="flex gap-3 flex-1 min-w-0">
                      <Image
                        src={detail.icon}
                        alt="detail icon"
                        width={40}
                        height={40}
                        className="h-10 w-auto flex-shrink-0"
                      />

                      <div className="text-white text-sm font-semibold inter max-w-[35vw] leading-tight">
                        {detail.title}
                      </div>
                    </div>

                    <Image
                      src={detail.queue}
                      alt="detail queue"
                      width={36}
                      height={36}
                      className="h-9  w-auto flex-shrink-0"
                    />
                  </div>

                  <div className="text-white w-72 inter italic text-sm ">
                    {detail.desc1}
                  </div>

                  <div className="text-white w-72 inter italic text-sm ">
                    {detail.desc2}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex w-full justify-center">
              <Button text={"Join Now"} bgcolor={"#8A3E1D"} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home3;