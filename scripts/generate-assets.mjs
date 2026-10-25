import fs from "fs";
import path from "path";

const websitesDir = path.resolve("public/images/websites");
const socialDir = path.resolve("public/images/social");

fs.mkdirSync(websitesDir, { recursive: true });
fs.mkdirSync(socialDir, { recursive: true });

// 1. Forma Studio
fs.writeFileSync(
  path.join(websitesDir, "forma-studio.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141719"/>
      <stop offset="100%" stop-color="#0d0f10"/>
    </linearGradient>
    <linearGradient id="imgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#282d30"/>
      <stop offset="100%" stop-color="#1b1e20"/>
    </linearGradient>
  </defs>
  <!-- Background & Window Frame -->
  <rect width="1200" height="750" fill="url(#bg1)"/>
  <!-- Browser Chrome Header -->
  <rect width="1200" height="44" fill="#1b1e20"/>
  <circle cx="28" cy="22" r="5" fill="#3e4446"/>
  <circle cx="44" cy="22" r="5" fill="#3e4446"/>
  <circle cx="60" cy="22" r="5" fill="#3e4446"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#111314"/>
  <text x="600" y="26" fill="#71787b" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">forma.studio</text>
  
  <!-- Website Header -->
  <text x="80" y="100" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="22" letter-spacing="2">FORMA STUDIO</text>
  <text x="960" y="100" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="14">PROJECTS · PRACTICE · CONTACT</text>
  <line x1="80" y1="126" x2="1120" y2="126" stroke="#25292b" stroke-width="1"/>

  <!-- Hero Content -->
  <text x="80" y="210" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="13" letter-spacing="3" text-transform="uppercase">ARCHITECTURE &amp; SPATIAL PRACTICE</text>
  <text x="80" y="270" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="52" letter-spacing="-1">Designing Quiet</text>
  <text x="80" y="330" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="52" letter-spacing="-1">Monuments to Light<tspan fill="#D4FF78">.</tspan></text>

  <!-- Architectural Showcase Card -->
  <g transform="translate(620, 160)">
    <rect width="500" height="340" rx="12" fill="url(#imgGrad1)" stroke="#343938" stroke-width="1"/>
    <!-- Mock 3D Architectural Structure -->
    <polygon points="120,270 260,80 400,270" fill="#202426" stroke="#485052" stroke-width="1.5"/>
    <polygon points="260,80 400,270 340,300 180,300" fill="#1a1d1e" opacity="0.8"/>
    <line x1="260" y1="80" x2="260" y2="280" stroke="#D4FF78" stroke-width="1.5" stroke-dasharray="4 4"/>
    <rect x="30" y="30" width="130" height="28" rx="6" fill="#111314" opacity="0.9"/>
    <text x="42" y="49" fill="#D4FF78" font-family="'Outfit', system-ui, sans-serif" font-size="11" font-weight="600">KYOTO RESIDENCE</text>
    <text x="42" y="315" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="12">Completed 2025 · 480 sqm</text>
  </g>

  <!-- Bottom Projects Row -->
  <g transform="translate(80, 540)">
    <rect x="0" y="0" width="320" height="150" rx="10" fill="#181b1d" stroke="#25292b" stroke-width="1"/>
    <rect x="16" y="16" width="288" height="80" rx="6" fill="#222628"/>
    <text x="16" y="125" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="500" font-size="15">Nordic Pavilion</text>
    <text x="304" y="125" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="13" text-anchor="end">Oslo</text>
  </g>
  <g transform="translate(440, 540)">
    <rect x="0" y="0" width="320" height="150" rx="10" fill="#181b1d" stroke="#25292b" stroke-width="1"/>
    <rect x="16" y="16" width="288" height="80" rx="6" fill="#222628"/>
    <text x="16" y="125" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="500" font-size="15">Aethelgard Museum</text>
    <text x="304" y="125" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="13" text-anchor="end">Reykjavik</text>
  </g>
  <g transform="translate(800, 540)">
    <rect x="0" y="0" width="320" height="150" rx="10" fill="#181b1d" stroke="#25292b" stroke-width="1"/>
    <rect x="16" y="16" width="288" height="80" rx="6" fill="#222628"/>
    <text x="16" y="125" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="500" font-size="15">Solarium House</text>
    <text x="304" y="125" fill="#A5AAA7" font-family="'Outfit', system-ui, sans-serif" font-size="13" text-anchor="end">Zurich</text>
  </g>
</svg>`
);

// 2. Orbit Workspace
fs.writeFileSync(
  path.join(websitesDir, "orbit-workspace.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="orbitBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111417"/>
      <stop offset="100%" stop-color="#0a0c0e"/>
    </linearGradient>
  </defs>
  <!-- Background & Chrome -->
  <rect width="1200" height="750" fill="url(#orbitBg)"/>
  <rect width="1200" height="44" fill="#191d20"/>
  <circle cx="28" cy="22" r="5" fill="#3e4446"/>
  <circle cx="44" cy="22" r="5" fill="#3e4446"/>
  <circle cx="60" cy="22" r="5" fill="#3e4446"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#0d1012"/>
  <text x="600" y="26" fill="#71787b" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">app.orbit.workspace/dashboard</text>

  <!-- Left Sidebar UI -->
  <rect x="0" y="44" width="220" height="706" fill="#15191b" stroke="#22272a" stroke-width="1"/>
  <!-- Logo -->
  <circle cx="36" cy="80" r="12" fill="#D4FF78"/>
  <text x="60" y="85" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="16">ORBIT</text>
  <!-- Nav items -->
  <rect x="16" y="120" width="188" height="36" rx="8" fill="#202629"/>
  <text x="44" y="143" fill="#D4FF78" font-family="system-ui" font-size="13" font-weight="600">◆ Projects &amp; Sprints</text>
  <text x="44" y="185" fill="#8c9397" font-family="system-ui" font-size="13">◇ Insights &amp; Metrics</text>
  <text x="44" y="225" fill="#8c9397" font-family="system-ui" font-size="13">◇ Team Capacity</text>
  <text x="44" y="265" fill="#8c9397" font-family="system-ui" font-size="13">◇ Automation Flows</text>
  <text x="44" y="305" fill="#8c9397" font-family="system-ui" font-size="13">◇ Integrations</text>

  <!-- Main App Canvas -->
  <!-- Top bar -->
  <rect x="220" y="44" width="980" height="60" fill="#121518" stroke="#22272a" stroke-width="1"/>
  <text x="260" y="80" fill="#F5F6F2" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="18">Sprint 42: Production Launch</text>
  <rect x="980" y="60" width="180" height="30" rx="6" fill="#D4FF78"/>
  <text x="1070" y="80" fill="#111315" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="13" text-anchor="middle">+ New Task</text>

  <!-- Metric Badges Row -->
  <g transform="translate(260, 130)">
    <rect x="0" y="0" width="210" height="90" rx="10" fill="#181c1f" stroke="#2a3034" stroke-width="1"/>
    <text x="20" y="32" fill="#8c9397" font-family="system-ui" font-size="12">ACTIVE VELOCITY</text>
    <text x="20" y="68" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="28">94.2%</text>
    <text x="130" y="68" fill="#D4FF78" font-family="system-ui" font-size="12">↑ +14%</text>

    <rect x="230" y="0" width="210" height="90" rx="10" fill="#181c1f" stroke="#2a3034" stroke-width="1"/>
    <text x="250" y="32" fill="#8c9397" font-family="system-ui" font-size="12">BURNDOWN RATE</text>
    <text x="250" y="68" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="28">18 / 20</text>
    <text x="360" y="68" fill="#D4FF78" font-family="system-ui" font-size="12">On Track</text>

    <rect x="460" y="0" width="430" height="90" rx="10" fill="#181c1f" stroke="#2a3034" stroke-width="1"/>
    <text x="480" y="32" fill="#8c9397" font-family="system-ui" font-size="12">CYCLE TIME TREND</text>
    <!-- Mini Sparkline Graph -->
    <polyline points="480,70 540,65 600,75 660,50 720,40 780,55 840,35" fill="none" stroke="#D4FF78" stroke-width="2.5"/>
    <circle cx="840" cy="35" r="4" fill="#D4FF78"/>
  </g>

  <!-- Kanban Columns -->
  <g transform="translate(260, 250)">
    <!-- Column 1 -->
    <rect x="0" y="0" width="280" height="460" rx="10" fill="#15191b" stroke="#22272a" stroke-width="1"/>
    <text x="20" y="32" fill="#8c9397" font-family="system-ui" font-size="13" font-weight="600">IN PROGRESS (3)</text>
    <rect x="16" y="50" width="248" height="110" rx="8" fill="#1f2428" stroke="#2d3438" stroke-width="1"/>
    <text x="32" y="80" fill="#F5F6F2" font-family="system-ui" font-weight="600" font-size="14">Auth Token Rotation</text>
    <text x="32" y="104" fill="#8c9397" font-family="system-ui" font-size="12">Security · P0 Critical</text>
    <circle cx="230" cy="130" r="10" fill="#D4FF78"/>

    <rect x="16" y="174" width="248" height="110" rx="8" fill="#1f2428" stroke="#2d3438" stroke-width="1"/>
    <text x="32" y="204" fill="#F5F6F2" font-family="system-ui" font-weight="600" font-size="14">Realtime WebSockets</text>
    <text x="32" y="228" fill="#8c9397" font-family="system-ui" font-size="12">Backend Infra · 2d left</text>

    <!-- Column 2 -->
    <rect x="306" y="0" width="280" height="460" rx="10" fill="#15191b" stroke="#22272a" stroke-width="1"/>
    <text x="326" y="32" fill="#8c9397" font-family="system-ui" font-size="13" font-weight="600">CODE REVIEW (2)</text>
    <rect x="322" y="50" width="248" height="110" rx="8" fill="#1f2428" stroke="#2d3438" stroke-width="1"/>
    <text x="338" y="80" fill="#F5F6F2" font-family="system-ui" font-weight="600" font-size="14">Design Tokens V4</text>
    <text x="338" y="104" fill="#D4FF78" font-family="system-ui" font-size="12">Reviewed by Lead</text>

    <!-- Column 3 -->
    <rect x="612" y="0" width="280" height="460" rx="10" fill="#15191b" stroke="#22272a" stroke-width="1"/>
    <text x="632" y="32" fill="#D4FF78" font-family="system-ui" font-size="13" font-weight="600">COMPLETED (8)</text>
    <rect x="628" y="50" width="248" height="80" rx="8" fill="#192020" stroke="#2b3b32" stroke-width="1"/>
    <text x="644" y="80" fill="#F5F6F2" font-family="system-ui" font-weight="600" font-size="14">SDK Release v2.8</text>
    <text x="644" y="104" fill="#8c9397" font-family="system-ui" font-size="12">Merged 1h ago</text>
  </g>
</svg>`
);

// 3. North Creative
fs.writeFileSync(
  path.join(websitesDir, "north-creative.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="northBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f1113"/>
      <stop offset="100%" stop-color="#181b1d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#northBg)"/>
  <rect width="1200" height="44" fill="#1c1f21"/>
  <circle cx="28" cy="22" r="5" fill="#3e4446"/>
  <circle cx="44" cy="22" r="5" fill="#3e4446"/>
  <circle cx="60" cy="22" r="5" fill="#3e4446"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#101214"/>
  <text x="600" y="26" fill="#71787b" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">northcreative.agency</text>

  <!-- Agency Nav -->
  <text x="80" y="100" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="800" font-size="24" letter-spacing="4">NORTH /</text>
  <text x="1000" y="100" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">CPH — NYC</text>

  <!-- Big Bold Typography Hero -->
  <g transform="translate(80, 180)">
    <text x="0" y="60" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="76" letter-spacing="-2">WE CRAFT</text>
    <text x="0" y="145" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="76" letter-spacing="-2">ICONIC DIGITAL</text>
    <text x="0" y="230" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="700" font-size="76" letter-spacing="-2">PRESENCES.</text>
  </g>

  <!-- Right Visual / Video Reel Frame -->
  <g transform="translate(680, 150)">
    <rect width="440" height="440" rx="16" fill="#151719" stroke="#343938" stroke-width="1.5"/>
    <circle cx="220" cy="220" r="140" fill="#1b1e21" stroke="#2f3436" stroke-width="1"/>
    <circle cx="220" cy="220" r="50" fill="#D4FF78"/>
    <!-- Play Triangle -->
    <polygon points="214,208 234,220 214,232" fill="#111315"/>
    <text x="220" y="320" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="13" text-anchor="middle" letter-spacing="2">2026 SHOWREEL (01:40)</text>
  </g>

  <!-- Bottom Award Accolades -->
  <line x1="80" y1="620" x2="1120" y2="620" stroke="#25292b" stroke-width="1"/>
  <text x="80" y="665" fill="#A5AAA7" font-family="system-ui" font-size="13">AWWWARDS SITE OF THE DAY (×12)</text>
  <text x="440" y="665" fill="#A5AAA7" font-family="system-ui" font-size="13">FWA OF THE MONTH (×4)</text>
  <text x="760" y="665" fill="#A5AAA7" font-family="system-ui" font-size="13">CANNES LIONS BRONZE</text>
  <text x="1040" y="665" fill="#D4FF78" font-family="system-ui" font-size="13">START PROJECT ↗</text>
</svg>`
);

// 4. Bloom & Co.
fs.writeFileSync(
  path.join(websitesDir, "bloom-and-co.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bloomBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121614"/>
      <stop offset="100%" stop-color="#0b0e0c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bloomBg)"/>
  <rect width="1200" height="44" fill="#181d1a"/>
  <circle cx="28" cy="22" r="5" fill="#3a443e"/>
  <circle cx="44" cy="22" r="5" fill="#3a443e"/>
  <circle cx="60" cy="22" r="5" fill="#3a443e"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#0c100e"/>
  <text x="600" y="26" fill="#6d7a71" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">bloomandco.botanics</text>

  <!-- Editorial Brand Header -->
  <text x="600" y="105" fill="#F5F6F2" font-family="'Outfit', serif, system-ui" font-weight="600" font-size="28" text-anchor="middle" letter-spacing="4">BLOOM &amp; CO.</text>
  <line x1="80" y1="130" x2="1120" y2="130" stroke="#222b25" stroke-width="1"/>

  <!-- Hero Content -->
  <g transform="translate(80, 200)">
    <text x="0" y="30" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="12" letter-spacing="3">100% ORGANIC BOTANICALS</text>
    <text x="0" y="90" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="500" font-size="48">Pure Botanicals for</text>
    <text x="0" y="145" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="500" font-size="48">Intentional Living.</text>
    <text x="0" y="200" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="16">Cold-pressed plant essences sustainably harvested from wild alpine meadows.</text>
    <rect x="0" y="240" width="160" height="44" rx="22" fill="#D4FF78"/>
    <text x="80" y="267" fill="#111315" font-family="'Outfit', system-ui" font-weight="600" font-size="14" text-anchor="middle">Explore Extracts</text>
  </g>

  <!-- Product Mockups -->
  <g transform="translate(720, 180)">
    <rect width="400" height="420" rx="16" fill="#161c18" stroke="#2a382f" stroke-width="1"/>
    <!-- Bottle silhouette -->
    <rect x="175" y="60" width="50" height="40" rx="4" fill="#2d3a31"/>
    <rect x="150" y="100" width="100" height="230" rx="16" fill="#1f2822" stroke="#3b4d41" stroke-width="1.5"/>
    <rect x="160" y="150" width="80" height="120" rx="4" fill="#121614"/>
    <text x="200" y="195" fill="#D4FF78" font-family="system-ui" font-size="11" font-weight="600" text-anchor="middle">BLOOM</text>
    <text x="200" y="215" fill="#A5AAA7" font-family="system-ui" font-size="9" text-anchor="middle">SERUM 01</text>
    <text x="200" y="370" fill="#F5F6F2" font-family="'Outfit', system-ui" font-size="16" font-weight="600" text-anchor="middle">Wild Rosehip Facial Oil</text>
    <text x="200" y="395" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="14" text-anchor="middle">$64 USD</text>
  </g>
</svg>`
);

// 5. Atelier Store
fs.writeFileSync(
  path.join(websitesDir, "atelier-store.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="atelierBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141416"/>
      <stop offset="100%" stop-color="#0e0e10"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#atelierBg)"/>
  <rect width="1200" height="44" fill="#1f1f22"/>
  <circle cx="28" cy="22" r="5" fill="#444"/>
  <circle cx="44" cy="22" r="5" fill="#444"/>
  <circle cx="60" cy="22" r="5" fill="#444"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#111113"/>
  <text x="600" y="26" fill="#777" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">atelier.objects/shop</text>

  <!-- Store Header -->
  <text x="80" y="95" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="20" letter-spacing="3">ATELIER STORE</text>
  <text x="960" y="95" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">CART (0) · SEARCH</text>
  <line x1="80" y1="120" x2="1120" y2="120" stroke="#28282c" stroke-width="1"/>

  <!-- Products 3-Col Grid -->
  <g transform="translate(80, 160)">
    <!-- Item 1 -->
    <rect x="0" y="0" width="320" height="480" rx="12" fill="#1a1a1e" stroke="#2c2c32" stroke-width="1"/>
    <!-- Mock 3D Chair object -->
    <rect x="30" y="30" width="260" height="280" rx="8" fill="#121215"/>
    <ellipse cx="160" cy="240" rx="70" ry="20" fill="#0d0d0f"/>
    <polygon points="120,130 200,130 180,220 140,220" fill="#2d2d35" stroke="#4a4a58" stroke-width="1"/>
    <line x1="140" y1="220" x2="130" y2="250" stroke="#D4FF78" stroke-width="2"/>
    <line x1="180" y1="220" x2="190" y2="250" stroke="#D4FF78" stroke-width="2"/>
    <text x="30" y="350" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="600" font-size="18">The Arc Armchair</text>
    <text x="30" y="378" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">Black Anodized Aluminum</text>
    <text x="30" y="420" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="600" font-size="16">$1,280 USD</text>

    <!-- Item 2 -->
    <rect x="360" y="0" width="320" height="480" rx="12" fill="#1a1a1e" stroke="#2c2c32" stroke-width="1"/>
    <rect x="390" y="30" width="260" height="280" rx="8" fill="#121215"/>
    <!-- Ceramic vase -->
    <ellipse cx="520" cy="180" rx="45" ry="70" fill="#292930" stroke="#444450" stroke-width="1"/>
    <ellipse cx="520" cy="120" rx="20" ry="8" fill="#18181c"/>
    <text x="390" y="350" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="600" font-size="18">Kiso Ceramic Vessel</text>
    <text x="390" y="378" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">Hand-thrown Stoneware</text>
    <text x="390" y="420" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="600" font-size="16">$340 USD</text>

    <!-- Item 3 -->
    <rect x="720" y="0" width="320" height="480" rx="12" fill="#1a1a1e" stroke="#2c2c32" stroke-width="1"/>
    <rect x="750" y="30" width="260" height="280" rx="8" fill="#121215"/>
    <!-- Pendant lamp -->
    <circle cx="880" cy="170" r="50" fill="#2d2d36" stroke="#4e4e5e" stroke-width="1"/>
    <line x1="880" y1="40" x2="880" y2="120" stroke="#D4FF78" stroke-width="1.5"/>
    <text x="750" y="350" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="600" font-size="18">Halo Pendant Lamp</text>
    <text x="750" y="378" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">Smoked Borosilicate Glass</text>
    <text x="750" y="420" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="600" font-size="16">$490 USD</text>
  </g>
</svg>`
);

// 6. Mono Launch
fs.writeFileSync(
  path.join(websitesDir, "mono-launch.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="monoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1011"/>
      <stop offset="100%" stop-color="#141719"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#monoBg)"/>
  <rect width="1200" height="44" fill="#181c1e"/>
  <circle cx="28" cy="22" r="5" fill="#383e42"/>
  <circle cx="44" cy="22" r="5" fill="#383e42"/>
  <circle cx="60" cy="22" r="5" fill="#383e42"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#0d0f10"/>
  <text x="600" y="26" fill="#6d767a" font-family="monospace" font-size="12" text-anchor="middle">mono.build/v2</text>

  <!-- Hero Headline -->
  <g transform="translate(80, 120)">
    <rect x="0" y="0" width="140" height="28" rx="14" fill="#192518" stroke="#324f2e" stroke-width="1"/>
    <text x="14" y="19" fill="#D4FF78" font-family="monospace" font-size="12">v2.4 STABLE RELEASE</text>
    <text x="0" y="80" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="56" letter-spacing="-1">The Zero-Overhead</text>
    <text x="0" y="140" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="56" letter-spacing="-1">State Engine<tspan fill="#D4FF78">.</tspan></text>
    <text x="0" y="195" fill="#A5AAA7" font-family="system-ui" font-size="16">Lightning fast distributed caches with automatic edge replication.</text>
  </g>

  <!-- Terminal Window Mockup -->
  <g transform="translate(80, 370)">
    <rect width="1040" height="300" rx="12" fill="#111416" stroke="#272d30" stroke-width="1.5"/>
    <rect width="1040" height="38" rx="12" fill="#181d20"/>
    <circle cx="24" cy="19" r="4.5" fill="#3e474b"/>
    <circle cx="38" cy="19" r="4.5" fill="#3e474b"/>
    <circle cx="52" cy="19" r="4.5" fill="#3e474b"/>
    <text x="80" y="23" fill="#8d979b" font-family="monospace" font-size="12">bash - terminal</text>

    <!-- Code Lines -->
    <text x="36" y="80" fill="#8d979b" font-family="monospace" font-size="14">$ npm install @mono/engine</text>
    <text x="36" y="115" fill="#D4FF78" font-family="monospace" font-size="14">✓ Successfully compiled in 14ms</text>
    <text x="36" y="150" fill="#F5F6F2" font-family="monospace" font-size="14">import { createStore } from "@mono/engine";</text>
    <text x="36" y="185" fill="#F5F6F2" font-family="monospace" font-size="14">export const cache = createStore({ strategy: "edge-replicated", ttl: 3600 });</text>
    <text x="36" y="225" fill="#8d979b" font-family="monospace" font-size="14">// Ready for edge deployment across 280+ POPs</text>
  </g>
</svg>`
);

// 7. Pixel Portfolio
fs.writeFileSync(
  path.join(websitesDir, "pixel-portfolio.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="pixelBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121316"/>
      <stop offset="100%" stop-color="#171820"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#pixelBg)"/>
  <rect width="1200" height="44" fill="#1b1c23"/>
  <circle cx="28" cy="22" r="5" fill="#444652"/>
  <circle cx="44" cy="22" r="5" fill="#444652"/>
  <circle cx="60" cy="22" r="5" fill="#444652"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#0f1014"/>
  <text x="600" y="26" fill="#75798c" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">pixelportfolio.design</text>

  <!-- Header -->
  <text x="80" y="100" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="20">ELENA VANCE</text>
  <text x="1000" y="100" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="14">3D ART DIRECTION</text>

  <!-- Center Holographic Sphere Graphic -->
  <g transform="translate(600, 360)">
    <!-- Concentric rings -->
    <ellipse cx="0" cy="0" rx="200" ry="80" fill="none" stroke="#2e3142" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="80" ry="200" fill="none" stroke="#2e3142" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="130" fill="#181a24" stroke="#D4FF78" stroke-width="1.5" stroke-dasharray="6 4"/>
    <circle cx="0" cy="0" r="50" fill="#242838"/>
  </g>

  <!-- Editorial Text Overlay -->
  <text x="80" y="240" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14" letter-spacing="3">SELECTED ARCHIVE 2024–2026</text>
  <text x="80" y="300" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="52">Interactive Spatial</text>
  <text x="80" y="360" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="52">Experiences<tspan fill="#D4FF78">.</tspan></text>

  <!-- Projects Ribbon -->
  <g transform="translate(80, 560)">
    <rect x="0" y="0" width="500" height="110" rx="10" fill="#1a1c25" stroke="#2f3244" stroke-width="1"/>
    <text x="24" y="45" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="600" font-size="18">01 / AURA IMMERSIVE</text>
    <text x="24" y="75" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">Spatial WebGL Installation · Milan</text>
    <text x="460" y="55" fill="#D4FF78" font-size="18">↗</text>

    <rect x="540" y="0" width="500" height="110" rx="10" fill="#1a1c25" stroke="#2f3244" stroke-width="1"/>
    <text x="564" y="45" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="600" font-size="18">02 / HYPER SPHERE</text>
    <text x="564" y="75" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">Generative Audio-Reactive World</text>
    <text x="1000" y="55" fill="#D4FF78" font-size="18">↗</text>
  </g>
</svg>`
);

// 8. Studio Experiments
fs.writeFileSync(
  path.join(websitesDir, "studio-experiments.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="expBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#101314"/>
      <stop offset="100%" stop-color="#14181a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#expBg)"/>
  <rect width="1200" height="44" fill="#1a1f21"/>
  <circle cx="28" cy="22" r="5" fill="#3c4346"/>
  <circle cx="44" cy="22" r="5" fill="#3c4346"/>
  <circle cx="60" cy="22" r="5" fill="#3c4346"/>
  <rect x="360" y="10" width="480" height="24" rx="6" fill="#0d1012"/>
  <text x="600" y="26" fill="#717c80" font-family="monospace" font-size="12" text-anchor="middle">lab.experiments.io/canvas</text>

  <!-- Generative Grid Canvas -->
  <g transform="translate(80, 100)">
    <rect width="1040" height="580" rx="12" fill="#111517" stroke="#293135" stroke-width="1.5"/>
    <!-- Mesh curves -->
    <path d="M 50 300 Q 300 100, 550 300 T 1000 300" fill="none" stroke="#2c363a" stroke-width="2"/>
    <path d="M 50 320 Q 300 140, 550 320 T 1000 320" fill="none" stroke="#364349" stroke-width="2"/>
    <path d="M 50 340 Q 300 180, 550 340 T 1000 340" fill="none" stroke="#D4FF78" stroke-width="2.5"/>
    <path d="M 50 360 Q 300 220, 550 360 T 1000 360" fill="none" stroke="#364349" stroke-width="2"/>

    <!-- Control panel overlay -->
    <rect x="40" y="40" width="280" height="190" rx="8" fill="#161b1e" stroke="#2e383c" stroke-width="1"/>
    <text x="60" y="70" fill="#D4FF78" font-family="monospace" font-size="12">EXP // 084_WAVE_PARTICLE</text>
    <text x="60" y="100" fill="#A5AAA7" font-family="monospace" font-size="12">FREQ: 14.8 Hz</text>
    <text x="60" y="125" fill="#A5AAA7" font-family="monospace" font-size="12">DAMPING: 0.88</text>
    <text x="60" y="150" fill="#A5AAA7" font-family="monospace" font-size="12">PARTICLES: 12,000</text>
    <rect x="60" y="175" width="200" height="6" rx="3" fill="#252d31"/>
    <rect x="60" y="175" width="130" height="6" rx="3" fill="#D4FF78"/>
  </g>
</svg>`
);

console.log("Website SVGs generated.");

// Generate 12 Social Media SVGs (1:1 800x800)
const socialTemplates = [
  {
    file: "social-01.svg",
    title: "AURA / MK-II",
    sub: "ACOUSTIC PRECISION",
    tag: "PRODUCT ADVERTISING",
    content: `
      <circle cx="400" cy="400" r="220" fill="none" stroke="#252b2e" stroke-width="1"/>
      <circle cx="400" cy="400" r="160" fill="none" stroke="#323b3f" stroke-width="1"/>
      <circle cx="400" cy="400" r="100" fill="none" stroke="#D4FF78" stroke-width="2" stroke-dasharray="8 6"/>
      <circle cx="400" cy="400" r="45" fill="#1f2427"/>
      <!-- Audio Wave bars -->
      <line x1="370" y1="400" x2="370" y2="400" stroke="#D4FF78" stroke-width="4"/>
      <line x1="385" y1="380" x2="385" y2="420" stroke="#D4FF78" stroke-width="4"/>
      <line x1="400" y1="365" x2="400" y2="435" stroke="#D4FF78" stroke-width="4"/>
      <line x1="415" y1="380" x2="415" y2="420" stroke="#D4FF78" stroke-width="4"/>
      <line x1="430" y1="400" x2="430" y2="400" stroke="#D4FF78" stroke-width="4"/>
    `,
  },
  {
    file: "social-02.svg",
    title: "DISCIPLINE IS THE MEDIUM",
    sub: "STUDIO MANIFESTO 2026",
    tag: "EDITORIAL DESIGN",
    content: `
      <line x1="80" y1="200" x2="720" y2="200" stroke="#D4FF78" stroke-width="2"/>
      <text x="80" y="320" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="800" font-size="64" letter-spacing="-1">FUNCTION</text>
      <text x="80" y="390" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="800" font-size="64" letter-spacing="-1">BEFORE</text>
      <text x="80" y="460" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="800" font-size="64" letter-spacing="-1">FLOURISH.</text>
      <rect x="80" y="520" width="180" height="3" fill="#A5AAA7"/>
      <text x="80" y="560" fill="#A5AAA7" font-family="monospace" font-size="14">VOL 04 // QDELTA EDITIONS</text>
    `,
  },
  {
    file: "social-03.svg",
    title: "LUMINA MONOLITH",
    sub: "FALL / WINTER APPAREL",
    tag: "FASHION & LIFESTYLE",
    content: `
      <rect x="220" y="160" width="360" height="480" rx="10" fill="#1b1d1f" stroke="#343938" stroke-width="1.5"/>
      <polygon points="320,520 400,240 480,520" fill="#111315" stroke="#4a5254" stroke-width="1"/>
      <circle cx="400" cy="220" r="28" fill="#D4FF78"/>
      <text x="400" y="580" fill="#F5F6F2" font-family="'Outfit', system-ui" font-size="14" letter-spacing="4" text-anchor="middle">DROP 04 / STRICT BLACK</text>
    `,
  },
  {
    file: "social-04.svg",
    title: "VOXEL FESTIVAL",
    sub: "BERLIN · OCT 14-18",
    tag: "PROMOTIONAL ANNOUNCEMENT",
    content: `
      <rect x="180" y="180" width="440" height="440" fill="#141716" stroke="#2e3831" stroke-width="1"/>
      <!-- Isometric cubes -->
      <polygon points="400,260 480,310 400,360 320,310" fill="#242e27" stroke="#D4FF78" stroke-width="1.5"/>
      <polygon points="320,310 400,360 400,460 320,410" fill="#18201b" stroke="#D4FF78" stroke-width="1.5"/>
      <polygon points="480,310 400,360 400,460 480,410" fill="#1e2821" stroke="#D4FF78" stroke-width="1.5"/>
      <text x="400" y="530" fill="#D4FF78" font-family="monospace" font-size="18" text-anchor="middle" font-weight="700">TICKETS NOW LIVE</text>
    `,
  },
  {
    file: "social-05.svg",
    title: "KANSO OBJECT 09",
    sub: "THE LOUNGE ARMCHAIR",
    tag: "MINIMAL PRODUCT",
    content: `
      <ellipse cx="400" cy="520" rx="180" ry="30" fill="#181a1c"/>
      <rect x="280" y="260" width="240" height="200" rx="20" fill="#202427" stroke="#3f474b" stroke-width="1.5"/>
      <rect x="310" y="320" width="180" height="120" rx="10" fill="#16191b"/>
      <line x1="300" y1="460" x2="280" y2="520" stroke="#D4FF78" stroke-width="3"/>
      <line x1="500" y1="460" x2="520" y2="520" stroke="#D4FF78" stroke-width="3"/>
      <text x="400" y="580" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="13" text-anchor="middle" letter-spacing="3">SOLID ASH &amp; RAW STEEL</text>
    `,
  },
  {
    file: "social-06.svg",
    title: "TERRA PURE EXTRACTS",
    sub: "ORGANIC APOTHECARY",
    tag: "BRAND CAMPAIGN",
    content: `
      <circle cx="400" cy="400" r="180" fill="#151b17" stroke="#2e3d33" stroke-width="1"/>
      <rect x="360" y="280" width="80" height="220" rx="16" fill="#1c2620" stroke="#3e5245" stroke-width="1.5"/>
      <rect x="380" y="240" width="40" height="40" rx="4" fill="#2d3f34"/>
      <rect x="370" y="340" width="60" height="100" rx="4" fill="#111513"/>
      <text x="400" y="390" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="11" text-anchor="middle" font-weight="600">TERRA</text>
      <text x="400" y="620" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14" text-anchor="middle">HARVEST 2026 / BATCH 88</text>
    `,
  },
  {
    file: "social-07.svg",
    title: "HYPER REAL LAB",
    sub: "EXPERIMENTAL 3D STUDY",
    tag: "EXPERIMENTAL DESIGN",
    content: `
      <defs>
        <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#D4FF78" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#111315" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="240" fill="url(#neonGlow)"/>
      <path d="M 200 450 C 300 250, 500 550, 600 350" fill="none" stroke="#D4FF78" stroke-width="3"/>
      <circle cx="400" cy="400" r="80" fill="#1b1e20" stroke="#D4FF78" stroke-width="1.5"/>
      <text x="400" y="405" fill="#F5F6F2" font-family="monospace" font-size="16" text-anchor="middle" font-weight="700">SHDR_09</text>
    `,
  },
  {
    file: "social-08.svg",
    title: "NOVUS CHRONO 01",
    sub: "TITANIUM HOROLOGY",
    tag: "PRODUCT ADVERTISING",
    content: `
      <circle cx="400" cy="400" r="180" fill="#16181a" stroke="#353b3e" stroke-width="3"/>
      <circle cx="400" cy="400" r="160" fill="#1a1d1f" stroke="#252a2c" stroke-width="1"/>
      <line x1="400" y1="240" x2="400" y2="260" stroke="#D4FF78" stroke-width="3"/>
      <line x1="400" y1="540" x2="400" y2="560" stroke="#D4FF78" stroke-width="3"/>
      <line x1="240" y1="400" x2="260" y2="400" stroke="#D4FF78" stroke-width="3"/>
      <line x1="540" y1="400" x2="560" y2="400" stroke="#D4FF78" stroke-width="3"/>
      <!-- Hands -->
      <line x1="400" y1="400" x2="480" y2="350" stroke="#F5F6F2" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="400" y1="400" x2="400" y2="290" stroke="#D4FF78" stroke-width="2" stroke-linecap="round"/>
      <circle cx="400" cy="400" r="6" fill="#D4FF78"/>
    `,
  },
  {
    file: "social-09.svg",
    title: "BRUTALIST PAVILION",
    sub: "CONCRETE PERSPECTIVES",
    tag: "CREATIVE CAMPAIGN",
    content: `
      <polygon points="180,600 360,200 620,200 440,600" fill="#1a1d1f" stroke="#3b4245" stroke-width="1.5"/>
      <polygon points="360,200 620,200 580,260 320,260" fill="#252a2d"/>
      <line x1="360" y1="200" x2="180" y2="600" stroke="#D4FF78" stroke-width="2"/>
      <text x="500" y="480" fill="#A5AAA7" font-family="monospace" font-size="13">55°40'N 12°34'E</text>
    `,
  },
  {
    file: "social-10.svg",
    title: "SOLSTICE COLD BREW",
    sub: "ELECTRIC CITRUS FUSION",
    tag: "PACKAGING & SOCIAL",
    content: `
      <rect x="330" y="240" width="140" height="300" rx="24" fill="#191c1b" stroke="#324037" stroke-width="2"/>
      <ellipse cx="400" cy="240" rx="70" ry="18" fill="#242e27"/>
      <rect x="350" y="320" width="100" height="140" rx="6" fill="#121514"/>
      <text x="400" y="380" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="700" font-size="18" text-anchor="middle">SOLSTICE</text>
      <text x="400" y="410" fill="#F5F6F2" font-family="'Outfit', system-ui" font-size="11" text-anchor="middle">NITRO COLD</text>
    `,
  },
  {
    file: "social-11.svg",
    title: "ECOSPHERE HORIZON",
    sub: "RESTORATIVE HABITATS",
    tag: "EDITORIAL SOCIAL",
    content: `
      <path d="M 220 540 A 180 180 0 0 1 580 540 Z" fill="#161c18" stroke="#2d3b31" stroke-width="1.5"/>
      <line x1="220" y1="540" x2="580" y2="540" stroke="#D4FF78" stroke-width="2"/>
      <circle cx="400" cy="440" r="10" fill="#D4FF78"/>
      <text x="400" y="600" fill="#F5F6F2" font-family="'Outfit', system-ui" font-size="14" letter-spacing="3" text-anchor="middle">BIO-CLIMATIC CITIES</text>
    `,
  },
  {
    file: "social-12.svg",
    title: "PULSE INTELLIGENCE",
    sub: "LATENCY: 0.12ms",
    tag: "TECH LAUNCH",
    content: `
      <rect x="180" y="180" width="440" height="440" rx="16" fill="#131618" stroke="#252d31" stroke-width="1.5"/>
      <!-- Neural graph -->
      <line x1="280" y1="320" x2="400" y2="260" stroke="#38454b" stroke-width="2"/>
      <line x1="400" y1="260" x2="520" y2="340" stroke="#38454b" stroke-width="2"/>
      <line x1="280" y1="320" x2="380" y2="460" stroke="#38454b" stroke-width="2"/>
      <line x1="520" y1="340" x2="380" y2="460" stroke="#38454b" stroke-width="2"/>
      <circle cx="280" cy="320" r="16" fill="#1b2226" stroke="#D4FF78" stroke-width="2"/>
      <circle cx="400" cy="260" r="22" fill="#D4FF78"/>
      <circle cx="520" cy="340" r="16" fill="#1b2226" stroke="#D4FF78" stroke-width="2"/>
      <circle cx="380" cy="460" r="20" fill="#1b2226" stroke="#D4FF78" stroke-width="2"/>
      <text x="400" y="560" fill="#D4FF78" font-family="monospace" font-size="14" text-anchor="middle" font-weight="700">AUTONOMOUS NEURAL FABRIC</text>
    `,
  },
];

socialTemplates.forEach((t) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="sbg_${t.file.replace(".", "_")}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#131517"/>
      <stop offset="100%" stop-color="#0b0d0e"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#sbg_${t.file.replace(".", "_")})"/>
  <!-- Subtle border container -->
  <rect x="24" y="24" width="752" height="752" rx="16" fill="none" stroke="#25292b" stroke-width="1.5"/>

  <!-- Top bar -->
  <text x="64" y="80" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="11" font-weight="600" letter-spacing="3">${t.tag}</text>
  <text x="736" y="80" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="12" text-anchor="end">QDELTA</text>

  <!-- Graphic artwork -->
  ${t.content}

  <!-- Bottom Title and Sub -->
  <text x="64" y="700" fill="#F5F6F2" font-family="'Outfit', system-ui" font-weight="700" font-size="28">${t.title}</text>
  <text x="64" y="730" fill="#A5AAA7" font-family="'Outfit', system-ui" font-size="14">${t.sub}</text>
  <text x="736" y="715" fill="#D4FF78" font-family="system-ui" font-size="22" text-anchor="end">↗</text>
</svg>`;
  fs.writeFileSync(path.join(socialDir, t.file), svg);
});

console.log("All 12 Social Media SVGs generated successfully!");
