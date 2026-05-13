"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { PAIN_POINTS } from "@/lib/content";

export default function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lines = PAIN_POINTS.headline.split("\n");

  return (
    <section id="why" className="py-16 md:py-[90px]" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-300/40 text-red-500 text-sm font-semibold mb-6"
            style={{ background: "rgba(239,68,68,0.06)" }}
          >
            <AlertTriangle size={14} />
            The problem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold leading-tight mb-8 md:mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em", color: "#071841" }}
          >
            {lines[0]}
            <br />
            <span style={{ color: "#1D44E7" }}>{lines[1]}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {PAIN_POINTS.stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-8 rounded-3xl text-left"
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #DBEAFE",
                  boxShadow: "0 4px 18px -4px rgba(7,24,65,0.10)",
                }}
              >
                <p
                  className="font-display font-bold mb-3"
                  style={{ fontSize: "clamp(36px, 4.5vw, 52px)", color: "#1D44E7", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "#4B5563" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-white rounded-full px-8 py-4 text-[15px] transition-all duration-200 hover:opacity-90"
              style={{ background: "#1D44E7", boxShadow: "0 8px 22px -6px rgba(29,68,231,0.45)" }}
            >
              {PAIN_POINTS.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
