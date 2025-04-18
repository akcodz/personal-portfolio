"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        {/* Blinking Logo */}
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="drop-shadow-[0_0_10px_#50C878]"
        >
          <Image src="/logo.png" width={70} height={70} alt="logo" />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
