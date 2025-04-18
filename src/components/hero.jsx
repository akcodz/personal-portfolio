"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextAnimation from "./textAnimation";

const Hero = () => {
  gsap.registerPlugin(useGSAP);

  const headingRef = useRef(null);
  const textRef = useRef(null);

  const shouldAnimate = typeof window !== "undefined" && window.innerWidth > 768;

  useGSAP(() => {
    if (!shouldAnimate) return;

    gsap.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power2.out",
    });
  }, [shouldAnimate]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center relative overflow-hidden"
    >
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-200 tracking-tight leading-tight sm:leading-tight md:leading-[4.5rem] xl:leading-[6rem]"
        >
          Hi, I'm Akash, a
          <TextAnimation
            content={"creative developer"}
            height={"300px"}
            width={"100%"}
          />
        </h1>

        {/* Subtext */}
        <p
          ref={textRef}
          className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose"
        >
          I craft high-performance web applications by blending technical
          expertise with creativity and aesthetics. <br className="hidden sm:block" />
          Let's build something amazing together.
        </p>
      </div>

      {/* Optional scroll indicator or decoration */}
      <div className="h-24 w-10 mt-10 mx-auto absolute bottom-4 rounded-2xl backdrop-blur-lg flex justify-center items-center">
        {/* Add a scroll-down animation here if needed */}
      </div>
    </section>
  );
};

export default Hero;
