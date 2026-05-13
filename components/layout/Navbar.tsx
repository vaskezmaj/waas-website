"use client";

import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function close() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* ─── Glass pill dock ─── */}
      <nav
        aria-label="Primary"
        className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/55 backdrop-blur-[28px] saturate-150 border border-white/50 shadow-[0_6px_20px_-6px_rgba(7,24,65,0.12)]"
            : "bg-white/82 backdrop-blur-[20px] border border-white/70 shadow-[0_10px_30px_-8px_rgba(7,24,65,0.18),0_2px_6px_rgba(7,24,65,0.06)]"
        } pl-[18px] pr-1.5 py-1.5 w-[calc(100vw-24px)] max-w-[420px] md:max-w-none md:w-auto md:gap-[18px] md:pl-7 md:pr-2.5 md:py-2.5 md:top-[18px]`}
      >
        {/* Brand */}
        <a
          href="#"
          className="font-display font-semibold text-[19px] md:text-[22px] tracking-[-0.03em] text-[#071841] leading-none shrink-0"
        >
          {SITE.name}
          <span className="text-[#1D44E7]">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 mx-2.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[14.5px] font-medium text-gray-500 hover:text-[#071841] transition-colors tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop: CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-sm text-white rounded-full px-5 py-2.5 whitespace-nowrap leading-none transition-all duration-200"
            style={{
              background: "#1D44E7",
              boxShadow: "0 6px 14px -4px rgba(29,68,231,0.45)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1E40AF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1D44E7";
            }}
          >
            Get Free Website
          </a>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[rgba(7,24,65,0.08)] transition-colors hover:bg-gray-50"
          >
            {menuOpen ? (
              <X size={15} className="text-[#071841]" />
            ) : (
              <Menu size={15} className="text-[#071841]" />
            )}
          </button>
        </div>
      </nav>

      {/* ─── Mobile dropdown menu ─── */}
      <div
        className={`fixed z-40 left-1/2 -translate-x-1/2 w-[calc(100vw-24px)] max-w-[380px] rounded-[20px] border border-white/55 p-2.5 transition-all duration-200 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        style={{
          top: "74px",
          background: "rgba(255,255,255,0.68)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          boxShadow: "0 18px 40px -10px rgba(7,24,65,0.22), 0 4px 10px rgba(7,24,65,0.06)",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="flex items-center justify-between px-3.5 py-3 rounded-xl font-semibold text-[15px] text-[#071841] hover:bg-[rgba(29,68,231,0.08)] hover:text-[#1D44E7] transition-colors"
          >
            {link.label}
            <span className="text-gray-400 text-base">→</span>
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="flex items-center justify-center mt-2 px-4 py-3.5 rounded-xl font-bold text-[15px] text-white transition-colors"
          style={{ background: "#1D44E7" }}
        >
          Get Free Website
        </a>
      </div>

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={close}
        />
      )}
    </>
  );
}
