"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, Folder, Mail, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { icon: Home, label: "Home", section: "home" },
  { icon: User, label: "About", section: "about" },
  { icon: Folder, label: "Projects", section: "projects" },
  { icon: Mail, label: "Contact", section: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [show, setShow] = useState(false);
  const navbarRef = useRef(null);
  const iconRefs = useRef([]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delay the navbar display
  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  // Run animation only when `show` is true
  useEffect(() => {
    if (!show) return; // Ensure GSAP runs only after the navbar is shown

    const tl = gsap.timeline();

    // Navbar Animation
    tl.from(navbarRef.current, {
      x: -100,
      opacity: 0,
      duration: .8,
      ease: "power3.out",
    });

    // Icons Animation
    if (iconRefs.current.length > 0) {
      tl.from(iconRefs.current, {
        opacity: 0,
        x: -40,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [show]); // Runs only when `show` becomes `true`

  return show ? (
    <nav
      ref={navbarRef}
      className="hidden md:flex fixed p-4 top-1/2 left-0 transform -translate-y-1/2 z-50 border-r-2 border-[#50C878]"
    >
      <ul className="flex flex-col gap-8 text-white">
        {navLinks.map((link, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger
                onClick={() => handleScrollToSection(link.section)}
                className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ease-in-out ${
                  activeSection === link.section ? "text-[#50C878]" : ""
                }`}
              >
                <span
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="cursor-none"
                >
                  <link.icon size={24} />
                </span>
              </TooltipTrigger>
              <TooltipContent className="absolute w-24 top-0 left-12 p-2 transition-all duration-300 ease-in-out">
                <p className="cursor-none">{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </nav>
  ) : null;
};

export default Navbar;
