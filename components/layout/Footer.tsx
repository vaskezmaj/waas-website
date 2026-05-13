import { NAV_LINKS, SITE } from "@/lib/content";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white py-5 mt-auto" style={{ background: "#030A1F" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand */}
          <p className="font-display font-bold text-lg">
            {SITE.name}<span className="text-[#1D44E7]">.</span>
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
