"use client";

import { motion } from "motion/react";
import {
  WalletIcon,
  TrendingUpIcon,
  TruckIcon,
  CheckMarkIcon,
} from "@/components/icons/icons";

const driverBenefits = [
  {
    title: "Earn Extra Income",
    description:
      "Set your own rates and accept jobs that work for your schedule. Flexible earning potential.",
    stat: "$500+",
    statLabel: "Weekly Average",
    icon: <WalletIcon className="w-7 h-7" />,
  },
  {
    title: "Flexible Schedule",
    description:
      "Work whenever you want. Accept jobs during your free time and be your own boss.",
    stat: "24/7",
    statLabel: "Work Anytime",
    icon: <TrendingUpIcon className="w-7 h-7" />,
  },
  {
    title: "Use Your Vehicle",
    description:
      "Use your own vehicle to deliver fuel. No special equipment needed to get started.",
    stat: "Any",
    statLabel: "Vehicle Type",
    icon: <TruckIcon className="w-7 h-7" />,
  },
  {
    title: "Growing Demand",
    description:
      "Join a rapidly growing platform with thousands of users requesting fuel daily.",
    stat: "10K+",
    statLabel: "Active Users",
    icon: <TrendingUpIcon className="w-7 h-7" />,
  },
];

const requirements = [
  {
    title: "Valid License",
    description: "Driver's license & insurance",
  },
  {
    title: "Background Check",
    description: "Pass our verification process",
  },
  {
    title: "Fuel Transport",
    description: "Proper fuel container",
  },
];

export default function ForDrivers() {
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
    <section id="for-drivers" className="py-16 md:py-24 bg-[#F6821029]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16"
        >
          <div className="px-4 py-1.5 rounded-full bg-[#F6821029] w-fit">
            <span className="text-[#F98410] font-semibold text-sm font-space">
              For Drivers
            </span>
          </div>

          <h2
            className="text-[32px] md:text-5xl font-semibold text-[#111827] tracking-tight leading-[1.2] md:leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Start Earning with <span className="text-[#F98410]">HI-GAS</span>
          </h2>

          <p className="text-gray-500 text-[16px] md:text-lg max-w-2xl font-inter leading-relaxed">
            Turn your spare time into income. Join our network of verified
            drivers and help people get fuel when they need it most.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12"
        >
          {driverBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 md:p-8 rounded-[16px] border border-gray-100/50 flex flex-col md:flex-row gap-5 md:gap-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-[52px] h-[52px] rounded-[16px] bg-[#FEF3E7] flex items-center justify-center text-[#111827] shrink-0">
                {benefit.icon}
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="space-y-1.5 md:space-y-2">
                  <h3
                    className="text-[20px] md:text-[22px] font-semibold text-[#111827] tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#4A5565] text-[15px] md:text-[16px] leading-[1.5] md:leading-[1.6] font-inter">
                    {benefit.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-2xl md:text-3xl font-bold text-[#111827]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {benefit.stat}
                  </span>
                  <span className="text-[#4A5565] text-[13px] md:text-[14px] font-medium font-inter">
                    {benefit.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-12 rounded-[16px] border border-gray-100 mb-12"
        >
          <h3
            className="text-[24px] md:text-2xl font-bold text-[#111827] text-center mb-8 md:mb-12"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Driver Requirements
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#F9EEE3] flex items-center justify-center text-black">
                  <CheckMarkIcon className="w-8 h-8 " />
                </div>
                <div className="space-y-1">
                  <h4
                    className="text-lg font-bold text-[#111827]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {req.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-inter">
                    {req.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="px-10 py-4 rounded-full bg-[#F98410] text-white font-bold text-lg hover:bg-[#fb8c1f] transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(249,132,16,0.3)] active:scale-95">
            Become a Driver
          </button>
        </motion.div>
      </div>
    </section>
  );
}
