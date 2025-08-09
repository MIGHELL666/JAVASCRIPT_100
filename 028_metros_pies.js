// Uso: node 028_metros_pies.js m 1.8  |  ft 5.9
const u=(process.argv[2]||"").toLowerCase(); const v=Number(process.argv[3]);
if (!u||isNaN(v)){ console.log("Uso: node 028_metros_pies.js <m|ft> <valor>"); process.exit(1);}
console.log(u==="m" ? v*3.28084 : v/3.28084);
