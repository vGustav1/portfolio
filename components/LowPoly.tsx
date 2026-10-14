type P = { size?: number };

export function IdCard({ size = 84 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <polygon points="24,92 104,80 104,85 24,97" fill="#A79F8C" />
      <polygon points="18,40 98,28 104,80 24,92" fill="#E9E3D3" />
      <polygon points="18,40 98,28 100,44 20,56" fill="#F7F2E6" />
      <polygon points="30,50 52,47 55,72 33,75" fill="#5B6B8C" />
      <polygon points="30,50 52,47 42,62" fill="#7A8BB0" />
      <polygon points="60,50 92,45 92,49 60,54" fill="#9C9480" />
      <polygon points="60,60 90,56 90,60 60,64" fill="#9C9480" />
      <polygon points="60,70 82,67 82,71 60,74" fill="#9C9480" />
    </svg>
  );
}

export function Monitor({ size = 84 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <polygon points="20,30 80,22 104,34 44,42" fill="#B9BEC9" />
      <polygon points="20,30 44,42 44,96 20,84" fill="#8E95A6" />
      <polygon points="44,42 104,34 104,88 44,96" fill="#D7DBE3" />
      <polygon points="52,48 96,42 96,80 52,86" fill="#1E3A8A" />
      <polygon points="52,48 72,45 52,64" fill="#3B5FC0" />
      <polygon points="58,70 66,69 66,72 58,73" fill="#7FD3A8" />
      <polygon points="60,96 88,92 94,106 54,110" fill="#7A8194" />
    </svg>
  );
}

export function Trophy({ size = 84 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <polygon points="34,22 86,22 78,58 42,58" fill="#F2B53A" />
      <polygon points="34,22 42,58 52,64" fill="#C98A1E" />
      <polygon points="86,22 78,58 68,64" fill="#FFD27A" />
      <polygon points="34,22 86,22 60,30" fill="#FFE29A" />
      <polygon points="54,62 66,62 64,82 56,82" fill="#C98A1E" />
      <polygon points="44,78 76,78 80,84 40,84" fill="#A87428" />
      <polygon points="40,84 80,84 86,98 34,98" fill="#7A5520" />
    </svg>
  );
}

export function Gamepad({ size = 84 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <polygon points="18,54 38,38 82,38 102,54 106,82 92,94 76,82 44,82 28,94 14,82" fill="#3A3F4D" />
      <polygon points="18,54 38,38 82,38 102,54 60,48" fill="#5A6074" />
      <polygon points="14,82 28,94 44,82" fill="#22262F" />
      <polygon points="106,82 92,94 76,82" fill="#22262F" />
      <polygon points="34,58 40,58 40,52 46,52 46,58 52,58 52,64 46,64 46,70 40,70 40,64 34,64" fill="#C9CED8" />
      <polygon points="78,50 84,55 78,60 72,55" fill="#FF2E88" />
      <polygon points="88,60 94,65 88,70 82,65" fill="#2EF2FF" />
      <polygon points="70,60 76,65 70,70 64,65" fill="#FFE36E" />
    </svg>
  );
}

export function Phone({ size = 84 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <polygon points="70,18 74,18 74,4 70,6" fill="#22262F" />
      <polygon points="36,24 42,20 46,104 40,100" fill="#22262F" />
      <polygon points="42,20 78,16 82,100 46,104" fill="#3A3F4D" />
      <polygon points="48,28 74,25 75,52 49,55" fill="#7FD3A8" />
      <polygon points="48,28 62,26 48,42" fill="#A8E6C6" />
      <polygon points="50,62 58,61 58,66 50,67" fill="#9AA1B0" />
      <polygon points="62,61 70,60 70,65 62,66" fill="#9AA1B0" />
      <polygon points="50,72 58,71 58,76 50,77" fill="#9AA1B0" />
      <polygon points="62,71 70,70 70,75 62,76" fill="#9AA1B0" />
      <polygon points="50,82 58,81 58,86 50,87" fill="#9AA1B0" />
      <polygon points="62,81 70,80 70,85 62,86" fill="#9AA1B0" />
    </svg>
  );
}

export function Mail({ size = 46 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="4,12 44,12 44,38 4,38" fill="#8E1450" />
      <polygon points="4,12 24,27 4,38" fill="#C41E6B" />
      <polygon points="44,12 24,27 44,38" fill="#A3175C" />
      <polygon points="4,38 24,24 44,38" fill="#FF2E88" />
      <polygon points="4,12 44,12 24,28" fill="#FF6FAE" />
      <polygon points="4,12 24,12 24,28" fill="#FF8FC0" />
    </svg>
  );
}

export function Chat({ size = 46 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="10,8 38,8 46,18 44,32 34,38 18,38 8,46 10,36 3,28 3,16" fill="#1FB5C2" />
      <polygon points="10,8 38,8 24,22" fill="#7FF7FF" />
      <polygon points="38,8 46,18 24,22" fill="#2EF2FF" />
      <polygon points="3,16 10,8 24,22" fill="#4FF5FF" />
      <polygon points="3,28 3,16 24,22" fill="#22C9D6" />
      <polygon points="46,18 44,32 24,22" fill="#18A3AF" />
      <polygon points="44,32 34,38 24,22" fill="#138A94" />
      <polygon points="18,38 8,46 10,36" fill="#138A94" />
      <polygon points="14,22 16,20 18,22 16,24" fill="#0B0016" />
      <polygon points="22,22 24,20 26,22 24,24" fill="#0B0016" />
      <polygon points="30,22 32,20 34,22 32,24" fill="#0B0016" />
    </svg>
  );
}

export function Briefcase({ size = 46 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="17,8 31,8 33,14 29,14 28,11 20,11 19,14 15,14" fill="#B8902A" />
      <polygon points="4,14 44,14 44,40 4,40" fill="#C99A2E" />
      <polygon points="4,14 44,14 24,26" fill="#FFE36E" />
      <polygon points="4,14 24,26 4,28" fill="#E0B83A" />
      <polygon points="44,14 24,26 44,28" fill="#D4A935" />
      <polygon points="4,28 24,26 44,28 44,40 4,40" fill="#A87E22" />
      <polygon points="21,24 27,24 27,30 21,30" fill="#0B0016" />
    </svg>
  );
}

export function Terminal({ size = 46 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="4,8 44,8 44,40 4,40" fill="#8E95A6" />
      <polygon points="4,8 44,8 40,13 8,13" fill="#D7DBE3" />
      <polygon points="7,14 41,14 41,37 7,37" fill="#1E3A8A" />
      <polygon points="7,14 24,14 7,26" fill="#3B5FC0" />
      <polygon points="12,20 20,25 12,30 12,27 16,25 12,23" fill="#2EF2FF" />
      <polygon points="22,29 32,29 32,31 22,31" fill="#2EF2FF" />
    </svg>
  );
}

export function Sun({ size = 96 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="sun">
      <polygon points="20,1 31,5 38,14 38,26 31,35 20,39 9,35 2,26 2,14 9,5" fill="#FF7A3D" />
      <polygon points="20,1 31,5 20,20" fill="#FFE36E" />
      <polygon points="9,5 20,1 20,20" fill="#FFD45E" />
      <polygon points="2,14 9,5 20,20" fill="#FFB347" />
      <polygon points="31,5 38,14 20,20" fill="#FFC857" />
      <polygon points="38,14 38,26 20,20" fill="#FF9E3D" />
      <polygon points="2,26 2,14 20,20" fill="#FF9E3D" />
      <polygon points="38,26 31,35 20,20" fill="#FF7A3D" />
      <polygon points="9,35 2,26 20,20" fill="#FF7A3D" />
      <polygon points="31,35 20,39 20,20" fill="#F2344C" />
      <polygon points="20,39 9,35 20,20" fill="#E8604A" />
    </svg>
  );
}

export function Planet({ color, size }: { color: string; size: number }) {
  const c0 = mix(color, 0.45, true);
  const c1 = mix(color, 0.2, true);
  const c3 = mix(color, 0.35, false);
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <polygon points="20,2 33,7 38,20 33,33 20,38 7,33 2,20 7,7" fill={color} />
      <polygon points="20,2 33,7 20,20" fill={c1} />
      <polygon points="7,7 20,2 20,20" fill={c0} />
      <polygon points="2,20 7,7 20,20" fill={c1} />
      <polygon points="33,7 38,20 20,20" fill={color} />
      <polygon points="38,20 33,33 20,20" fill={c3} />
      <polygon points="33,33 20,38 20,20" fill={c3} />
      <polygon points="20,38 7,33 20,20" fill={color} />
      <polygon points="7,33 2,20 20,20" fill={color} />
    </svg>
  );
}

function mix(hex: string, k: number, toWhite: boolean) {
  const rgb = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const target = toWhite ? [255, 255, 255] : [11, 0, 22];
  return `rgb(${rgb.map((v, i) => Math.round(v + (target[i] - v) * k)).join(",")})`;
}
