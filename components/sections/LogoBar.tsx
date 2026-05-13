import {
  Home,
  Wind,
  Droplets,
  Zap,
  Paintbrush,
  Leaf,
  HardHat,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { TRADES } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wind,
  Droplets,
  Zap,
  Paintbrush,
  Leaf,
  HardHat,
  Layers,
};

// Duplicate array for seamless infinite scroll loop
const DOUBLED = [...TRADES, ...TRADES];

export default function LogoBar() {
  return (
    <section
      className="py-10 border-t border-gray-100"
      style={{ background: "#ffffff" }}
    >
      <p className="text-xs tracking-widest text-gray-400 text-center mb-8 uppercase font-bold">
        Built for the trades that build the{" "}
        <strong className="font-extrabold text-gray-500" style={{ fontSize: "0.85em", letterSpacing: "0.12em" }}>
          world
        </strong>
      </p>

      {/* Slider wrapper */}
      <div className="relative overflow-hidden h-14">
        {/* Fade left */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-[160px]"
          style={{ background: "linear-gradient(to right, #ffffff 40%, rgba(245,248,254,0) 100%)" }}
        />
        {/* Fade right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-[160px]"
          style={{ background: "linear-gradient(to left, #ffffff 40%, rgba(245,248,254,0) 100%)" }}
        />

        {/* Scrolling track */}
        <div className="logo-slider-track flex items-center h-full" style={{ width: "max-content" }}>
          {DOUBLED.map((trade, i) => {
            const Icon = iconMap[trade.lucideIcon];
            return (
              <div key={`${trade.label}-${i}`} className="flex items-center shrink-0">
                <div
                  className="flex items-center gap-2 px-5 h-10 rounded-xl font-medium text-sm text-gray-600 border border-gray-200 bg-white mx-4 whitespace-nowrap"
                  style={{ boxShadow: "0 1px 3px rgba(39,39,39,0.05)" }}
                >
                  {Icon && <Icon size={14} className="text-[#1D44E7] shrink-0" />}
                  {trade.label}
                </div>
                {/* Divider */}
                <div className="w-px h-6 bg-gray-200 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-slider-track {
          animation: logo-scroll 32s linear infinite;
        }
        .logo-slider-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .logo-slider-track { animation-duration: 20s; }
        }
      `}</style>
    </section>
  );
}
