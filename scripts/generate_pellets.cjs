const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../public/produtos');
fs.mkdirSync(outDir, { recursive: true });

function generatePelletsSVG(type) {
  let colors = [];
  let isCrystal = false;

  if (type === 'pp') {
    // Vivid Yellow and Rich Green pellets
    colors = [
      '#eab308', '#facc15', '#ca8a04', '#eab308', '#fde047',
      '#15803d', '#16a34a', '#22c55e', '#166534', '#15803d'
    ];
  } else if (type === 'abs') {
    // Piano Black and Creamy Ivory/Off-white pellets
    colors = [
      '#1c1917', '#292524', '#0c0a09', '#1c1917', '#262626',
      '#f5f5f4', '#e7e5e4', '#d6d3d1', '#f5f5f0', '#e5e5e0'
    ];
  } else if (type === 'psai') {
    // Sky Blue and Bright Sunshine Yellow pellets
    colors = [
      '#38bdf8', '#0284c7', '#0ea5e9', '#60a5fa', '#0369a1',
      '#eab308', '#facc15', '#ca8a04', '#eab308', '#fde047'
    ];
  } else if (type === 'psstd') {
    // Crystal transparent clear pellets
    isCrystal = true;
    colors = [
      'rgba(255,255,255,0.85)', 'rgba(240,249,255,0.7)',
      'rgba(224,242,254,0.6)', 'rgba(186,230,253,0.5)',
      'rgba(255,255,255,0.95)'
    ];
  }

  const width = 800;
  const height = 500;
  
  // Densely packed grid with jitter to cover 100% of the surface
  const cols = 28;
  const rows = 18;
  const colStep = width / cols;
  const rowStep = height / rows;

  let seed = type.charCodeAt(0) * 211 + (type.charCodeAt(1) || 71) * 37;
  function rand() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  let pellets = [];

  // Generate 2 layers: background filler layer and foreground crisp layer
  // Layer 0: deeper base fill
  for (let r = -1; r <= rows + 1; r++) {
    for (let c = -1; c <= cols + 1; c++) {
      const offsetX = (r % 2 === 0 ? 0 : colStep * 0.5) + (rand() - 0.5) * 12;
      const offsetY = (rand() - 0.5) * 10;
      const x = c * colStep + offsetX;
      const y = r * rowStep + offsetY;
      const rx = 16 + rand() * 7;
      const ry = 11 + rand() * 5;
      const rot = (rand() - 0.5) * 160;
      const color = colors[Math.floor(rand() * colors.length)];
      pellets.push({ x, y, rx, ry, rot, color, layer: 0, z: y + rand() * 10 });
    }
  }

  // Layer 1: foreground scattered pellets for depth
  for (let i = 0; i < 220; i++) {
    const x = rand() * width;
    const y = rand() * height;
    const rx = 17 + rand() * 8;
    const ry = 12 + rand() * 6;
    const rot = rand() * 180;
    const color = colors[Math.floor(rand() * colors.length)];
    pellets.push({ x, y, rx, ry, rot, color, layer: 1, z: y + 50 + rand() * 20 });
  }

  // Sort by z for realistic piling
  pellets.sort((a, b) => a.z - b.z);

  const pelletsXml = pellets
    .map((p) => {
      if (isCrystal) {
        return `
    <g transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) rotate(${p.rot.toFixed(1)})">
      <ellipse cx="0" cy="4" rx="${p.rx.toFixed(1)}" ry="${p.ry.toFixed(1)}" fill="rgba(0,0,0,0.3)" filter="blur(3px)" />
      <ellipse cx="0" cy="0" rx="${p.rx.toFixed(1)}" ry="${p.ry.toFixed(1)}" fill="url(#crystalGrad)" stroke="rgba(255,255,255,0.75)" stroke-width="1.4" />
      <path d="M -${(p.rx * 0.55).toFixed(1)} -${(p.ry * 0.3).toFixed(1)} Q 0 -${(p.ry * 0.65).toFixed(1)} ${(p.rx * 0.5).toFixed(1)} -${(p.ry * 0.25).toFixed(1)}" stroke="white" stroke-width="2.2" fill="none" opacity="0.9" />
      <circle cx="${(p.rx * 0.25).toFixed(1)}" cy="${(p.ry * 0.25).toFixed(1)}" r="2" fill="white" opacity="0.95" />
    </g>`;
      }

      // Solid color pellets with realistic 3D bevel and reflection
      const isDark = p.color.includes('#1c') || p.color.includes('#29') || p.color.includes('#0c') || p.color.includes('#26');
      const glossOpacity = isDark ? '0.45' : '0.35';
      const specOpacity = isDark ? '0.85' : '0.7';

      return `
    <g transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) rotate(${p.rot.toFixed(1)})">
      <!-- Ambient Shadow -->
      <ellipse cx="1" cy="4.5" rx="${p.rx.toFixed(1)}" ry="${p.ry.toFixed(1)}" fill="rgba(0,0,0,0.42)" filter="blur(3px)" />
      <!-- Pellet Body -->
      <rect x="-${p.rx.toFixed(1)}" y="-${p.ry.toFixed(1)}" width="${(p.rx * 2).toFixed(1)}" height="${(p.ry * 2).toFixed(1)}" rx="${(p.ry * 0.8).toFixed(1)}" fill="${p.color}" />
      <!-- Top Soft Highlight -->
      <ellipse cx="-${(p.rx * 0.15).toFixed(1)}" cy="-${(p.ry * 0.35).toFixed(1)}" rx="${(p.rx * 0.6).toFixed(1)}" ry="${(p.ry * 0.35).toFixed(1)}" fill="white" opacity="${glossOpacity}" />
      <!-- Specular Highlight Point -->
      <circle cx="-${(p.rx * 0.3).toFixed(1)}" cy="-${(p.ry * 0.4).toFixed(1)}" r="2.2" fill="white" opacity="${specOpacity}" />
    </g>`;
    })
    .join('\n');

  const baseFill = isCrystal ? '#1e293b' : (type === 'abs' ? '#27272a' : '#14532d');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <defs>
    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.92)" />
      <stop offset="35%" stop-color="rgba(224,242,254,0.55)" />
      <stop offset="70%" stop-color="rgba(186,230,253,0.3)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.8)" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${baseFill}" />
  ${pelletsXml}
</svg>`;

  const filePath = path.join(outDir, `${type}-pellets.svg`);
  fs.writeFileSync(filePath, svg);
  console.log('Regenerated dense macro:', filePath);
}

generatePelletsSVG('pp');
generatePelletsSVG('abs');
generatePelletsSVG('psai');
generatePelletsSVG('psstd');
