// ─── Site Metadata ────────────────────────────────────────────────────────────
export const SITE = {
  name: "Formio",
  tagline: "Web as a Service for Local Contractors",
  url: "https://formio.biz",
  email: "hello@formio.biz",
  phone: "+1 (555) 000-0000",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  headline: "Your competitors\nhave a better website.",
  subheadline:
    "We'll fix that.\nFree. Custom-built for contractors.\nFully managed - from $149/mo.",
  cta_primary: "Claim Your Free Website",
  cta_secondary: "See Our Work",
  metrics: [
    { value: "$0", label: "Setup Fee" },
    { value: "7", label: "Days to Launch" },
    { value: "97%", label: "of clients searched online first" },
  ],
};

// ─── Trades / Logo Bar ────────────────────────────────────────────────────────
// icon: Lucide icon name - NO emojis (see CLAUDE.md)
export const TRADES = [
  { label: "Roofing", lucideIcon: "Home" },
  { label: "HVAC", lucideIcon: "Wind" },
  { label: "Plumbing", lucideIcon: "Droplets" },
  { label: "Electrical", lucideIcon: "Zap" },
  { label: "Painting", lucideIcon: "Paintbrush" },
  { label: "Landscaping", lucideIcon: "Leaf" },
  { label: "General Contractor", lucideIcon: "HardHat" },
  { label: "Flooring", lucideIcon: "Layers" },
];

// ─── Pain Points ──────────────────────────────────────────────────────────────
export const PAIN_POINTS = {
  headline: "Every week without a real website\nis a job you didn't know you lost.",
  stats: [
    {
      value: "97%",
      label: "Your next customer Googled before they called anyone",
    },
    {
      value: "53%",
      label: "of visitors leave a bad website without contacting anyone. They go back and call the next guy.",
    },
    {
      value: "75%",
      label: "of clicks go to the top 3 results. Everyone else fights for scraps.",
    },
  ],
  cta: "Fix This - For Free",
};

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = {
  headline: "We do the work. You get the calls.",
  steps: [
    {
      number: "01",
      title: "Free Discovery Call",
      description:
        "15 minutes on the phone. No forms, no proposals, no sales pitch. Just tell us what you do and where you work.",
    },
    {
      number: "02",
      title: "We Build Your Site",
      description:
        "Zero cost to you. Our team builds your custom site in 7 days while you keep doing what you do best - the actual work.",
    },
    {
      number: "03",
      title: "You Review & Approve",
      description:
        "We show you the site, you tell us what to change. We fix it. No limits on revisions until it's exactly right.",
    },
    {
      number: "04",
      title: "We Maintain & Grow",
      description:
        "From here, you just answer the phone. We handle hosting, updates, SEO, and everything else. It's our problem, not yours.",
    },
  ],
};

// ─── Pricing ──────────────────────────────────────────────────────────────────
export type BillingCycle = "monthly" | "annual" | "biennial";

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  prices: Record<BillingCycle, number>;
  savings: Record<"annual" | "biennial", number>;
  contracts: Record<BillingCycle, string>;
  freeSetup: string;
  keyFeatures: string[];   // shown by default (simplified view)
  features: string[];      // full list - revealed by toggle
  valueItems: { label: string; value: string }[];
  totalValue: string;
  guarantee: {
    name: string;
    description: string;
  };
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "Your site, live and maintained",
    description:
      "Professional website that runs itself. We build it, host it, update it - you never log in.",
    prices: { monthly: 149, annual: 119, biennial: 99 },
    savings: { annual: 360, biennial: 1200 },
    contracts: {
      monthly: "No contract",
      annual: "12-month contract",
      biennial: "24-month contract",
    },
    freeSetup: "Custom 5-page website design & development (value $2,500) - $0 upfront",
    keyFeatures: [
      "Custom 5-page website, mobile-first",
      "Hosting, SSL & CDN included",
      "Monthly maintenance & backups",
      "Basic SEO - meta tags, schema, sitemap",
    ],
    features: [
      "Custom website - 5 pages, mobile-first",
      "Hosting + SSL - fast, secure, CDN",
      "Maintenance - changes, bugfixes, backups",
      "Basic SEO - meta tags, schema, sitemap",
      "Uptime monitoring - 24/7",
      "Email support - 48h response time",
    ],
    valueItems: [
      { label: "Custom design + development", value: "$2,500" },
      { label: "Annual hosting", value: "$480" },
      { label: "Monthly maintenance", value: "$200/mo" },
      { label: "Basic SEO setup", value: "$500" },
    ],
    totalValue: "$6,380",
    guarantee: {
      name: "Satisfaction or Money Back",
      description:
        "Not satisfied in the first 30 days? Full refund, no questions asked.",
    },
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    tagline: "Leads captured. Follow-ups automated.",
    description:
      "Miss a call at 8pm? They get a text in 2 minutes. Every lead followed up automatically.",
    prices: { monthly: 349, annual: 279, biennial: 229 },
    savings: { annual: 840, biennial: 2880 },
    contracts: {
      monthly: "No contract",
      annual: "12-month contract",
      biennial: "24-month contract",
    },
    freeSetup: "Custom website + full GHL CRM setup + 3 automated sequences (value $5,500) - $0 upfront",
    keyFeatures: [
      "Everything in Foundation",
      "GHL CRM - lead pipeline management",
      "Missed call to SMS auto-reply in 2 min",
      "Review automation - Google + Yelp",
    ],
    features: [
      "Everything in Foundation",
      "GHL CRM - lead pipeline management",
      "Missed call to SMS auto-reply in 2 min",
      "Lead follow-up - 3-step email + SMS sequence",
      "Review automation - Google + Yelp auto-request",
      "Lead nurture - 14-day follow-up sequence",
      "Appointment booking - online calendar integrated",
      "Re-engagement - old leads auto-reactivation",
      "Priority support - 24h response time",
    ],
    valueItems: [
      { label: "Everything in Foundation", value: "$6,380" },
      { label: "GHL setup + 3 automations", value: "$2,400" },
      { label: "Lead nurture system", value: "$800" },
      { label: "Review automation system", value: "$600" },
      { label: "Missed call SMS system", value: "$400" },
    ],
    totalValue: "$10,580",
    guarantee: {
      name: "Done Right or Done Again",
      description:
        "Any automation that doesn't work as agreed gets fixed free within 48h - or you receive a week's credit automatically.",
    },
    cta: "Get Started Free",
    highlighted: true,
  },
  {
    id: "authority",
    name: "Authority",
    tagline: "Your full marketing team, one price",
    description:
      "4 blog posts a month, SEO, reputation management, and a dedicated person you can message directly.",
    prices: { monthly: 649, annual: 557, biennial: 457 },
    savings: { annual: 1680, biennial: 5760 },
    contracts: {
      monthly: "No contract",
      annual: "12-month contract",
      biennial: "24-month contract",
    },
    freeSetup: "Premium website + full GHL ecosystem + brand kit (value $9,000+) - $0 upfront",
    keyFeatures: [
      "Everything in Foundation & Growth",
      "4 SEO blog posts per month",
      "Full reputation management",
      "Dedicated account manager",
    ],
    features: [
      "Everything in Foundation & Growth",
      "4 blog posts/month - local SEO + service pages",
      "Technical SEO monthly - audit, fixes, rank tracking",
      "Google Business Profile optimization - monthly posts + Q&A",
      "Full reputation management - Google, Yelp, BBB, Houzz",
      "Quarterly site refresh - new design elements every 3 months",
      "Dedicated account manager - WhatsApp/Slack direct access",
      "Monthly strategy call - 30-min review + planning",
      "Emergency 4h support - site down? Fixed immediately",
    ],
    valueItems: [
      { label: "Everything in Growth", value: "$10,580" },
      { label: "4 blog posts/mo x 12", value: "$7,200" },
      { label: "Technical SEO monthly", value: "$4,800" },
      { label: "GMB management annually", value: "$2,400" },
      { label: "Dedicated account manager", value: "$3,600" },
    ],
    totalValue: "$28,580",
    guarantee: {
      name: "Quality Lock - Fixed Forever",
      description:
        "Every deliverable has a written quality standard. If anything falls short, we fix it free with no limits. No response in 48h? One week free, automatically.",
    },
    cta: "Get Started Free",
    highlighted: false,
  },
];

// ─── Portfolio ─────────────────────────────────────────────────────────────────
export interface Project {
  name: string;
  trade: string;
  location: string;
  result: string;
  image: string;
  url?: string;
}

export const PORTFOLIO: Project[] = [
  {
    name: "Florida Elite Remodeling",
    trade: "Remodeling",
    location: "Orlando, FL",
    result: "500+ projects, 5.0 Google rating — full site live within days",
    image: "/images/portfolio/project-1.jpg",
    url: "https://siteclient.online/",
  },
  {
    name: "Palm Bay Towing Pros",
    trade: "Towing & Roadside",
    location: "Palm Bay, FL",
    result: "4.9 stars, 2,400+ jobs — new bookings via site in the first week",
    image: "/images/portfolio/project-2.jpg",
    url: "https://fixthatbiz.online/",
  },
  {
    name: "Florida Heating & Air Inc",
    trade: "HVAC",
    location: "Jacksonville, FL",
    result: "24/7 emergency leads from organic search — within 30 days",
    image: "/images/portfolio/project-3.jpg",
    url: "https://fixbiz.online/",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "I was skeptical - 'free website' sounds like a catch. But my phone started ringing two weeks after launch. Best business decision I've made.",
    author: "Marcus T.",
    title: "Owner, Peak Roofing Co.",
    trade: "Roofing",
  },
  {
    quote:
      "I was losing leads every time I was on a job - couldn't pick up. Now they get a text in 2 minutes and I close them when I'm free. The SMS feature alone was worth it.",
    author: "James R.",
    title: "Owner, Arctic HVAC",
    trade: "HVAC",
  },
  {
    quote:
      "Had a website before. Paid good money for it. Did absolutely nothing. This is different - I actually show up when someone searches for plumbers near me.",
    author: "Derek L.",
    title: "Owner, FlowRight Plumbing",
    trade: "Plumbing",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────
export const ABOUT = {
  headline: "The best contractor doesn't always win. The most visible one does.",
  body: [
    "We started Formio after watching great contractors lose jobs to worse ones - just because they had a better website.",
    "The problem was never skill. It was visibility. And we decided to remove every barrier that stood between a good contractor and a full calendar.",
    "No upfront cost. No tech headaches. No wondering if it's working. Just a website that runs, grows, and brings in calls - while you do the actual work.",
  ],
  stats: [
    { value: "150+", label: "Contractor websites built" },
    { value: "24h", label: "Average response time" },
    { value: "3x", label: "Average lead increase in 90 days" },
  ],
};

// ─── Feature Comparison Table ─────────────────────────────────────────────────
export type CellValue = boolean | string;

export interface ComparisonRow {
  label: string;
  foundation: CellValue;
  growth: CellValue;
  authority: CellValue;
}

export interface ComparisonCategory {
  category: string;
  lucideIcon: string;
  rows: ComparisonRow[];
}

export const FEATURE_COMPARISON: ComparisonCategory[] = [
  {
    category: "Website",
    lucideIcon: "Monitor",
    rows: [
      { label: "Custom website", foundation: "5 pages", growth: "5 pages", authority: "8+ pages" },
      { label: "Mobile-first design", foundation: true, growth: true, authority: true },
      { label: "Hosting + SSL + CDN", foundation: true, growth: true, authority: true },
      { label: "Quarterly site refresh", foundation: false, growth: false, authority: true },
    ],
  },
  {
    category: "Maintenance & Support",
    lucideIcon: "Wrench",
    rows: [
      { label: "Monthly maintenance & backups", foundation: true, growth: true, authority: true },
      { label: "Uptime monitoring 24/7", foundation: true, growth: true, authority: true },
      { label: "Response time", foundation: "48h", growth: "24h", authority: "4h emergency" },
      { label: "Dedicated account manager", foundation: false, growth: false, authority: true },
      { label: "Monthly strategy call", foundation: false, growth: false, authority: true },
    ],
  },
  {
    category: "SEO & Content",
    lucideIcon: "TrendingUp",
    rows: [
      { label: "Meta tags + schema + sitemap", foundation: true, growth: true, authority: true },
      { label: "Google Business Profile", foundation: "Basic setup", growth: "Basic setup", authority: "Monthly mgmt" },
      { label: "Blog posts / month", foundation: "-", growth: "-", authority: "4 posts" },
      { label: "Technical SEO audit", foundation: false, growth: false, authority: "Monthly" },
      { label: "Rank tracking", foundation: false, growth: false, authority: true },
    ],
  },
  {
    category: "CRM & Automation",
    lucideIcon: "Zap",
    rows: [
      { label: "GHL CRM pipeline", foundation: false, growth: true, authority: true },
      { label: "Missed call → SMS (2 min)", foundation: false, growth: true, authority: true },
      { label: "Lead follow-up sequence", foundation: false, growth: true, authority: true },
      { label: "Appointment booking calendar", foundation: false, growth: true, authority: true },
      { label: "14-day lead nurture", foundation: false, growth: true, authority: true },
      { label: "Old lead re-engagement", foundation: false, growth: true, authority: true },
    ],
  },
  {
    category: "Reputation",
    lucideIcon: "Star",
    rows: [
      { label: "Google + Yelp review automation", foundation: false, growth: true, authority: true },
      { label: "Full reputation mgmt (BBB, Houzz)", foundation: false, growth: false, authority: true },
    ],
  },
];

// ─── Contact Form Options ─────────────────────────────────────────────────────
export const TRADE_OPTIONS = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Painting",
  "Landscaping",
  "General Contractor",
  "Flooring",
  "Other",
];
