"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
// AnimatePresence kept for comparison table toggle
import { useRef } from "react";
import {
  Check,
  X,
  ChevronDown,
  ShieldCheck,
  Gift,
  Monitor,
  Wrench,
  TrendingUp,
  Zap,
  Star,
  type LucideIcon,
} from "lucide-react";
import {
  PRICING_TIERS,
  FEATURE_COMPARISON,
  type ComparisonCategory,
} from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Wrench,
  TrendingUp,
  Zap,
  Star,
};

// ─── Simplified pricing card ────────────────────────────────────────────────
function PricingCard({
  tier,
  billing,
  index,
  inView,
}: {
  tier: (typeof PRICING_TIERS)[number];
  billing: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
      className="flex flex-col"
    >
      {/* Badge row - same height for all cards */}
      <div className="h-8 flex items-center justify-center mb-2">
        {tier.badge && (
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold tracking-wide" style={{ background: "#C2EF47", color: "#071841" }}>
            {tier.badge}
          </span>
        )}
      </div>

      {/* Card */}
      <div
        className="relative flex flex-col flex-1 rounded-2xl bg-white"
        style={{
          border: tier.highlighted
            ? "3px solid #C2EF47"
            : "1px solid rgba(7,24,65,0.10)",
          boxShadow: tier.highlighted
            ? "0 12px 40px -8px rgba(194,239,71,0.45), 0 0 0 6px rgba(194,239,71,0.18)"
            : "0 2px 12px -4px rgba(7,24,65,0.08)",
        }}
      >
        <div className="p-7 flex flex-col flex-1">
          {/* Name + tagline */}
          <div className="mb-5">
            <h3
              className="font-display font-semibold text-[#071841] mb-0.5"
              style={{ fontSize: "22px", letterSpacing: "-0.02em" }}
            >
              {tier.name}
            </h3>
            <div style={{ minHeight: "32px" }}>
              <p className="text-xs font-semibold text-[#1D44E7] uppercase tracking-widest">
                {tier.tagline}
              </p>
            </div>
          </div>

          {/* Free setup inline callout */}
          <p
            className="text-xs font-semibold mb-5 flex items-center gap-1.5"
            style={{ color: "#374151", minHeight: "20px" }}
          >
            <Gift size={12} className="text-[#1D44E7] shrink-0" />
            Free custom website at signup - $0 upfront
          </p>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span
                className="font-display font-bold text-[#071841]"
                style={{ fontSize: "clamp(40px, 4vw, 52px)", letterSpacing: "-0.03em" }}
              >
                ${tier.prices["monthly"]}
              </span>
              <span className="text-gray-400 text-sm mb-2">/mo</span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">{tier.contracts["monthly"]}</p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center font-semibold text-[15px] rounded-full py-3.5 mb-6 transition-all duration-200 hover:opacity-90"
            style={
              tier.highlighted
                ? {
                    background: "#C2EF47",
                    color: "#071841",
                    boxShadow: "0 8px 22px -6px rgba(194,239,71,0.35)",
                  }
                : {
                    background: "#1D44E7",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 22px -6px rgba(29,68,231,0.45)",
                  }
            }
          >
            {tier.cta}
          </a>

          {/* Key features */}
          <ul className="space-y-2.5 mb-auto">
            {tier.keyFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 text-sm">
                <Check size={14} className="text-[#1D44E7] mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  {feat.startsWith("Everything in ")
                    ? <>Everything in <strong className="text-[#071841]">{feat.replace("Everything in ", "")}</strong></>
                    : feat}
                </span>
              </li>
            ))}
          </ul>

          {/* Guarantee */}
          <div
            className="mt-6 rounded-xl p-3.5"
            style={{
              background: "rgba(29,68,231,0.05)",
              border: "1px solid rgba(29,68,231,0.12)",
            }}
          >
            <div className="flex items-start gap-2.5">
              <ShieldCheck size={14} className="text-[#1D44E7] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#071841] mb-0.5">
                  {tier.guarantee.name}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tier.guarantee.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Visual feature comparison ──────────────────────────────────────────────
function FeatureComparison({ categories }: { categories: ComparisonCategory[] }) {
  const tierNames = ["Foundation", "Growth", "Authority"];

  function renderCell(value: boolean | string) {
    if (value === true) return <Check size={16} strokeWidth={2.9} style={{ color: "#16a34a" }} className="mx-auto" />;
    if (value === false) return <X size={14} className="mx-auto" style={{ color: "#D1D5DB" }} />;
    return (
      <span
        className="text-xs font-semibold text-center block"
        style={{ color: "#1D44E7", lineHeight: 1.3 }}
      >
        {value}
      </span>
    );
  }

  return (
    <div
      className="rounded-2xl overflow-hidden mt-10"
      style={{
        background: "#ffffff",
        boxShadow: "0 24px 64px -12px rgba(7,24,65,0.40), 0 4px 16px -4px rgba(7,24,65,0.20)",
        border: "1px solid rgba(7,24,65,0.08)",
      }}
    >
      {/* Column headers */}
      <div
        className="grid text-sm font-semibold"
        style={{
          gridTemplateColumns: "1fr repeat(3, 140px)",
          background: "#071841",
          padding: "16px 24px",
        }}
      >
        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.90)" }}>Feature</span>
        {tierNames.map((name, i) => (
          <span
            key={name}
            className="text-center font-bold text-sm"
            style={{ color: i === 1 ? "#C2EF47" : "rgba(255,255,255,0.90)" }}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Categories + rows */}
      {categories.map((cat, ci) => {
        const Icon = iconMap[cat.lucideIcon];
        return (
          <div key={cat.category}>
            {/* Category header — light blue tint */}
            <div
              className="flex items-center gap-2 px-6 py-3"
              style={{
                background: "#EFF6FF",
                borderTop: ci === 0 ? "none" : "1px solid #DBEAFE",
                borderBottom: "1px solid #DBEAFE",
              }}
            >
              {Icon && (
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: "rgba(29,68,231,0.12)" }}
                >
                  <Icon size={13} style={{ color: "#1D44E7" }} />
                </div>
              )}
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1D44E7" }}>
                {cat.category}
              </span>
            </div>

            {/* Feature rows */}
            {cat.rows.map((row, ri) => (
              <div
                key={row.label}
                className="grid items-center px-6 py-3.5"
                style={{
                  gridTemplateColumns: "1fr repeat(3, 140px)",
                  background: ri % 2 === 0 ? "#ffffff" : "#F9FAFB",
                  borderTop: "1px solid #F3F4F6",
                }}
              >
                <span className="text-sm font-medium" style={{ color: "#374151" }}>{row.label}</span>
                <div className="flex items-center justify-center">{renderCell(row.foundation)}</div>
                <div className="flex items-center justify-center">{renderCell(row.growth)}</div>
                <div className="flex items-center justify-center">{renderCell(row.authority)}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Pricing section ────────────────────────────────────────────────────
export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="py-16 md:py-[90px]"
      style={{ background: "linear-gradient(160deg, #071841 0%, #0d2060 55%, #0a1a50 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-5 uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
          >
            Simple Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
          >
            One subscription.
            <br />
            <span style={{ color: "#C2EF47" }}>Everything handled.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 mb-8"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Your website is free. You pay only while we keep it running and growing.
          </motion.p>

        </div>

        {/* 3 pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              billing="monthly"
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Expand toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowComparison((v) => !v)}
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200"
            style={{
              color: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(255,255,255,0.20)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            <ChevronDown
              size={17}
              className={`transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`}
            />
            {showComparison ? "Hide full comparison" : "Compare all features"}
          </button>
        </motion.div>

        {/* Visual comparison table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[560px]">
                  <FeatureComparison categories={FEATURE_COMPARISON} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
