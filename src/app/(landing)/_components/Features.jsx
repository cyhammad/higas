"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  ZapIcon,
  DollarIcon,
  MapPinIcon,
  ShieldIcon,
  ClockIcon,
  MessageSquareIcon,
} from "@/components/icons/icons";

const featureIcons = [
  <div key="zap" className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
    <ZapIcon className="w-6 h-6" />
  </div>,
  <div key="dollar" className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
    <DollarIcon className="w-6 h-6" />
  </div>,
  <div key="map" className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
    <MapPinIcon className="w-6 h-6" />
  </div>,
  <div key="shield" className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
    <ShieldIcon className="w-6 h-6" />
  </div>,
  <div key="clock" className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
    <ClockIcon className="w-6 h-6" />
  </div>,
  <div key="chat" className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
    <MessageSquareIcon className="w-6 h-6" />
  </div>,
];

export default function Features({ t }) {
  const items = t?.items || [
    { title: "Instant Requests", description: "Place your fuel request in seconds with our intuitive app interface." },
    { title: "Competitive Bidding", description: "Get multiple bids from drivers and choose the best price for you." },
    { title: "Real-Time Tracking", description: "Track your fuel delivery in real-time with live GPS updates." },
    { title: "Verified Drivers", description: "All drivers are background-checked and verified for your safety." },
    { title: "24/7 Availability", description: "Need fuel at midnight? We have got drivers ready anytime, anywhere." },
    { title: "Live Chat Support", description: "Get instant help with our in-app chat support and ticket system." },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16"
        >
          <div className="px-4 py-1.5 rounded-full bg-[#F9EEE3] w-fit">
            <span className="text-[#F98410] font-semibold text-sm font-space">
              {t?.badge || "Why Choose Hi-GAS"}
            </span>
          </div>

          <h2
            className="text-[32px] md:text-5xl font-semibold text-[#111827] tracking-tight leading-[1.2] md:leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {t?.title || "Features That Make Us"}{" "}
            <span className="text-[#F98410]">{t?.titleHighlight || "Different"}</span>
          </h2>

          <p className="text-gray-500 text-[16px] md:text-lg max-w-2xl font-inter leading-relaxed">
            {t?.subtext || "Experience the future of fuel delivery with our innovative platform designed for convenience and reliability."}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-3xl border border-gray-100 hover:border-orange-100 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(249,132,16,0.05)] group"
            >
              <div className="mb-5 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {featureIcons[index]}
              </div>

              <h3
                className="text-[20px] md:text-xl font-semibold text-[#111827] mb-2 md:mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {feature.title}
              </h3>

              <p className="text-[#4A5565] text-[14px] md:text-[14px] font-inter leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
