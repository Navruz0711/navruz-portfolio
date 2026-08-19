const fs = require('fs');
const path = require('path');

const projects = [
  {
    id: "riveria",
    title: "Riveria",
    domain: "riveria-eta.vercel.app",
    category: "Resort & Real Estate",
    tagline: "Exclusive Coastal Living & Luxury Residences",
    theme: { bg1: "#06151f", bg2: "#0b2b3a", accent: "#06b6d4", accent2: "#3b82f6", card: "#0e394d" }
  },
  {
    id: "puti-nn",
    title: "Puti NN",
    domain: "puti-nn.ru",
    category: "Logistics & Transport",
    tagline: "Reliable Freight, Cargo & Supply Chain Solutions",
    theme: { bg1: "#1a1309", bg2: "#2d1f0d", accent: "#f59e0b", accent2: "#ea580c", card: "#3b2a14" }
  },
  {
    id: "techx",
    title: "TechX",
    domain: "techx-woad.vercel.app",
    category: "Gadgets & Electronics",
    tagline: "Next-Generation Technology & Digital Store",
    theme: { bg1: "#0c0a1f", bg2: "#19123b", accent: "#8b5cf6", accent2: "#ec4899", card: "#241a52" }
  },
  {
    id: "paint-beige",
    title: "Paint Studio",
    domain: "paint-beige.vercel.app",
    category: "Art & Creative Agency",
    tagline: "Interior Aesthetics, Paint & Creative Design",
    theme: { bg1: "#1c1815", bg2: "#2e2520", accent: "#d97706", accent2: "#f59e0b", card: "#3d322b" }
  },
  {
    id: "costa",
    title: "Costa",
    domain: "costa-two.vercel.app",
    category: "Restaurant & Cafe",
    tagline: "Artisan Coffee, Fresh Cuisine & Atmosphere",
    theme: { bg1: "#18100c", bg2: "#2b1b14", accent: "#ea580c", accent2: "#f97316", card: "#38241b" }
  },
  {
    id: "antonkids",
    title: "Anton Kids",
    domain: "antonkids.ru",
    category: "Kids Goods & Fashion",
    tagline: "Premium Children's Apparel & Accessories",
    theme: { bg1: "#141726", bg2: "#1e2440", accent: "#38bdf8", accent2: "#f43f5e", card: "#273059" }
  },
  {
    id: "startpervyh",
    title: "Start Pervyh",
    domain: "startpervyh.ru",
    category: "Youth Education Platform",
    tagline: "Empowering Next-Gen Leaders & Innovators",
    theme: { bg1: "#0b1528", bg2: "#122347", accent: "#2563eb", accent2: "#06b6d4", card: "#183263" }
  },
  {
    id: "balanov-pro",
    title: "Balanov Pro",
    domain: "balanov.pro",
    category: "Personal Brand & Media",
    tagline: "High-End Media Production & Digital Strategy",
    theme: { bg1: "#0f0f14", bg2: "#1e1e28", accent: "#a855f7", accent2: "#6366f1", card: "#292938" }
  },
  {
    id: "tehnoprom",
    title: "Технопром",
    domain: "технопром.net",
    category: "Industrial & Engineering",
    tagline: "Heavy Equipment, Industrial Automation & Parts",
    theme: { bg1: "#16181d", bg2: "#22262e", accent: "#f97316", accent2: "#eab308", card: "#2c323d" }
  },
  {
    id: "konda-dom",
    title: "Konda Dom",
    domain: "konda-dom.ru",
    category: "Construction & Architecture",
    tagline: "Modern House Building & Turnkey Architecture",
    theme: { bg1: "#141a14", bg2: "#1f2b20", accent: "#22c55e", accent2: "#10b981", card: "#293a2a" }
  },
  {
    id: "baiagent",
    title: "BAI Agent",
    domain: "baiagent.ru",
    category: "AI & Automation Agency",
    tagline: "Autonomous AI Agents for Modern Business Operations",
    theme: { bg1: "#061320", bg2: "#0a2238", accent: "#00f2fe", accent2: "#4facfe", card: "#0f3254" }
  },
  {
    id: "balanov-twa",
    title: "Balanov Mini App",
    domain: "balanov.pro/twa",
    category: "Telegram Web App (TWA)",
    tagline: "Interactive Telegram Mini App with Web3 & Gamification",
    theme: { bg1: "#0e1a29", bg2: "#162942", accent: "#229ed9", accent2: "#0088cc", card: "#1e3759" }
  },
  {
    id: "quadplay",
    title: "Quadplay",
    domain: "quadplay.ru",
    category: "Gaming & Entertainment",
    tagline: "Ultimate Gaming Hub, Tournaments & Community",
    theme: { bg1: "#120a1f", bg2: "#221138", accent: "#e11d48", accent2: "#9333ea", card: "#331a54" }
  },
  {
    id: "youti",
    title: "Youti",
    domain: "youti.ru",
    category: "Digital Services & Platform",
    tagline: "Smart Digital Solutions & Lifestyle Services",
    theme: { bg1: "#111827", bg2: "#1f2937", accent: "#ec4899", accent2: "#8b5cf6", card: "#374151" }
  },
  {
    id: "ramadivineleela",
    title: "Rama Divine Leela",
    domain: "ramadivineleela.com",
    category: "Cultural & Media Portal",
    tagline: "Spiritual Arts, Media Productions & Events",
    theme: { bg1: "#1a1005", bg2: "#2e1d09", accent: "#eab308", accent2: "#f59e0b", card: "#422a0e" }
  },
  {
    id: "celitel-mc",
    title: "Celitel Medical Center",
    domain: "celitel-mc.ru",
    category: "Healthcare & Diagnostics",
    tagline: "Comprehensive Medical Care, Diagnostics & Wellness",
    theme: { bg1: "#081b1b", bg2: "#0f3030", accent: "#14b8a6", accent2: "#06b6d4", card: "#154242" }
  },
  {
    id: "mestoshefa",
    title: "Mesto Shefa",
    domain: "mestoshefa.ru/checkout",
    category: "Culinary & Checkout Flow",
    tagline: "Seamless Food Ordering & Gourmet Delivery Experience",
    theme: { bg1: "#190e0b", bg2: "#2c1712", accent: "#ef4444", accent2: "#f97316", card: "#3d1f19" }
  }
];

function generateSVG(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.theme.bg1}" />
      <stop offset="100%" stop-color="${p.theme.bg2}" />
    </linearGradient>
    <linearGradient id="acc-${p.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.theme.accent}" />
      <stop offset="100%" stop-color="${p.theme.accent2}" />
    </linearGradient>
    <filter id="glow-${p.id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bg-${p.id})" />

  <!-- Ambient Glow Orbs -->
  <circle cx="200" cy="150" r="160" fill="${p.theme.accent}" opacity="0.18" filter="url(#glow-${p.id})" />
  <circle cx="1050" cy="650" r="200" fill="${p.theme.accent2}" opacity="0.15" filter="url(#glow-${p.id})" />

  <!-- Browser Window Frame -->
  <rect x="50" y="40" width="1100" height="720" rx="16" fill="#0d1117" stroke="#30363d" stroke-width="1.5" />
  
  <!-- Browser Header -->
  <path d="M 50 40 L 1150 40 A 16 16 0 0 1 1150 96 L 50 96 Z" fill="#161b22" />
  
  <!-- Window Controls -->
  <circle cx="80" cy="68" r="6.5" fill="#ff5f56" />
  <circle cx="102" cy="68" r="6.5" fill="#ffbd2e" />
  <circle cx="124" cy="68" r="6.5" fill="#27c93f" />

  <!-- URL Bar -->
  <rect x="200" y="52" width="800" height="32" rx="8" fill="#0d1117" stroke="#30363d" stroke-width="1" />
  <!-- Lock icon -->
  <path d="M 220 68 L 220 65 A 4 4 0 0 1 228 65 L 228 68 Z M 218 68 L 230 68 L 230 76 L 218 76 Z" fill="#8b949e" />
  <text x="240" y="73" fill="#c9d1d9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">https://${p.domain}</text>

  <!-- Inner Web Content -->
  <g transform="translate(90, 130)">
    <!-- Navigation Bar inside Mockup -->
    <rect x="0" y="0" width="1020" height="50" rx="10" fill="${p.theme.card}" opacity="0.6" stroke="#30363d" stroke-width="1" />
    <text x="30" y="32" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold">${p.title}</text>
    <rect x="180" y="16" width="140" height="20" rx="10" fill="${p.theme.accent}" opacity="0.2" />
    <text x="250" y="30" fill="${p.theme.accent}" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="600" text-anchor="middle">${p.category.toUpperCase()}</text>

    <!-- Nav links mockup -->
    <circle cx="850" cy="25" r="4" fill="#8b949e" />
    <circle cx="870" cy="25" r="4" fill="#8b949e" />
    <circle cx="890" cy="25" r="4" fill="#8b949e" />
    <rect x="920" y="12" width="75" height="26" rx="6" fill="url(#acc-${p.id})" />
    <text x="957" y="29" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Live Demo</text>

    <!-- Hero Content -->
    <text x="30" y="130" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="800">${p.title}</text>
    <text x="30" y="175" fill="url(#acc-${p.id})" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="600">${p.tagline}</text>
    
    <!-- Badges -->
    <rect x="30" y="210" width="85" height="28" rx="6" fill="#1f2937" stroke="#374151" stroke-width="1" />
    <text x="72" y="228" fill="#e5e7eb" font-family="monospace" font-size="11" text-anchor="middle">Next.js</text>

    <rect x="125" y="210" width="75" height="28" rx="6" fill="#1f2937" stroke="#374151" stroke-width="1" />
    <text x="162" y="228" fill="#e5e7eb" font-family="monospace" font-size="11" text-anchor="middle">React</text>

    <rect x="210" y="210" width="105" height="28" rx="6" fill="#1f2937" stroke="#374151" stroke-width="1" />
    <text x="262" y="228" fill="#e5e7eb" font-family="monospace" font-size="11" text-anchor="middle">Tailwind CSS</text>

    <rect x="325" y="210" width="100" height="28" rx="6" fill="#1f2937" stroke="#374151" stroke-width="1" />
    <text x="375" y="228" fill="#e5e7eb" font-family="monospace" font-size="11" text-anchor="middle">TypeScript</text>

    <!-- Grid cards inside mockup -->
    <g transform="translate(0, 270)">
      <!-- Card 1 -->
      <rect x="30" y="0" width="300" height="260" rx="14" fill="${p.theme.card}" stroke="#374151" stroke-width="1" />
      <rect x="50" y="25" width="45" height="45" rx="10" fill="url(#acc-${p.id})" opacity="0.9" />
      <text x="50" y="110" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700">Responsive UI</text>
      <text x="50" y="138" fill="#9ca3af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13">Fully responsive layout with pixel-perfect design and smooth interactions.</text>
      <rect x="50" y="200" width="110" height="32" rx="8" fill="url(#acc-${p.id})" />
      <text x="105" y="220" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Explore</text>

      <!-- Card 2 -->
      <rect x="360" y="0" width="300" height="260" rx="14" fill="${p.theme.card}" stroke="#374151" stroke-width="1" />
      <rect x="380" y="25" width="45" height="45" rx="10" fill="url(#acc-${p.id})" opacity="0.9" />
      <text x="380" y="110" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700">High Performance</text>
      <text x="380" y="138" fill="#9ca3af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13">Optimized Core Web Vitals, SSR/SSG rendering, and fast load speeds.</text>
      <rect x="380" y="200" width="110" height="32" rx="8" fill="url(#acc-${p.id})" />
      <text x="435" y="220" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Details</text>

      <!-- Card 3 -->
      <rect x="690" y="0" width="300" height="260" rx="14" fill="${p.theme.card}" stroke="#374151" stroke-width="1" />
      <rect x="710" y="25" width="45" height="45" rx="10" fill="url(#acc-${p.id})" opacity="0.9" />
      <text x="710" y="110" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="18" font-weight="700">Modern Stack</text>
      <text x="710" y="138" fill="#9ca3af" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13">Built with React, Next.js, and Tailwind CSS for maintainability and scale.</text>
      <rect x="710" y="200" width="110" height="32" rx="8" fill="url(#acc-${p.id})" />
      <text x="765" y="220" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="600" text-anchor="middle">View</text>
    </g>
  </g>
</svg>`;
}

const targetDir = '/Users/macbook/Downloads/3d-portfolio-main/public/assets/projects-screenshots';

projects.forEach(p => {
  const dir = path.join(targetDir, p.id);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const svgContent = generateSVG(p);
  fs.writeFileSync(path.join(dir, 'landing.svg'), svgContent, 'utf8');
  console.log(`Saved ${p.id}/landing.svg to ${dir}`);
});
