"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";
import { TRADE_OPTIONS } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  trade: string;
  tradeOther: string;
  city: string;
  message: string;
  _honeypot: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  trade: "",
  tradeOther: "",
  city: "",
  message: "",
  _honeypot: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.trade) e.trade = "Please select your trade";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.message.trim()) e.message = "Tell us a bit about your business";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  }

  function field(name: keyof FormData) {
    return {
      value: form[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [name]: e.target.value })),
    };
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white text-[#374151] placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D44E7] focus:border-transparent"
    + " border-[#DBEAFE]";

  return (
    <section id="contact" className="py-16 md:py-[90px]" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left - headline + trust */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D44E7]/20 text-[#1D44E7] text-sm font-semibold mb-6 uppercase tracking-widest"
              style={{ background: "rgba(29,68,231,0.06)" }}
            >
              Free consultation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-[#071841] mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              Your next customer
              <br />
              <span style={{ color: "#1D44E7" }}>is already searching.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "#4B5563" }}
            >
              Tell us about your business. We&apos;ll call you within 24 hours and have your site live in 7 days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3"
            >
              {[
                "$0 upfront - we build it free",
                "First call within 24 hours",
                "Cancel anytime, no penalty",
                "We handle everything - you just approve",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#1D44E7" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#374151]">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-5 sm:p-8 space-y-5"
            style={{
              border: "1px solid #DBEAFE",
              boxShadow: "0 4px 24px -8px rgba(7,24,65,0.12)",
            }}
            noValidate
          >
            {/* Honeypot - hidden from humans, traps bots */}
            <input
              type="text"
              name="_honeypot"
              tabIndex={-1}
              aria-hidden
              className="hidden"
              {...field("_honeypot")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#071841] mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className={`${inputBase} ${errors.name ? "border-red-400 ring-1 ring-red-400" : ""}`}
                  {...field("name")}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#071841] mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@yourcompany.com"
                  className={`${inputBase} ${errors.email ? "border-red-400 ring-1 ring-red-400" : ""}`}
                  {...field("email")}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <div>
                  <label className="block text-sm font-semibold text-[#071841] mb-1.5">Your Trade</label>
                  <select
                    className={`${inputBase} ${errors.trade ? "border-red-400 ring-1 ring-red-400" : ""}`}
                    {...field("trade")}
                  >
                    <option value="">Select your trade</option>
                    {TRADE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.trade && <p className="text-xs text-red-500 mt-1">{errors.trade}</p>}
                </div>
                {form.trade === "Other" && (
                  <div>
                    <input
                      type="text"
                      placeholder="What do you do? (e.g. Window cleaning, Pest control...)"
                      className={inputBase}
                      {...field("tradeOther")}
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#071841] mb-1.5">Your City / Area</label>
                <input
                  type="text"
                  placeholder="Denver, CO"
                  className={`${inputBase} ${errors.city ? "border-red-400 ring-1 ring-red-400" : ""}`}
                  {...field("city")}
                />
                {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#071841] mb-1.5">Tell us about your business</label>
              <textarea
                rows={4}
                placeholder="How long have you been in business? Any specific goals for your website?"
                className={`${inputBase} resize-none ${errors.message ? "border-red-400 ring-1 ring-red-400" : ""}`}
                {...field("message")}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-green-200 bg-green-50">
                <CheckCircle size={18} className="text-green-600 shrink-0" />
                <p className="text-sm text-green-700 font-medium">
                  We got your message! We&apos;ll reach out within 24 hours.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                <AlertCircle size={18} className="text-red-500 shrink-0" />
                <p className="text-sm text-red-600">Something went wrong. Email us at hello@formio.biz</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 font-semibold text-white rounded-full px-8 py-4 text-[15px] transition-all duration-200 hover:opacity-90 disabled:opacity-60"
              style={{ background: "#1D44E7", boxShadow: "0 8px 22px -6px rgba(29,68,231,0.45)" }}
            >
              {status === "loading" ? (
                <><Loader2 size={18} className="animate-spin" />Sending...</>
              ) : (
                <><Send size={16} />Get My Free Website</>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <Shield size={12} />
              No credit card required. No spam. We respond within 24 hours.
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
