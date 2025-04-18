"use client";
import { useEffect, useState } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Loader from "@/components/loader";
import Projects from "@/components/projects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="relative w-screen min-screen backdrop-blur-md bg-[#121212]/10 border-[#121212]/20 rounded-xl text-white">
    
      {loading ? <Loader /> : (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
