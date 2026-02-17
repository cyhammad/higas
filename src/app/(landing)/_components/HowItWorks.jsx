"use client";

import { motion } from "motion/react";
import {
  MapPinIcon,
  SearchIcon,
  CheckCircleIcon,
  CreditCardIcon,
  StarIcon,
} from "@/components/icons/icons";

const steps = [
  {
    title: "Place Fuel Request",
    description:
      "Enter your location and fuel requirements. Choose your preferred fuel type and quantity.",
    icon: <MapPinIcon className="w-8 h-8 text-white" />,
    color: "#FF6900",
    tilt: "7deg",
    number: "01",
  },
  {
    title: "Get Multiple Bids",
    description:
      "Receive competitive bids from nearby verified drivers. Compare prices and delivery times.",
    icon: <SearchIcon className="w-8 h-8 text-white" />,
    color: "#FF6900",
    tilt: "7deg",
    number: "02",
  },
  {
    title: "Choose Your Driver",
    description:
      "Select the driver that best fits your needs. View ratings and estimated arrival time.",
    icon: <CheckCircleIcon className="w-8 h-8 text-white" />,
    color: "#00C950",
    tilt: "7deg",
    number: "03",
  },
  {
    title: "Track & Receive",
    description:
      "Track your fuel delivery in real-time. Pay securely through the app after delivery.",
    icon: <CreditCardIcon className="w-8 h-8 text-white" />,
    color: "#AD46FF",
    tilt: "7deg",
    number: "04",
  },
  {
    title: "Rate Experience",
    description:
      "Rate your driver and help maintain our quality service standards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "#F0B100",
    tilt: "7deg",
    number: "05",
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-20"
        >
          <div className="px-4 py-1.5 rounded-full bg-[#F9EEE3] w-fit">
            <span className="text-[#F98410] font-semibold text-sm font-space">
              Simple Process
            </span>
          </div>

          <h2
            className="text-[32px] md:text-5xl font-semibold text-[#111827] tracking-tight leading-[1.2] md:leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            How It Works for <span className="text-[#F98410]">Users</span>
          </h2>

          <p className="text-gray-500 text-[16px] md:text-lg max-w-2xl font-inter">
            Getting fuel delivered to your location is as easy as 1-2-3-4-5
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-8 lg:gap-4 mb-16 md:mb-20 px-4 md:px-8 lg:px-0"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Box with Tilt */}
              <div className="relative mb-6 md:mb-8">
                <motion.div
                  initial={{ rotate: 0, scale: 0.9 }}
                  whileInView={{ rotate: step.tilt, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1,
                  }}
                  className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-[20px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 10px 25px -5px ${step.color}40`,
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Number Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-50"
                  style={{ transform: "rotate(0deg)" }}
                >
                  <span
                    className="text-[10px] md:text-[11px] font-bold"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                </motion.div>
              </div>

              {/* Text Content */}
              <h3
                className="text-[18px] md:text-lg font-bold text-[#111827] mb-2 md:mb-3 font-space"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-500 text-[14px] font-inter leading-relaxed md:leading-6 max-w-[240px] md:max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="px-7 py-3 rounded-full bg-[#f98410] text-white font-semibold text-[18px] hover:bg-[#fb8c1f] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(249,132,16,0.3)] active:scale-95">
            Start Your First Request
          </button>
        </motion.div>
      </div>
    </section>
  );
}
