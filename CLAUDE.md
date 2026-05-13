@AGENTS.md

# Project Rules — Formio WaaS Website

## Design & Content Rules

### NO EMOJIS — EVER
Never use emojis anywhere in the codebase — not in JSX, not in content.ts, not in comments shown to users.
Replace all emojis with:
- Lucide React icons for UI elements (trade icons, feature checkmarks, badges)
- Next.js <Image> for photos/illustrations
- CSS/SVG for decorative elements
**Why:** Professional B2B brand. Emojis look unprofessional and break on some email clients and PDFs.

### Brand Colors (from Figma design system)
- Primary CTA: `#1D44E7` (brand blue)
- Navy/dark: `#071841`
- Lime accent: `#C2EF47` (savings badges, success states)
- Cyan: `#B7FBFE`
- Pink: `#FFC4D4`
- Gray scale: #F9FAFB → #111827

### Typography
- Display/Headings: Space Grotesk (variable font, loaded via next/font)
- Body: Inter (loaded via next/font)
- Letter spacing on headings: -0.02em
- Never use Geist or default Next.js fonts

### Design Inspiration
- **Primary reference:** https://formio.biz (copy structure, layout, visual language)
- **Secondary reference:** https://leftclick.ai (metrics front-and-center, case studies, timeline)

## Content Rules

### Language
- All user-facing content: **English only**
- content.ts is the single source of truth for all copy

### Geographic scope
- This is a WORLDWIDE service — never say "America" or "US"
- Use "world" or "globally" instead

### Pricing
- Always show simplified view by default (price + 3-4 key features + CTA)
- Provide "See all features" toggle to reveal full feature list
- Billing toggle: Monthly / Annual (-20%) / 2 Years (best value)
- "Most Popular" badge must sit ABOVE the card (outside the card border), so all 3 cards align at the same baseline

## Inline styles vs Tailwind — pravilo

### Kada koristiti inline style vs Tailwind class
- Dinamičke/računate vrijednosti → uvijek `style={{}}`
- vh/svh jedinice → uvijek `style={{}}` (Tailwind ne podržava pouzdano)
- Flex ratio spaceri → uvijek `style={{ flex: N }}` — NIKAD `flex-[N]` Tailwind arbitrary (ne generiše se pouzdano u JIT)
- Animacije i prijelazi → Framer Motion, ne Tailwind transition klase
- Statični spacing, boje iz palete → Tailwind class

## Uklonjene funkcionalnosti — ne vraćati bez eksplicitnog zahtjeva

- **LogoBar sekcija** — uklonjena, nije u `app/page.tsx`
- **ThemeToggle (dark/light mode)** — uklonjen iz Navbara
- **Billing toggle (Annual / 2yr)** — Pricing prikazuje samo monthly cijene; `BillingCycle` tip i `annual`/`biennial` logika su uklonjeni
- **Next.js `<Image fill>`** u PhotoCard komponentama — koristi plain `<img>` s inline stilovima (`position: absolute, inset: 0, width: 100%, height: 100%, objectFit: cover`); fill zahtijeva eksplicitne dimenzije parenta što nije kompatibilno s flex layoutom

## File Structure
- `lib/content.ts` — single source of truth for ALL copy, pricing, features, portfolio
- `components/sections/` — one file per page section
- `components/ui/` — reusable atoms (Button, BillingToggle, ThemeToggle, SectionWrapper)
- `components/layout/` — Navbar, Footer
- `app/api/contact/route.ts` — only server-side logic
