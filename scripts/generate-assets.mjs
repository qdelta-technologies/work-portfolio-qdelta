import fs from "fs";
import path from "path";

const websitesDir = path.resolve("public/images/websites");
const socialDir = path.resolve("public/images/social");

fs.mkdirSync(websitesDir, { recursive: true });
fs.mkdirSync(socialDir, { recursive: true });

// 1. Forma Studio (High-contrast architectural gallery with clean ivory canvas)
fs.writeFileSync(
  path.join(websitesDir, "forma-studio.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="formaBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7F5F0"/>
      <stop offset="100%" stop-color="#ECE8DF"/>
    </linearGradient>
    <linearGradient id="darkStone" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1E22"/>
      <stop offset="100%" stop-color="#0E1113"/>
    </linearGradient>
  </defs>
  <!-- Background & Window Frame -->
  <rect width="1200" height="750" fill="url(#formaBg)"/>
  <!-- Browser Chrome Header -->
  <rect width="1200" height="46" fill="#181B1F"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#262B30"/>
  <text x="600" y="27" fill="#E2E8F0" font-family="'Outfit', system-ui, sans-serif" font-size="12" font-weight="500" text-anchor="middle">forma.studio — Architecture &amp; Spatial</text>
  
  <!-- Website Header -->
  <text x="80" y="105" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="800" font-size="24" letter-spacing="3">FORMA STUDIO</text>
  <text x="1120" y="105" fill="#3D444A" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="14" text-anchor="end">PROJECTS · PRACTICE · JOURNAL · CONTACT</text>
  <line x1="80" y1="130" x2="1120" y2="130" stroke="#D1CCC1" stroke-width="1.5"/>

  <!-- Hero Content -->
  <g transform="translate(80, 160)">
    <rect x="0" y="20" width="160" height="26" rx="4" fill="#0E1114"/>
    <text x="80" y="37" fill="#D4FF78" font-family="'Outfit', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="2" text-anchor="middle">SELECTED WORK 2026</text>
    <text x="0" y="100" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="800" font-size="58" letter-spacing="-2">Designing Quiet</text>
    <text x="0" y="165" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="800" font-size="58" letter-spacing="-2">Monuments to Light<tspan fill="#10B981">.</tspan></text>
    <text x="0" y="220" fill="#4B535A" font-family="'Outfit', system-ui, sans-serif" font-size="17" font-weight="400" max-width="480">Transforming natural limestone and monolithic shadows into sacred spaces.</text>
    
    <rect x="0" y="260" width="170" height="46" rx="8" fill="#0E1114"/>
    <text x="85" y="289" fill="#FFFFFF" font-family="'Outfit', system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">View Archive →</text>
  </g>

  <!-- Architectural Showcase Visual -->
  <g transform="translate(640, 170)">
    <rect width="480" height="340" rx="14" fill="url(#darkStone)" stroke="#2D3339" stroke-width="2"/>
    <!-- 3D Geometric Architectural Wireframe -->
    <polygon points="120,280 240,60 380,280" fill="#1C2126" stroke="#4B5563" stroke-width="2"/>
    <polygon points="240,60 380,280 430,240 290,50" fill="#252C33" stroke="#9CA3AF" stroke-width="1.5"/>
    <line x1="240" y1="60" x2="240" y2="280" stroke="#D4FF78" stroke-width="3"/>
    
    <!-- Floating high-contrast card label -->
    <rect x="30" y="30" width="160" height="32" rx="6" fill="#000000"/>
    <circle cx="48" cy="46" r="4" fill="#D4FF78"/>
    <text x="60" y="51" fill="#FFFFFF" font-family="'Outfit', system-ui, sans-serif" font-size="12" font-weight="700">KYOTO RESIDENCE</text>
    <text x="30" y="315" fill="#D4FF78" font-family="'Outfit', system-ui, sans-serif" font-size="13" font-weight="600">Completed 2026 · 620 sqm</text>
  </g>

  <!-- Bottom Featured Projects -->
  <g transform="translate(80, 545)">
    <rect x="0" y="0" width="325" height="155" rx="10" fill="#FFFFFF" stroke="#D1CCC1" stroke-width="1.5"/>
    <rect x="16" y="16" width="293" height="85" rx="6" fill="#181B1F"/>
    <polygon points="140,80 162,35 184,80" fill="#374151" stroke="#D4FF78" stroke-width="1.5"/>
    <text x="16" y="130" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="15">Nordic Pavilion</text>
    <text x="309" y="130" fill="#10B981" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="13" text-anchor="end">Oslo · 2025</text>
  </g>
  <g transform="translate(438, 545)">
    <rect x="0" y="0" width="325" height="155" rx="10" fill="#FFFFFF" stroke="#D1CCC1" stroke-width="1.5"/>
    <rect x="16" y="16" width="293" height="85" rx="6" fill="#181B1F"/>
    <circle cx="162" cy="58" r="26" fill="#1F2937" stroke="#D4FF78" stroke-width="2"/>
    <text x="16" y="130" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="15">Aethelgard Museum</text>
    <text x="309" y="130" fill="#10B981" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="13" text-anchor="end">Reykjavik</text>
  </g>
  <g transform="translate(795, 545)">
    <rect x="0" y="0" width="325" height="155" rx="10" fill="#FFFFFF" stroke="#D1CCC1" stroke-width="1.5"/>
    <rect x="16" y="16" width="293" height="85" rx="6" fill="#181B1F"/>
    <rect x="80" y="32" width="165" height="52" rx="4" fill="#1F2937" stroke="#D4FF78" stroke-width="1.5"/>
    <text x="16" y="130" fill="#0E1114" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="15">Solarium House</text>
    <text x="309" y="130" fill="#10B981" font-family="'Outfit', system-ui, sans-serif" font-weight="600" font-size="13" text-anchor="end">Zurich</text>
  </g>
</svg>`
);

// 2. Orbit Workspace (High-contrast SaaS with vibrant metric cards and graphs)
fs.writeFileSync(
  path.join(websitesDir, "orbit-workspace.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E131A"/>
      <stop offset="100%" stop-color="#080B0F"/>
    </linearGradient>
  </defs>
  <!-- Background & Chrome -->
  <rect width="1200" height="750" fill="url(#orbitGrad)"/>
  <rect width="1200" height="46" fill="#161E29"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#0A0E14"/>
  <text x="600" y="27" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">app.orbit.workspace/production-v3</text>

  <!-- Left Sidebar UI (High contrast) -->
  <rect x="0" y="46" width="230" height="704" fill="#111823" stroke="#253142" stroke-width="1.5"/>
  <circle cx="40" cy="85" r="14" fill="#D4FF78"/>
  <text x="66" y="91" fill="#FFFFFF" font-family="'Outfit', system-ui, sans-serif" font-weight="800" font-size="18" letter-spacing="1">ORBIT</text>
  
  <!-- Active Sidebar items -->
  <rect x="16" y="125" width="198" height="38" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
  <text x="44" y="150" fill="#38BDF8" font-family="system-ui" font-size="13" font-weight="700">◆ Sprints &amp; Releases</text>
  <text x="44" y="195" fill="#E2E8F0" font-family="system-ui" font-size="13" font-weight="500">◇ Metrics &amp; Telemetry</text>
  <text x="44" y="238" fill="#E2E8F0" font-family="system-ui" font-size="13" font-weight="500">◇ Team Throughput</text>
  <text x="44" y="281" fill="#E2E8F0" font-family="system-ui" font-size="13" font-weight="500">◇ Edge Workflows</text>
  <text x="44" y="324" fill="#E2E8F0" font-family="system-ui" font-size="13" font-weight="500">◇ System Settings</text>

  <!-- Top bar -->
  <rect x="230" y="46" width="970" height="64" fill="#131B26" stroke="#253142" stroke-width="1.5"/>
  <text x="270" y="86" fill="#FFFFFF" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="20">Sprint 48: Global Rollout</text>
  <rect x="1000" y="63" width="165" height="34" rx="6" fill="#D4FF78"/>
  <text x="1082" y="85" fill="#0F172A" font-family="'Outfit', system-ui, sans-serif" font-weight="700" font-size="13" text-anchor="middle">+ Deploy Service</text>

  <!-- High-contrast Metric Cards Row -->
  <g transform="translate(270, 135)">
    <rect x="0" y="0" width="215" height="95" rx="10" fill="#1A2230" stroke="#334155" stroke-width="1.5"/>
    <text x="20" y="32" fill="#94A3B8" font-family="system-ui" font-size="11" font-weight="700" letter-spacing="1">VELOCITY SCORE</text>
    <text x="20" y="70" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="30">98.4%</text>
    <rect x="140" y="50" width="60" height="24" rx="12" fill="#065F46"/>
    <text x="170" y="66" fill="#D4FF78" font-family="system-ui" font-size="11" font-weight="700" text-anchor="middle">+18%</text>

    <rect x="235" y="0" width="215" height="95" rx="10" fill="#1A2230" stroke="#334155" stroke-width="1.5"/>
    <text x="255" y="32" fill="#94A3B8" font-family="system-ui" font-size="11" font-weight="700" letter-spacing="1">TASKS COMPLETED</text>
    <text x="255" y="70" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="30">34 / 36</text>
    <rect x="375" y="50" width="60" height="24" rx="12" fill="#1E3A8A"/>
    <text x="405" y="66" fill="#38BDF8" font-family="system-ui" font-size="11" font-weight="700" text-anchor="middle">Ahead</text>

    <rect x="470" y="0" width="415" height="95" rx="10" fill="#1A2230" stroke="#334155" stroke-width="1.5"/>
    <text x="490" y="32" fill="#94A3B8" font-family="system-ui" font-size="11" font-weight="700" letter-spacing="1">RESPONSE LATENCY (P99)</text>
    <!-- Vibrant Glowing Sparkline -->
    <polyline points="490,75 550,68 610,76 670,52 730,42 790,56 850,38" fill="none" stroke="#D4FF78" stroke-width="3"/>
    <circle cx="850" cy="38" r="5" fill="#D4FF78"/>
  </g>

  <!-- High-contrast Kanban Columns -->
  <g transform="translate(270, 255)">
    <!-- Column 1 -->
    <rect x="0" y="0" width="280" height="455" rx="10" fill="#141C26" stroke="#253142" stroke-width="1.5"/>
    <text x="20" y="32" fill="#38BDF8" font-family="system-ui" font-size="13" font-weight="700">IN PROGRESS (3)</text>
    
    <rect x="16" y="50" width="248" height="115" rx="8" fill="#1E2837" stroke="#3B495C" stroke-width="1.5"/>
    <text x="32" y="80" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="15">Zero-Trust Authentication</text>
    <rect x="32" y="92" width="110" height="20" rx="4" fill="#450A0A"/>
    <text x="87" y="106" fill="#FCA5A5" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">CRITICAL · P0</text>
    <circle cx="235" cy="135" r="10" fill="#D4FF78"/>

    <rect x="16" y="180" width="248" height="115" rx="8" fill="#1E2837" stroke="#3B495C" stroke-width="1.5"/>
    <text x="32" y="210" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="15">Edge Mesh Rebalancing</text>
    <rect x="32" y="222" width="100" height="20" rx="4" fill="#0C4A6E"/>
    <text x="82" y="236" fill="#7DD3FC" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">INFRASTRUCTURE</text>

    <!-- Column 2 -->
    <rect x="306" y="0" width="280" height="455" rx="10" fill="#141C26" stroke="#253142" stroke-width="1.5"/>
    <text x="326" y="32" fill="#F59E0B" font-family="system-ui" font-size="13" font-weight="700">REVIEW &amp; QA (2)</text>
    <rect x="322" y="50" width="248" height="115" rx="8" fill="#1E2837" stroke="#3B495C" stroke-width="1.5"/>
    <text x="338" y="80" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="15">Design System Tokens V4</text>
    <rect x="338" y="92" width="95" height="20" rx="4" fill="#065F46"/>
    <text x="385" y="106" fill="#86EFAC" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">VERIFIED</text>

    <!-- Column 3 -->
    <rect x="612" y="0" width="275" height="455" rx="10" fill="#141C26" stroke="#253142" stroke-width="1.5"/>
    <text x="632" y="32" fill="#10B981" font-family="system-ui" font-size="13" font-weight="700">RELEASED (8)</text>
    <rect x="628" y="50" width="243" height="95" rx="8" fill="#1E2837" stroke="#10B981" stroke-width="1.5"/>
    <text x="644" y="80" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="15">Node SDK v3.2.0</text>
    <text x="644" y="104" fill="#D4FF78" font-family="system-ui" font-size="12" font-weight="600">✓ Production Verified</text>
  </g>
</svg>`
);

// 3. North Creative (Stark black, pure white typography & lime contrast)
fs.writeFileSync(
  path.join(websitesDir, "north-creative.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#0A0B0D"/>
  <rect width="1200" height="46" fill="#16181C"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#050607"/>
  <text x="600" y="27" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">northcreative.agency — Copenhagen &amp; New York</text>

  <!-- Agency Nav -->
  <text x="80" y="110" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="28" letter-spacing="4">NORTH /</text>
  <text x="1120" y="110" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="700" font-size="15" text-anchor="end">EXPERIENCES · BRANDS · TECH</text>
  <line x1="80" y1="135" x2="1120" y2="135" stroke="#2A2E35" stroke-width="2"/>

  <!-- Big Bold High-contrast Typography Hero -->
  <g transform="translate(80, 180)">
    <text x="0" y="65" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="78" letter-spacing="-3">WE CRAFT</text>
    <text x="0" y="150" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="78" letter-spacing="-3">ICONIC DIGITAL</text>
    <text x="0" y="235" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="900" font-size="78" letter-spacing="-3">PRESENCES.</text>
    <text x="0" y="300" fill="#CBD5E1" font-family="'Outfit', system-ui" font-size="18" font-weight="400">Award-winning creative engineering for world-changing visionary brands.</text>
  </g>

  <!-- Right Visual / Video Reel High-contrast Frame -->
  <g transform="translate(680, 160)">
    <rect width="440" height="420" rx="16" fill="#14181F" stroke="#333E4F" stroke-width="2"/>
    <circle cx="220" cy="210" r="140" fill="#1E2530" stroke="#475569" stroke-width="1.5"/>
    <circle cx="220" cy="210" r="54" fill="#D4FF78"/>
    <!-- Play Triangle -->
    <polygon points="214,196 236,210 214,224" fill="#0A0B0D"/>
    <rect x="80" y="310" width="280" height="34" rx="6" fill="#0A0B0D" stroke="#333E4F" stroke-width="1"/>
    <text x="220" y="332" fill="#FFFFFF" font-family="'Outfit', system-ui" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="2">2026 SHOWREEL (01:40)</text>
  </g>

  <!-- Bottom Award Accolades -->
  <line x1="80" y1="625" x2="1120" y2="625" stroke="#2A2E35" stroke-width="1.5"/>
  <text x="80" y="670" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="700">★ AWWWARDS (×12)</text>
  <text x="440" y="670" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="700">★ FWA OF THE DAY (×8)</text>
  <text x="760" y="670" fill="#FFFFFF" font-family="system-ui" font-size="14" font-weight="700">★ CANNES LIONS BRONZE</text>
  <rect x="990" y="645" width="130" height="36" rx="6" fill="#D4FF78"/>
  <text x="1055" y="668" fill="#0A0B0D" font-family="system-ui" font-size="13" font-weight="800" text-anchor="middle">EXPLORE ↗</text>
</svg>`
);

// 4. Bloom & Co. (High-contrast organic luxury aesthetic with warm cream canvas)
fs.writeFileSync(
  path.join(websitesDir, "bloom-and-co.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bloomBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF9F4"/>
      <stop offset="100%" stop-color="#EFECE2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bloomBg)"/>
  <rect width="1200" height="46" fill="#1C261E"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#0E1610"/>
  <text x="600" y="27" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">bloomandco.botanics — Pure Organic Apothecary</text>

  <!-- Editorial Brand Header -->
  <text x="600" y="105" fill="#0E2314" font-family="'Outfit', serif, system-ui" font-weight="800" font-size="30" text-anchor="middle" letter-spacing="4">BLOOM &amp; CO.</text>
  <text x="80" y="105" fill="#3A4D3E" font-family="'Outfit', system-ui" font-size="14" font-weight="600">EST. 2021</text>
  <text x="1120" y="105" fill="#0E2314" font-family="'Outfit', system-ui" font-size="14" font-weight="700" text-anchor="end">CART (2) · SEARCH</text>
  <line x1="80" y1="130" x2="1120" y2="130" stroke="#D3CFC3" stroke-width="1.5"/>

  <!-- Hero Content -->
  <g transform="translate(80, 180)">
    <rect x="0" y="0" width="200" height="28" rx="14" fill="#0E2314"/>
    <text x="100" y="18" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="11" font-weight="700" letter-spacing="2" text-anchor="middle">100% ORGANIC BOTANICALS</text>
    <text x="0" y="80" fill="#0E2314" font-family="'Outfit', system-ui" font-weight="800" font-size="52" letter-spacing="-1">Pure Botanicals for</text>
    <text x="0" y="140" fill="#0E2314" font-family="'Outfit', system-ui" font-weight="800" font-size="52" letter-spacing="-1">Intentional Living.</text>
    <text x="0" y="200" fill="#3D4E41" font-family="'Outfit', system-ui" font-size="17" font-weight="400">Cold-pressed plant essences sustainably harvested from wild alpine meadows.</text>
    <rect x="0" y="240" width="180" height="48" rx="8" fill="#0E2314"/>
    <text x="90" y="270" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="700" font-size="15" text-anchor="middle">Explore Extracts →</text>
  </g>

  <!-- Product Showcase Card (High Contrast) -->
  <g transform="translate(680, 160)">
    <rect width="440" height="460" rx="16" fill="#FFFFFF" stroke="#D3CFC3" stroke-width="2"/>
    <!-- Deep Forest Bottle Mockup -->
    <rect x="195" y="70" width="50" height="45" rx="5" fill="#2E3D31"/>
    <rect x="170" y="115" width="100" height="230" rx="20" fill="#0A1F10" stroke="#37523C" stroke-width="2"/>
    <!-- Bottle White Label with Dark Typography -->
    <rect x="180" y="170" width="80" height="120" rx="4" fill="#FFFFFF"/>
    <text x="220" y="210" fill="#0A1F10" font-family="'Outfit', system-ui" font-size="12" font-weight="800" text-anchor="middle">BLOOM</text>
    <text x="220" y="230" fill="#4B6350" font-family="system-ui" font-size="10" font-weight="600" text-anchor="middle">SERUM 01</text>
    
    <text x="220" y="390" fill="#0E2314" font-family="'Outfit', system-ui" font-size="20" font-weight="800" text-anchor="middle">Wild Rosehip Facial Oil</text>
    <rect x="160" y="405" width="120" height="30" rx="15" fill="#0A1F10"/>
    <text x="220" y="425" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="14" font-weight="700" text-anchor="middle">$64 USD</text>
  </g>
</svg>`
);

// 5. Atelier Store (High-contrast luxury design store)
fs.writeFileSync(
  path.join(websitesDir, "atelier-store.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#0C0D10"/>
  <rect width="1200" height="46" fill="#181B20"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#07080A"/>
  <text x="600" y="27" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">atelier.objects/flagship-collection</text>

  <!-- Store Header -->
  <text x="80" y="105" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="26" letter-spacing="4">ATELIER STORE</text>
  <text x="1120" y="105" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="700" font-size="14" text-anchor="end">CART (0) · SEARCH</text>
  <line x1="80" y1="130" x2="1120" y2="130" stroke="#2D333B" stroke-width="1.5"/>

  <!-- Products 3-Col High-Contrast Grid -->
  <g transform="translate(80, 160)">
    <!-- Item 1 -->
    <rect x="0" y="0" width="320" height="500" rx="14" fill="#161920" stroke="#333A44" stroke-width="2"/>
    <rect x="25" y="25" width="270" height="300" rx="10" fill="#202530"/>
    <!-- High-contrast chair graphic -->
    <polygon points="100,120 220,120 190,230 130,230" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
    <line x1="130" y1="230" x2="110" y2="280" stroke="#D4FF78" stroke-width="3"/>
    <line x1="190" y1="230" x2="210" y2="280" stroke="#D4FF78" stroke-width="3"/>
    <text x="25" y="365" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="20">The Arc Armchair</text>
    <text x="25" y="395" fill="#94A3B8" font-family="'Outfit', system-ui" font-size="14">Black Anodized Aluminum</text>
    <rect x="25" y="425" width="130" height="36" rx="6" fill="#D4FF78"/>
    <text x="90" y="448" fill="#0C0D10" font-family="'Outfit', system-ui" font-weight="800" font-size="15" text-anchor="middle">$1,280 USD</text>

    <!-- Item 2 -->
    <rect x="360" y="0" width="320" height="500" rx="14" fill="#161920" stroke="#333A44" stroke-width="2"/>
    <rect x="385" y="25" width="270" height="300" rx="10" fill="#202530"/>
    <ellipse cx="520" cy="180" rx="55" ry="85" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
    <ellipse cx="520" cy="110" rx="26" ry="10" fill="#0C0D10"/>
    <text x="385" y="365" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="20">Kiso Ceramic Vessel</text>
    <text x="385" y="395" fill="#94A3B8" font-family="'Outfit', system-ui" font-size="14">Hand-thrown Stoneware</text>
    <rect x="385" y="425" width="115" height="36" rx="6" fill="#D4FF78"/>
    <text x="442" y="448" fill="#0C0D10" font-family="'Outfit', system-ui" font-weight="800" font-size="15" text-anchor="middle">$340 USD</text>

    <!-- Item 3 -->
    <rect x="720" y="0" width="320" height="500" rx="14" fill="#161920" stroke="#333A44" stroke-width="2"/>
    <rect x="745" y="25" width="270" height="300" rx="10" fill="#202530"/>
    <circle cx="880" cy="180" r="60" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/>
    <line x1="880" y1="40" x2="880" y2="120" stroke="#D4FF78" stroke-width="3"/>
    <text x="745" y="365" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="20">Halo Pendant Lamp</text>
    <text x="745" y="395" fill="#94A3B8" font-family="'Outfit', system-ui" font-size="14">Smoked Borosilicate Glass</text>
    <rect x="745" y="425" width="115" height="36" rx="6" fill="#D4FF78"/>
    <text x="802" y="448" fill="#0C0D10" font-family="'Outfit', system-ui" font-weight="800" font-size="15" text-anchor="middle">$490 USD</text>
  </g>
</svg>`
);

// 6. Mono Launch (Developer platform with sharp luminous terminal)
fs.writeFileSync(
  path.join(websitesDir, "mono-launch.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#090C12"/>
  <rect width="1200" height="46" fill="#141B26"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#06090E"/>
  <text x="600" y="27" fill="#94A3B8" font-family="monospace" font-size="12" text-anchor="middle">mono.build/v2.8-edge</text>

  <!-- Hero Headline -->
  <g transform="translate(80, 115)">
    <rect x="0" y="0" width="170" height="30" rx="15" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
    <text x="85" y="20" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="700" text-anchor="middle">v2.8 STABLE RELEASE</text>
    <text x="0" y="80" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="60" letter-spacing="-2">The Zero-Overhead</text>
    <text x="0" y="145" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="60" letter-spacing="-2">State Engine<tspan fill="#D4FF78">.</tspan></text>
    <text x="0" y="195" fill="#CBD5E1" font-family="system-ui" font-size="18" font-weight="500">Lightning-fast distributed caches with automated edge replication across 280+ POPs.</text>
  </g>

  <!-- High-contrast Terminal Window -->
  <g transform="translate(80, 360)">
    <rect width="1040" height="320" rx="14" fill="#05070B" stroke="#38BDF8" stroke-width="2"/>
    <rect width="1040" height="42" rx="14" fill="#111827"/>
    <circle cx="24" cy="21" r="5" fill="#EF4444"/>
    <circle cx="40" cy="21" r="5" fill="#F59E0B"/>
    <circle cx="56" cy="21" r="5" fill="#10B981"/>
    <text x="90" y="26" fill="#E2E8F0" font-family="monospace" font-size="13">zsh — npm install @mono/engine</text>

    <!-- High-contrast syntax code lines -->
    <text x="36" y="85" fill="#94A3B8" font-family="monospace" font-size="15">$ npx mono-init --template=distributed-cache</text>
    <text x="36" y="125" fill="#D4FF78" font-family="monospace" font-size="15" font-weight="700">✓ Successfully compiled and verified edge clusters in 12ms</text>
    <text x="36" y="165" fill="#38BDF8" font-family="monospace" font-size="15">import <tspan fill="#FFFFFF">{ createStore, edgeSync }</tspan> from <tspan fill="#A7F3D0">"@mono/engine"</tspan>;</text>
    <text x="36" y="205" fill="#FFFFFF" font-family="monospace" font-size="15">export const cache = createStore({ strategy: <tspan fill="#D4FF78">"instant-replicate"</tspan>, ttl: 86400 });</text>
    <text x="36" y="245" fill="#10B981" font-family="monospace" font-size="15">// Ready: 14.8M ops/sec with zero latency overhead</text>
  </g>
</svg>`
);

// 7. Pixel Portfolio (3D Interactive art portfolio with high-contrast gradient sphere)
fs.writeFileSync(
  path.join(websitesDir, "pixel-portfolio.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#D4FF78"/>
      <stop offset="45%" stop-color="#06B6D4"/>
      <stop offset="85%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="750" fill="#0A0B12"/>
  <rect width="1200" height="46" fill="#151724"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#05060A"/>
  <text x="600" y="27" fill="#C7D2FE" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">elenavance.design/spatial-archive</text>

  <!-- Header -->
  <text x="80" y="110" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="26">ELENA VANCE</text>
  <text x="1120" y="110" fill="#D4FF78" font-family="'Outfit', system-ui" font-weight="700" font-size="15" text-anchor="end">3D ART DIRECTION · WEBGL</text>
  <line x1="80" y1="135" x2="1120" y2="135" stroke="#25293A" stroke-width="1.5"/>

  <!-- High-contrast Holographic Visual -->
  <g transform="translate(680, 360)">
    <circle cx="0" cy="0" r="160" fill="url(#sphereGrad)" stroke="#FFFFFF" stroke-width="2"/>
    <ellipse cx="0" cy="0" rx="220" ry="70" fill="none" stroke="#D4FF78" stroke-width="2.5" stroke-dasharray="8 6"/>
  </g>

  <!-- Editorial Text Overlay -->
  <text x="80" y="230" fill="#D4FF78" font-family="'Outfit', system-ui" font-size="13" font-weight="700" letter-spacing="3">SELECTED ARCHIVE 2024–2026</text>
  <text x="80" y="300" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="64" letter-spacing="-2">Interactive Spatial</text>
  <text x="80" y="375" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="900" font-size="64" letter-spacing="-2">Experiences<tspan fill="#D4FF78">.</tspan></text>
  <text x="80" y="440" fill="#CBD5E1" font-family="'Outfit', system-ui" font-size="18">Real-time WebGL installations, audiovisual sculptures, and virtual worlds.</text>

  <!-- High-contrast Projects Ribbon -->
  <g transform="translate(80, 560)">
    <rect x="0" y="0" width="500" height="120" rx="12" fill="#141724" stroke="#374151" stroke-width="2"/>
    <text x="28" y="48" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="20">01 / AURA IMMERSIVE</text>
    <text x="28" y="80" fill="#CBD5E1" font-family="'Outfit', system-ui" font-size="14">Spatial WebGL Installation · Milan Design Week</text>
    <rect x="440" y="40" width="40" height="40" rx="8" fill="#D4FF78"/>
    <text x="460" y="65" fill="#0A0B12" font-size="18" font-weight="800" text-anchor="middle">↗</text>

    <rect x="540" y="0" width="500" height="120" rx="12" fill="#141724" stroke="#374151" stroke-width="2"/>
    <text x="568" y="48" fill="#FFFFFF" font-family="'Outfit', system-ui" font-weight="800" font-size="20">02 / HYPER SPHERE</text>
    <text x="568" y="80" fill="#CBD5E1" font-family="'Outfit', system-ui" font-size="14">Generative Audio-Reactive World · Tokyo</text>
    <rect x="980" y="40" width="40" height="40" rx="8" fill="#D4FF78"/>
    <text x="1000" y="65" fill="#0A0B12" font-size="18" font-weight="800" text-anchor="middle">↗</text>
  </g>
</svg>`
);

// 8. Studio Experiments (High-contrast generative lab with vivid neon waveforms)
fs.writeFileSync(
  path.join(websitesDir, "studio-experiments.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#06090D"/>
  <rect width="1200" height="46" fill="#111822"/>
  <circle cx="28" cy="23" r="5" fill="#EF4444"/>
  <circle cx="44" cy="23" r="5" fill="#F59E0B"/>
  <circle cx="60" cy="23" r="5" fill="#10B981"/>
  <rect x="360" y="10" width="480" height="26" rx="6" fill="#040608"/>
  <text x="600" y="27" fill="#94A3B8" font-family="monospace" font-size="12" text-anchor="middle">lab.experiments.io/particle-physics</text>

  <!-- Generative Grid Canvas with High Contrast Neon Waves -->
  <g transform="translate(80, 100)">
    <rect width="1040" height="580" rx="14" fill="#0B1017" stroke="#253245" stroke-width="2"/>
    <!-- Glowing neon curves -->
    <path d="M 50 300 Q 300 80, 550 300 T 1000 300" fill="none" stroke="#06B6D4" stroke-width="3"/>
    <path d="M 50 320 Q 300 130, 550 320 T 1000 320" fill="none" stroke="#F43F5E" stroke-width="3"/>
    <path d="M 50 340 Q 300 180, 550 340 T 1000 340" fill="none" stroke="#D4FF78" stroke-width="4"/>
    <path d="M 50 360 Q 300 230, 550 360 T 1000 360" fill="none" stroke="#A855F7" stroke-width="3"/>

    <!-- High-contrast Telemetry HUD -->
    <rect x="40" y="40" width="310" height="210" rx="10" fill="#05080C" stroke="#D4FF78" stroke-width="2"/>
    <text x="65" y="75" fill="#D4FF78" font-family="monospace" font-size="13" font-weight="700">EXP // 084_WAVE_PARTICLE</text>
    <text x="65" y="110" fill="#FFFFFF" font-family="monospace" font-size="14" font-weight="600">OSCILLATION: 44.8 Hz</text>
    <text x="65" y="140" fill="#FFFFFF" font-family="monospace" font-size="14" font-weight="600">DAMPING RATIO: 0.94</text>
    <text x="65" y="170" fill="#FFFFFF" font-family="monospace" font-size="14" font-weight="600">ACTIVE PARTICLES: 64,000</text>
    <rect x="65" y="195" width="260" height="8" rx="4" fill="#1E293B"/>
    <rect x="65" y="195" width="190" height="8" rx="4" fill="#D4FF78"/>
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
