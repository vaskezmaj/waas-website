"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { HERO } from "@/lib/content";

/* ─── Photo cards ───────────────────────────────────────── */

const PHOTO_CARDS = [
  { src: "/contractors/contractor.webp",  label: "General Contractor" },
  { src: "/contractors/electrical.jpg",   label: "Electrical" },
  { src: "/contractors/plumbing.jpg",     label: "Plumbing" },
  { src: "/contractors/solar.jpg",        label: "Roofing & Solar" },
  { src: "/contractors/flooring.webp",    label: "Flooring" },
  { src: "/contractors/tools.jpg",        label: "Maintenance" },
];

const DUPLICATED = [...PHOTO_CARDS, ...PHOTO_CARDS];

/* ─── Photo card wrapper ────────────────────────────────── */
function PhotoCard({ src, label, rotate }: { src: string; label: string; rotate: number }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-2xl relative"
      style={{
        width: 210,
        height: 260,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 24px 64px -12px rgba(7,24,65,0.32), 0 4px 16px -4px rgba(7,24,65,0.14)",
        border: "2px solid #071841",
      }}
    >
      <img
        src={src}
        alt={label}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Gradient overlay + label */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(7,24,65,0.72) 0%, rgba(7,24,65,0.10) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <span
          className="inline-block text-white font-semibold"
          style={{ fontSize: 11, letterSpacing: "0.04em", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ─── Mobile photo card (smaller, no rotation) ─────────── */
function PhotoCardMobile({ src, label, rotate }: { src: string; label: string; rotate: number }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-xl relative"
      style={{
        width: 148,
        height: 188,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 16px 40px -8px rgba(7,24,65,0.28), 0 3px 10px -3px rgba(7,24,65,0.12)",
        border: "2px solid #071841",
      }}
    >
      <img
        src={src}
        alt={label}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(7,24,65,0.68) 0%, rgba(7,24,65,0.08) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <span
          className="inline-block text-white font-semibold"
          style={{ fontSize: 9, letterSpacing: "0.04em", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ─── Animation variants ───────────────────────────────── */
const FADE_IN = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/* ─── Hero ─────────────────────────────────────────────── */
export default function Hero() {
  const lines = HERO.headline.split("\n");
  const chips = ["$0 setup fee", "Live in 7 days", "Cancel anytime"];
  const rotations = [-3, 2, -1.5, 3];

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ background: "#071841", minHeight: "100svh" }}
    >
      {/* ─────────── DESKTOP: text block — centered in top half ─────────── */}
      <div className="hidden md:flex flex-1 flex-col items-center justify-center text-center px-4 z-20" style={{ paddingTop: "72px" }}>
        <motion.div
          initial="hidden" animate="show" variants={FADE_IN}
          className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)" }}
        >
          <span className="inline-flex items-center justify-center rounded-full shrink-0" style={{ width: 16, height: 16, background: "#C2EF47" }}>
            <CheckCircle size={10} className="text-[#071841]" strokeWidth={3} />
          </span>
          150 contractor websites built
        </motion.div>

        <motion.h1
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="font-display font-semibold text-white max-w-2xl mb-4"
          style={{ fontSize: "clamp(28px, 4.5vw, 60px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
        >
          {lines[0].split(" ").map((word, i) => (
            <motion.span key={i} variants={FADE_IN} className="inline-block mr-[0.25em]">{word}</motion.span>
          ))}{" "}
          <span style={{ color: "#C2EF47" }}>
            {lines[1].split(" ").map((word, i) => (
              <motion.span key={i} variants={FADE_IN} className="inline-block mr-[0.25em]">{word}</motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.38 }}
          className="max-w-lg leading-relaxed text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.60)", whiteSpace: "pre-line" }}
        >
          {HERO.subheadline.split("Free").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<span style={{ color: "#C2EF47" }}>Free</span></span>
            ) : part
          )}
        </motion.p>
      </div>

      {/* ─────────── DESKTOP: marquee area with CTA floating over it ─────────── */}
      <div className="hidden md:block relative flex-1" style={{ minHeight: 300 }}>
        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-5 items-center h-full"
            style={{ paddingLeft: 20, width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 42, repeat: Infinity }}
          >
            {DUPLICATED.map(({ src, label }, i) => (
              <PhotoCard key={`d-${label}-${i}`} src={src} label={label} rotate={rotations[i % 4]} />
            ))}
          </motion.div>
        </motion.div>

        {/* CTA floats over marquee, near top */}
        <motion.div
          initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.55 }}
          className="absolute inset-x-0 z-30 flex justify-center"
          style={{ top: "8%" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-4 whitespace-nowrap transition-all duration-200 hover:opacity-90"
            style={{ background: "#C2EF47", color: "#071841", boxShadow: "0 8px 32px -4px rgba(194,239,71,0.45)", fontSize: "16px" }}
          >
            {HERO.cta_primary}
            <span className="inline-flex items-center justify-center rounded-full font-bold" style={{ width: 22, height: 22, background: "rgba(7,24,65,0.15)", color: "#071841", fontSize: 11 }}>→</span>
          </a>
        </motion.div>
      </div>

      {/* ─────────── DESKTOP: chips — bottom ─────────── */}
      <motion.div
        initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.8 }}
        className="hidden md:flex shrink-0 flex-wrap items-center justify-center gap-6 z-20 py-6"
      >
        {chips.map((b) => (
          <span key={b} className="inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C2EF47" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            {b}
          </span>
        ))}
      </motion.div>

      {/* ─────────── MOBILE layout (< md) ─────────── */}
      <div className="md:hidden relative flex flex-col" style={{ minHeight: "100svh" }}>

        {/* Tekst + dugme */}
        <div className="flex flex-col items-center text-center px-4 flex-1" style={{ paddingTop: "72px", paddingBottom: "16px" }}>

          {/* Badge — lebdi visoko, odvojen od h1 */}
          <motion.div
            initial="hidden" animate="show" variants={FADE_IN}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.85)",
              marginTop: "6vh",
            }}
          >
            <span className="inline-flex items-center justify-center rounded-full shrink-0" style={{ width: 16, height: 16, background: "#C2EF47" }}>
              <CheckCircle size={10} className="text-[#071841]" strokeWidth={3} />
            </span>
            150 contractor websites built
          </motion.div>

          {/* Razmak između badge-a i h1 — 30% slobodnog prostora */}
          <div style={{ flex: 1 }} />

          {/* Tekst + CTA grupisani zajedno */}
          <div className="flex flex-col items-center">
            <motion.h1
              initial="hidden" animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
              className="font-display font-semibold text-white mb-4 w-full"
              style={{ fontSize: "clamp(28px, 8vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              {lines[0].split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN} className="inline-block mr-[0.25em]">{word}</motion.span>
              ))}{" "}
              <span style={{ color: "#C2EF47" }}>
                {lines[1].split(" ").map((word, i) => (
                  <motion.span key={i} variants={FADE_IN} className="inline-block mr-[0.25em]">{word}</motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.38 }}
              className="text-base leading-relaxed mb-7"
              style={{ color: "rgba(255,255,255,0.60)", maxWidth: 340, whiteSpace: "pre-line" }}
            >
              {HERO.subheadline.split("free").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>{part}<span style={{ color: "#C2EF47" }}>free</span></span>
                ) : part
              )}
            </motion.p>

            <motion.a
              href="#contact"
              initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.5 }}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-7 py-4 whitespace-nowrap transition-all duration-200"
              style={{ background: "#C2EF47", color: "#071841", boxShadow: "0 8px 24px -6px rgba(194,239,71,0.45)", fontSize: "15px" }}
            >
              {HERO.cta_primary}
              <span className="inline-flex items-center justify-center rounded-full font-bold" style={{ width: 22, height: 22, background: "rgba(7,24,65,0.15)", color: "#071841", fontSize: 11 }}>→</span>
            </motion.a>
          </div>

          <div style={{ flex: 1 }} />
        </div>

        {/* Marquee — srednji dio */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.8 }}
          className="w-full overflow-hidden shrink-0"
          style={{
            height: 180,
            maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-3 items-center h-full"
            style={{ paddingLeft: 16, width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 36, repeat: Infinity }}
          >
            {DUPLICATED.map(({ src, label }, i) => (
              <PhotoCardMobile key={`m-${label}-${i}`} src={src} label={label} rotate={rotations[i % 4]} />
            ))}
          </motion.div>
        </motion.div>

        {/* Chips — anchored at bottom */}
        <motion.div
          initial="hidden" animate="show" variants={FADE_IN} transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 py-5 shrink-0"
        >
          {chips.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C2EF47" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
