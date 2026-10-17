import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
 theme:{extend:{colors:{green:{DEFAULT:"#0B3D2E",deep:"#072A20",soft:"#E9EFEA"},ivory:"#F7F3E8",gold:"#D4A72C"},
 fontFamily:{sans:["var(--font-en)","var(--font-hi)","sans-serif"]}}},plugins:[]} satisfies Config;
