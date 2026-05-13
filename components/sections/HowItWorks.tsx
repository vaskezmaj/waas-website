"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";
import { Phone, Wrench, CheckCircle2, Rocket } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/content";

const STEP_ICONS = [Phone, Wrench, CheckCircle2, Rocket];
const STEP_LIME = 1; // step index that gets lime highlight

function StepItem({
  step,
  index,
  Icon,
  dotActive,
}: {
  step: (typeof HOW_IT_WORKS.steps)[number];
  index: number;
  Icon: React.ElementType;
  dotActive: MotionValue<number>;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const isLime = index === STEP_LIME;

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10 pb-10 md:pb-14 last:pb-0">
      {/*
        Dots are absolutely positioned relative to StepItem.
        stepsRef has paddingLeft: 72px, so StepItem's left edge = 72px inside stepsRef.
        Track line center = 21px (left) + 2px (half of 4px width) = 23px in stepsRef.
        Dot (10px wide) left edge = 23 - 5 = 18px in stepsRef = 18 - 72 = -54px in StepItem.
        Icon center vertically = 24px from StepItem top (48px icon / 2).
      */}

      {/* Base dot — always visible, muted */}
      <div
        className="absolute rounded-full z-10"
        style={{
          width: 10,
          height: 10,
          left: -54,
          top: 24,
          transform: "translateY(-50%)",
          background: "rgba(7,24,65,0.08)",
          border: "1.5px solid rgba(29,68,231,0.30)",
        }}
      />

      {/* Active dot — scroll-driven opacity */}
      <motion.div
        className="absolute rounded-full z-20"
        style={{
          width: 10,
          height: 10,
          left: -54,
          top: 24,
          translateY: "-50%",
          background: "#1D44E7",
          opacity: dotActive,
          boxShadow: "0 0 8px rgba(29,68,231,0.75)",
        }}
      />

      {/* Icon sits on the line */}
      <div className="flex-shrink-0" style={{ width: 48 }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
          style={{
            background: isLime ? "#C2EF47" : "#1D44E7",
            boxShadow: isLime
              ? "0 6px 16px -4px rgba(194,239,71,0.5)"
              : "0 6px 16px -4px rgba(29,68,231,0.4)",
          }}
        >
          <Icon size={20} color={isLime ? "#071841" : "#ffffff"} />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="pt-2 pb-2"
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#1D44E7",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Step {step.number}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            fontSize: "20px",
            fontWeight: 600,
            color: "#071841",
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          {step.title}
        </h3>
        <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.7 }}>
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.78", "end 0.48"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Scroll-driven dot activations — one per step
  const dot0 = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const dot1 = useTransform(scrollYProgress, [0.28, 0.36], [0, 1]);
  const dot2 = useTransform(scrollYProgress, [0.60, 0.68], [0, 1]);
  const dot3 = useTransform(scrollYProgress, [0.90, 0.98], [0, 1]);
  const dotActivations = [dot0, dot1, dot2, dot3];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 md:py-[90px]"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D44E7]/20 text-[#1D44E7] text-sm font-semibold mb-5 uppercase tracking-widest"
            style={{ background: "rgba(29,68,231,0.06)" }}
          >
            The Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-[#071841]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            {HOW_IT_WORKS.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base"
            style={{ color: "#4B5563" }}
          >
            Four simple steps. Zero tech headaches.
          </motion.p>
        </div>

        {/* Vertical timeline */}
        <div className="max-w-xl mx-auto overflow-x-clip">
          <div ref={stepsRef} className="relative" style={{ paddingLeft: "72px" }}>
            {/* Track line (background) */}
            <div
              className="absolute top-6 bottom-6"
              style={{
                left: "21px",
                width: "4px",
                background: "rgba(7,24,65,0.09)",
                borderRadius: "2px",
              }}
            />

            {/* Animated fill line — blue, solid */}
            <motion.div
              className="absolute top-6"
              style={{
                left: "21px",
                width: "4px",
                borderRadius: "2px",
                background: "#1D44E7",
                bottom: "24px",
                scaleY: lineScaleY,
                transformOrigin: "top center",
              }}
            />

            {/* Steps — each renders its own aligned dot */}
            {HOW_IT_WORKS.steps.map((step, i) => (
              <StepItem
                key={step.number}
                step={step}
                index={i}
                Icon={STEP_ICONS[i]}
                dotActive={dotActivations[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
