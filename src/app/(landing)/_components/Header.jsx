"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex-1">
          <Link href="/" className="flex items-center w-fit">
            <Image
              src="/higas-logo.png"
              alt="HI-GAS Logo"
              width={85}
              height={85}
              priority
              className={`transition-all duration-300 ${
                scrolled ? "w-18" : "w-22"
              } h-auto`}
            />
          </Link>
        </motion.div>

        {/* Navigation Links - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {[
            ["Features", "#features"],
            ["How It Works", "#how-it-works"],
            ["For Drivers", "#for-drivers"],
          ].map(([title, url]) => (
            <motion.div key={title} variants={itemVariants}>
              <Link
                href={url}
                className="text-[#2B2B2B] hover:text-[#FF8411] font-semibold text-[16px] transition-all duration-200 tracking-tight"
              >
                {title}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Action Button */}
        <motion.div variants={itemVariants} className="flex-1 flex justify-end">
          <Link
            href="#download"
            className={`inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#FF8411] text-white font-bold text-[15px] hover:bg-[#fb8c1f] hover:shadow-[0_10px_20px_rgba(255,132,17,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap ${
              scrolled ? "scale-95" : ""
            }`}
          >
            Download App
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
