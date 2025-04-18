"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contactRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768; // Check screen size

    if (!isSmallScreen) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send. Try again.");
      }
    } catch (err) {
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="mx-auto flex items-center justify-center p-6 md:p-10 heading w-full md:w-1/2"
    >
      <div className="w-full bg-[#121212]/20 border border-gray-300/20 backdrop-blur-lg rounded-2xl p-10 text-gray-300 hover:border-[#50C878] transition-all duration-500 ease-in-out">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-[#50C878] tracking-tighter">
          Let's <span className="style-heading tracking-wider font-normal">Connect</span>
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-transparent text-gray-300"
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-transparent text-gray-300"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-transparent text-gray-300 h-32"
          />
          <Button type="submit" className="bg-[#50C878] text-black hover:bg-[#3aa45d] flex items-center gap-2">
            {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
          </Button>
          {success && <p className="text-sm mt-2 text-center">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
