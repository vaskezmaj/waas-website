"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { ABOUT } from "@/lib/content";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-16 md:py-[90px]"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D44E7]/20 text-[#1D44E7] text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ background: "rgba(29,68,231,0.06)" }}
            >
              Our story
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-[#071841] dark:text-white mb-8"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)", letterSpacing: "-0.03em" }}
            >
              {ABOUT.headline}
            </motion.h2>

            <div className="space-y-5">
              {ABOUT.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="text-base leading-relaxed"
                  style={{ color: "#4B5563" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 font-semibold text-[#071841] rounded-full px-8 py-4 text-[15px] mt-8 transition-all duration-200 hover:opacity-90"
              style={{ background: "#C2EF47", boxShadow: "0 8px 22px -6px rgba(194,239,71,0.4)" }}
            >
              Work with us
              <span
                className="inline-flex items-center justify-center rounded-full text-[#071841] font-bold"
                style={{ width: 22, height: 22, background: "rgba(7,24,65,0.12)", fontSize: 11 }}
              >
                →
              </span>
            </motion.a>
          </div>

          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {ABOUT.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 p-6 rounded-2xl"
                style={{
                  background: i === 0 ? "#1D44E7" : "#EFF6FF",
                  border: i === 0 ? "none" : "1px solid #DBEAFE",
                }}
              >
                <span
                  className="font-display font-bold min-w-[80px]"
                  style={{
                    fontSize: "clamp(30px, 3.5vw, 44px)",
                    letterSpacing: "-0.03em",
                    color: i === 0 ? "#C2EF47" : "#1D44E7",
                  }}
                >
                  {stat.value}
                </span>
                <p
                  className="text-sm leading-snug font-medium"
                  style={{ color: i === 0 ? "rgba(255,255,255,0.80)" : "#374151" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Trust bullets */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "#EFF6FF", border: "1px solid #DBEAFE" }}
            >
              {[
                "No upfront cost - ever",
                "No tech skills needed on your end",
                "Cancel anytime, no penalty",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle size={16} className="text-[#1D44E7] shrink-0" />
                  <span className="text-sm font-medium text-[#374151]">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
