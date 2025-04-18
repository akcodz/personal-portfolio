"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  useEffect(() => {
    if (!show) return; 

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [show]); 

  return show ? (
    <div
      ref={cursorRef}
      className="wavy-circle z-50 fixed flex items-center justify-center pointer-events-none"
    ></div>
  ) : null;
}
