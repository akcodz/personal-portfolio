"use client";
import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const projectsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 864);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // GSAP Animation for Heading
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    // GSAP Animation for Each Card
    projectsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      heading: "CodeSync",
      about:
        "A collaborative code editor with real-time functionality where multiple users can code together. Built with MERN stack and WebSockets for seamless live updates.",
      stack: [
        "MERN",
        "liveblocks.io",
        "Tailwind CSS",
        "Gemini API",
      ],
      link: "https://code-sync-gamma.vercel.app/",
      bg: "/codeSync.png",
    },
    {
      heading: "Mystery message",
      about:
        "A platform that allows users to receive anonymous messages from others. User-friendly UI with complete anonymity and secure backend handling.",
      stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "next-auth"],
      link: "https://mystrymsg-umber.vercel.app/",
      bg: "/mystryMsg.png",
    },
    {
      heading: "Prep wise",
      about:
        "An AI-powered interview preparation platform that generates interview questions based on job roles and evaluates user responses with AI feedback.",
      stack: ["Next.js", "Node.js", "Firebase", "Tailwind CSS", "vapi.ai"],
      link: "https://prep-wise-tawny.vercel.app/",
      bg: "/prepWise.png",
    },
    {
      heading: "Zentry",
      about:
        "A sleek UI clone of the metaverse game Zentry, featuring smooth scroll animations, dynamic transitions, and an immersive layout built with modern web animation techniques.",
      stack: ["React.js", "GSAP", "ScrollTrigger", "Tailwind CSS"],
      link: "https://zentry-red.vercel.app/",
      bg: "/zentry.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="w-full min-h-screen p-8 pt-40"
    >
      {/* Heading with Animation */}
      <h1
        ref={headingRef}
        className="text-center sm:text-7xl text-4xl font-bold text-gray-200 tracking-tighter  leading-[6rem]"
      >
        My Crafts !
      </h1>

      {/* Projects Cards Section */}
      <div className="flex flex-col items-center gap-6 w-full mt-20">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectsRef.current[index] = el)} // Storing ref for each card
            className="sm:w-[80%] w-[100%]"
          >
            <a href={project.link} target="_blank" className="cursor-none">
              <Card
                className="relative h-64 w-full flex flex-col justify-evenly bg-[#121212]/10 border-gray-300/20 rounded-xl text-gray-300 p-6 hover:border-[#50C878] hover:shadow-lg transition-all duration-500 ease-in-out"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <CardTitle
                    className={`flex items-center justify-between font-light style-heading tracking-wider ${
                      hoveredIndex === index
                        ? "text-5xl rotate-1"
                        : "text-4xl -rotate-0"
                    } transition-all duration-500 ease-in-out`}
                  >
                    {project.heading}
                    <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="h-full flex flex-col justify-evenly">
                  <p className="sm:text-sm mb-4 sm:w-[48%] w-[100%] text-xs heading">
                    {project.about}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {!isMobile && (
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            className="text-sm px-3 py-1 rounded-full heading bg-black cursor-none transition-all duration-500 ease-in-out"
                          >
                            {tech}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>

              {!isMobile && (  <div
                  className={`absolute h-fit w-fit right-32 overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredIndex === index
                      ? "opacity-100 -rotate-3"
                      : "opacity-0 -rotate-0"
                  }`}
                >
                  <Image
                    className=""
                    src={project.bg}
                    alt="project"
                    width={400}
                    height={200}
                  />
                </div>)}
              </Card>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
