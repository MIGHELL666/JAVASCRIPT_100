// Uso: node 029_ms_kmh.js ms 10  |  kmh 36
const u=(process.argv[2]||"").toLowerCase(); const v=Number(process.argv[3]);
if (!u||isNaN(v)){ console.log("Uso: node 029_ms_kmh.js <ms|kmh> <valor>"); process.exit(1);}
console.log(u==="ms" ? v*3.6 : v/3.6);
