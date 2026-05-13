"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-16 md:py-[90px]" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D44E7]/20 text-[#1D44E7] text-sm font-semibold mb-5 uppercase tracking-widest"
            style={{ background: "rgba(29,68,231,0.06)" }}
          >
            From the field
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-[#071841]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            Don't take our word for it.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl p-5 md:p-7 flex flex-col bg-white"
              style={{
                border: "1px solid #DBEAFE",
                boxShadow: "0 2px 12px -4px rgba(7,24,65,0.07)",
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="#C2EF47" stroke="none" />
                ))}
              </div>

              <p
                className="text-[15px] leading-relaxed flex-1 mb-6"
                style={{ color: "#374151" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(7,24,65,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: "#1D44E7" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-[#071841]">{t.author}</p>
                  <p className="text-xs truncate" style={{ color: "#9CA3AF" }}>{t.title}</p>
                </div>
                <span
                  className="ml-auto text-xs px-2.5 py-1 rounded-full font-semibold shrink-0"
                  style={{ background: "rgba(29,68,231,0.08)", color: "#1D44E7" }}
                >
                  {t.trade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
