"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ZapIcon,
  StarIcon,
  AppStoreIcon,
  PlayStoreIcon,
} from "@/components/icons/icons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Professional fluid easing
      },
    },
  };

  return (
    <section className="relative min-h-screen min-h-[600px] w-full flex items-start pt-32 md:pt-40">
      {/* Background Grid and Blobs */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -bottom-[10%] -left-[5%]"
          style={{
            width: "565px",
            height: "387px",
            backgroundColor: "#F98410",
            transform: "rotate(63.58deg)",
            filter: "blur(100px)",
            borderRadius: "100%",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-[15%] -right-[5%]"
          style={{
            width: "463px",
            height: "347px",
            background: "linear-gradient(90deg, #FF9C3B 0%, #CF6700 71.42%)",
            transform: "rotate(99.29deg)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-8"
        >
          {/* Left Column: Text & Stats */}
          <div className="w-full lg:w-[55%] space-y-6 md:space-y-5">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="w-fit h-9 md:h-10 flex items-center px-3 py-0.5 rounded-full bg-[#F9EEE3]"
            >
              <ZapIcon className="mr-2 w-4 h-4" />
              <span className="text-[#F98410] font-semibold text-[13px] md:text-[14px]">
                Fast & Reliable Fuel Delivery
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[40px] sm:text-5xl lg:text-6xl xl:text-[72px] font-semibold text-[#111827] tracking-tight leading-[1.1] md:leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Get Fuel Delivered <br />
              <span className="text-[#F98410]">Anywhere, Anytime</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-[#4A5565] text-[15px] md:text-base leading-relaxed max-w-lg md:max-w-none"
            >
              Never worry about running out of fuel again. Request fuel delivery
              in seconds and choose from competitive bids from verified drivers.
            </motion.p>

            {/* Stats */}
            {/* <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-4 py-4 md:py-2 border-y border-gray-100/50"
            >
              <div className="space-y-0">
                <div
                  className="text-xl md:text-2xl font-semibold text-[#F98410]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  10K+
                </div>
                <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
                  Active Users
                </div>
              </div>
              <div className="hidden sm:block w-px h-[48px] bg-[#E5E7EB] opacity-100" />
              <div className="space-y-0">
                <div
                  className="text-xl md:text-2xl font-semibold text-[#F98410]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  500+
                </div>
                <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
                  Verified Drivers
                </div>
              </div>
              <div className="hidden sm:block w-px h-[48px] bg-[#E5E7EB] opacity-100" />
              <div className="space-y-0">
                <div
                  className="text-xl md:text-2xl font-bold text-[#F98410] flex items-center"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  4.8 <StarIcon className="ml-1 w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
                  Rating
                </div>
              </div>
            </motion.div> */}

            {/* App Store Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 md:gap-3 pt-2"
            >
              <a
                href="https://apps.apple.com/us/app/hi-gas/id6751337577"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3   bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-[16px] hover:bg-gray-800 transition-all shadow-md active:scale-95"
              >
                <AppStoreIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[12px] font-medium leading-none mb-1">
                    Download on the
                  </div>
                  <div
                    className="text-[18px] md:text-base font-semibold leading-none"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    App Store
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] lg:max-w-[360px]">
              <Image
                src="/hero-image.png"
                alt="Higas Mobile App"
                width={400}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
