const fs = require('fs');
function city(w, h, seed, sunX, f, F) {
  const ph = 2*Math.PI*(f%16)/16; let wi = 0;
  const h0=(n)=>{let x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x);};
  let s = seed;
  const R = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const ri = (a, b) => Math.round(a + R() * (b - a));
  const hz = Math.round(h * 0.68);
  let o = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14031C"/><stop offset="0.3" stop-color="#4A0934"/><stop offset="0.58" stop-color="#B3154A"/><stop offset="0.82" stop-color="#F2344C"/><stop offset="1" stop-color="#FF7744"/></linearGradient><linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD45E"/><stop offset="0.6" stop-color="#FF7A3D"/><stop offset="1" stop-color="#FF2E4A"/></linearGradient><linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A0D35"/><stop offset="1" stop-color="#10020E"/></linearGradient><linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF2E6E" stop-opacity="0"/><stop offset="1" stop-color="#FF2E6E" stop-opacity="0.35"/></linearGradient></defs>`;
  o += `<rect width="${w}" height="${hz}" fill="url(#sky)"/>`;
  for (let i = 0; i < 50; i++) { const sx=ri(0, w), sy=ri(0, hz * 0.3), base=0.3 + R() * 0.5; const tw=Math.max(0.05, base*(0.55+0.45*Math.sin(ph*(1+i%3)+i))); o += `<rect x="${sx}" y="${sy}" width="2" height="2" fill="#FFFFFF" opacity="${tw.toFixed(2)}"/>`; }
  o += `<circle cx="${sunX}" cy="${hz - 170}" r="200" fill="url(#sun)"/>`;
  const layer = (col, minH, maxH, minW, maxW, winP, ant) => {
    const blds = []; let x = -20;
    while (x < w) {
      const bw = ri(minW, maxW), bh = ri(minH, maxH), top = hz - bh;
      o += `<rect x="${x}" y="${top}" width="${bw}" height="${bh}" fill="${col}"/>`;
      if (ant && R() < 0.3) o += `<rect x="${x + Math.round(bw / 2)}" y="${top - ri(20, 50)}" width="2" height="60" fill="${col}"/>`;
      if (R() < 0.25) o += `<rect x="${x}" y="${top}" width="${bw}" height="2" fill="#FF4FA0" opacity="0.8"/>`;
      if (winP > 0) for (let wy = top + 12; wy < hz - 10; wy += 14) for (let wx = x + 8; wx < x + bw - 8; wx += 11) if (R() < winP) {
        const c = ['#FFD9A0', '#FF9A8A', '#FFE9BE', '#FF6F8E'][ri(0, 3)];
        const op = 0.6 + R() * 0.4; wi++;
        // só ~3% das janelas piscam; cada uma apaga por 12 frames (~1,7s) num ponto diferente do ciclo de 48
        const hv = h0(wi); const blinker = hv < 0.03; const start = Math.floor(((hv * 9973) % 1) * F);
        const off = blinker && ((f - start + F) % F) < 12;
        if (!off) o += `<rect x="${wx}" y="${wy}" width="5" height="7" fill="${c}" opacity="${op.toFixed(2)}"/>`;
      }
      blds.push([x, bw, bh]); x += bw + ri(0, 6);
    }
    return blds;
  };
  layer('#8A1A47', 160, 330, 60, 130, 0, false);
  o += `<rect y="${hz - 340}" width="${w}" height="340" fill="url(#haze)"/>`;
  const mid = layer('#43102F', 110, 260, 50, 110, 0.28, true);
  const near = [];
  for (const bx of [ri(-30, 40), ri(w - 200, w - 120)]) {
    const bw = ri(150, 210), bh = ri(330, 420);
    o += `<rect x="${bx}" y="${hz - bh}" width="${bw}" height="${bh}" fill="#1E0619"/>`;
    for (let wy = hz - bh + 16; wy < hz - 10; wy += 16) for (let wx = bx + 12; wx < bx + bw - 10; wx += 14) if (R() < 0.14) o += `<rect x="${wx}" y="${wy}" width="6" height="8" fill="#FFB38A" opacity="0.85"/>`;
    near.push([bx, bw, bh]);
  }
  o += `<rect y="${hz}" width="${w}" height="${h - hz}" fill="url(#water)"/>`;
  for (const [x, bw, bh] of mid) o += `<rect x="${x}" y="${hz}" width="${bw}" height="${Math.round(bh * 0.45)}" fill="#2A0822" opacity="0.55"/>`;
  for (const [x, bw, bh] of near) o += `<rect x="${x}" y="${hz}" width="${bw}" height="${Math.round(bh * 0.5)}" fill="#12020F" opacity="0.7"/>`;
  for (let i = 0; i < 120; i++) {
    const c = ['#FFD9A0', '#FF9A8A', '#FF4FA0'][ri(0, 2)];
    const x0=ri(0, w), y0=ri(hz + 6, h - 20), ww=ri(8, 46), hh=R() < 0.7 ? 2 : 3, op=0.15 + R() * 0.4; const dx=Math.round(Math.sin(ph+i*0.7)*6); o += `<rect x="${x0+dx}" y="${y0}" width="${ww}" height="${hh}" fill="${c}" opacity="${(op*(0.7+0.3*Math.sin(ph*2+i))).toFixed(2)}"/>`;
  }
  for (let i = 0; i < 16; i++) {
    const bw = Math.max(20, 300 - i * 17) * (0.9 + 0.1 * Math.sin(ph * 2 + i * 0.9)) + Math.sin(ph + i) * 8;
    o += `<rect x="${sunX - bw / 2}" y="${hz + 8 + i * 13}" width="${bw}" height="${i < 6 ? 5 : 3}" fill="#FF8A50" opacity="${(0.85 - i * 0.045).toFixed(2)}"/>`;
  }
  o += `<rect y="${hz - 1}" width="${w}" height="2" fill="#FF4FA0" opacity="0.7"/>`;
  const palm = (bx, topX, topY) => {
    const c = '#0D010B';
    o += `<path d="M ${bx} ${h} Q ${(bx + topX) / 2 + 40} ${(h + topY) / 2} ${topX} ${topY}" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/>`;
    for (const [dx, dy] of [[-170, 60], [-130, -10], [-40, -70], [70, -60], [160, 10], [150, 80], [-90, 95], [20, 110]])
      o += `<path d="M ${topX} ${topY} Q ${topX + dx * 0.55} ${topY + dy * 0.2 - 40} ${topX + dx} ${topY + dy} L ${topX + dx * 0.8} ${topY + dy - 14} Q ${topX + dx * 0.45} ${topY + dy * 0.2 - 26} ${topX} ${topY + 6} Z" fill="${c}"/>`;
  };
  palm(Math.round(w * 0.05), Math.round(w * 0.03), Math.round(h * 0.48));
  palm(Math.round(w * 0.95), Math.round(w * 0.985), Math.round(h * 0.42));
  // scanlines
  return o + '</svg>';
}

const F=48; fs.mkdirSync('frames',{recursive:true});
for(let f=0;f<F;f++){ fs.writeFileSync(`frames/intro_${String(f).padStart(2,'0')}.svg`, city(1440,900,9,980,f,F)); }
