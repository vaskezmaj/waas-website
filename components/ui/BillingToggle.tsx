"use client";

import { BillingCycle } from "@/lib/content";

interface BillingToggleProps {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

const options: { label: string; value: BillingCycle; badge?: string }[] = [
  { label: "Monthly", value: "monthly" },
  { label: "Annual", value: "annual", badge: "Save 20%" },
  { label: "2 Years", value: "biennial", badge: "Best Value" },
];

export default function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 p-1 bg-gray-100 dark:bg-[#0F2457] rounded-xl border border-gray-200 dark:border-gray-700">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative flex flex-col items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-w-[90px] ${
            value === opt.value
              ? "bg-white dark:bg-[#1D44E7] text-[#071841] dark:text-white shadow-sm"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          <span>{opt.label}</span>
          {opt.badge && (
            <span
              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-0.5 ${
                value === opt.value
                  ? "bg-[#C2EF47] text-[#071841]"
                  : "bg-[#C2EF47]/30 text-[#374151] dark:bg-[#C2EF47]/20 dark:text-[#C2EF47]"
              }`}
            >
              {opt.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
