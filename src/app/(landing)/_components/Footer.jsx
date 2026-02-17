"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white pb-10 border-t border-gray-50 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-4"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/higas-logo.png"
              alt="HI-GAS Logo"
              width={140}
              height={140}
              className="h-auto w-32 md:w-36"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold text-[#2B2B2B] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Join the HI-GAS community
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-inter">
            The smartest way to get fuel delivered directly to your location.
            Fast, reliable, and affordable.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-gray-400 text-sm font-inter">
          <p>© 2026 – 2027 Higas. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
