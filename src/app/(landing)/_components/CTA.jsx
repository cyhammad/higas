"use client";

import { motion } from "motion/react";
import { AppStoreIcon, PlayStoreIcon } from "@/components/icons/icons";

export default function CTA() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#F68210] rounded-[24px] md:rounded-[20px] overflow-hidden py-12 px-6 md:py-16 md:px-12 text-center"
        >
          {/* Decorative Circles */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-[-10%] left-[-25%] md:bottom-[-20%] md:left-[-15%] w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-transparent rounded-full pointer-events-none border-4 border-white/10"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute top-[-15%] right-[-25%] md:top-[-40%] md:right-[-15%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-transparent rounded-full pointer-events-none border-4 border-white/10"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="text-[28px] md:text-5xl lg:text-6xl font-medium text-white font-space"
            >
              Ready to Experience <br className="hidden md:block" />
              Hassle-Free Fuel Delivery?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="text-white/90 text-[15px] md:text-lg font-inter max-w-xl mx-auto leading-relaxed"
            >
              Download the HI-GAS app today and get your first delivery with
              exclusive introductory pricing.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
              className="flex flex-wrap justify-center gap-3"
            >
              <button className="group flex items-center gap-3 bg-black text-white px-5 py-4 md:px-6 md:py-5 rounded-[16px] hover:bg-gray-800 transition-all shadow-md active:scale-95">
                <AppStoreIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[12px] font-medium leading-none mb-1">
                    Download on the
                  </div>
                  <div className="text-[18px] md:text-base font-semibold leading-none font-space">
                    App Store
                  </div>
                </div>
              </button>
              <button className="group flex items-center gap-3 bg-black text-white px-5 py-4 md:px-5 md:py-2 rounded-[16px] hover:bg-gray-800 transition-all shadow-md active:scale-95">
                <PlayStoreIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[12px] font-medium leading-none mb-1">
                    Get it on
                  </div>
                  <div className="text-[18px] md:text-base font-semibold leading-none font-space">
                    Google Play
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-white/80 text-[13px] md:text-sm font-medium pt-2 md:pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                No credit card required
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                First delivery discount
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
