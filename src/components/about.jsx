"use client";
import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFigma,
  FaUser,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const aboutData = [
  {
    title: "whoami",
    content: (
      <p className="leading-7 text-xm">
        
  1. Hi, I'm Akash — a Full Stack Developer skilled in <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>.<br/>
  2. I specialize in building high-performance, scalable web apps with clean and efficient code.<br/>
  3. Currently exploring <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>ShadCN</strong>, and <strong>MongoDB</strong> to craft seamless user experiences.<br/>
  4. I'm always open to collaboration and eager to build impactful digital solutions.<br/>
      </p>
    ),
    span: "sm:col-span-2 sm:row-span-1 ",
  },
  {
    title: "stack",
    content: (
      <div className="grid sm:grid-cols-4   grid-cols-3 gap-6 text-center text-sm">
        {[
          {
            icon: <FaReact className="text-cyan-400 text-3xl floating-icon" />,
            name: "React.js",
          },
          {
            icon: <SiNextdotjs className="text-white text-3xl floating-icon" />,
            name: "Next.js",
          },
          {
            icon: <FaNodeJs className="text-green-400 text-3xl floating-icon" />,
            name: "Node.js",
          },
          {
            icon: <SiExpress className="text-gray-400 text-3xl floating-icon" />,
            name: "Express.js",
          },
          {
            icon: <SiMongodb className="text-green-500 text-3xl floating-icon" />,
            name: "MongoDB",
          },
          {
            icon: <SiTailwindcss className="text-sky-400 text-3xl floating-icon" />,
            name: "Tailwind CSS",
          },
          {
            icon: <FaFigma className="text-orange-400 text-3xl floating-icon" />,
            name: "Figma",
          },
          {
            icon: <SiJavascript className="text-yellow-300 text-3xl floating-icon" />,
            name: "JavaScript",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    ),
    span: "col-span-2 row-span-1",
  },
  {
    title: "vibes",
    content: (
      <ul className="list-disc list-inside space-y-5">
        <li>🏋️‍♂️ Gym & Strength Training</li>
        <li>📚 Reading Books</li>
        <li>🎯 Exploring New Tech Stacks</li>
        <li>🌄 Traveling</li>
      </ul>
    ),
    span: "sm:col-span-1 sm:row-span-1 col-span-2",
  },
  {
    title: "connect",
    content: (
      <ul className="list-disc space-y-4 text-sm pl-5 ">
        <li>
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="hover:text-[#50C878] transition-all duration-300 flex items-center gap-2 cursor-none"
          >
            <FaGithub className="text-2xl mr-2 " />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            className="hover:text-[#50C878] transition-all duration-300 flex items-center gap-2 cursor-none"
          >
            <FaLinkedin className="text-2xl mr-2" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:your.email@gmail.com"
            className="hover:text-[#50C878] transition-all duration-300 flex items-center gap-2 cursor-none"
          >
            <FaEnvelope className="text-2xl mr-2 " />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://your-portfolio.vercel.app"
            target="_blank"
            className="hover:text-[#50C878] transition-all duration-300 flex items-center gap-2 cursor-none"
          >
            <FaUser className="text-2xl mr-2" />
            Portfolio
          </a>
        </li>
      </ul>
    ),
    span: "col-span-1 row-span-1",
  },
];

const About = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const iconRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
      return;
    }

    // Heading Animation
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

    // Card Animation
    cardRefs.current.forEach((el) => {
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

    // Floating Animation for Icons
    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section id="about" className="h-auto w-full p-4 relative">
      <h1
        ref={headingRef}
        className="text-center sm:text-7xl text-4xl font-bold text-gray-200 tracking-tighter leading-[6rem] mb-10"
      >
        Behind the code...
      </h1>

      <div className="w-full relative">
        <div className="mx-auto w-full lg:w-[70%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10 heading">
          {aboutData.map((item, index) => (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`h-full bg-[#121212]/10 rounded-xl text-gray-300 p-6 border border-gray-300/20 hover:border-[#50C878] hover:shadow-lg transition-all duration-500 ease-in-out ${item.span}`}
            >
              <div>
                <div className="flex items-center justify-between text-[#50C878] style-heading font-light tracking-wider mb-2">
                  {item.title}
                  <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                </div>
              </div>
              <div className="text-sm">{item.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
