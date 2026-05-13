"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { PORTFOLIO } from "@/lib/content";

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-16 md:py-[90px]" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D44E7]/20 text-[#1D44E7] text-sm font-semibold mb-5 uppercase tracking-widest"
            style={{ background: "rgba(29,68,231,0.06)" }}
          >
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-[#071841]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            Real contractors. Real results.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#1530A8",
                boxShadow: "0 8px 32px -8px rgba(7,24,65,0.30)",
              }}
            >
              {/* Image / preview area */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block shrink-0 overflow-hidden group/img"
                style={{ height: "176px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.4s ease",
                  }}
                  className="group-hover:scale-105"
                />
                {/* Gradient overlay — always visible, stronger on hover */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(7,24,65,0.72) 0%, rgba(7,24,65,0.18) 60%, transparent 100%)",
                    transition: "opacity 0.3s ease",
                  }}
                />
                {/* CTA button — centered, always visible */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "white",
                      letterSpacing: "-0.01em",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                    }}
                  >
                    <ExternalLink size={13} />
                    View Live Site
                  </span>
                </div>
              </a>

              {/* Info - darker brand blue, flex-1 so it always fills card height */}
              <div className="p-5 flex flex-col gap-3 flex-1" style={{ background: "#1530A8" }}>
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="font-display font-semibold text-white"
                    style={{ fontSize: "16px", letterSpacing: "-0.02em" }}
                  >
                    {project.name}
                  </h3>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-semibold shrink-0"
                    style={{ background: "rgba(255,196,212,0.18)", color: "#FFC4D4" }}
                  >
                    {project.trade}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold flex items-center gap-2"
                  style={{ color: "#FFC4D4" }}
                >
                  <TrendingUp size={14} className="shrink-0" />
                  {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
