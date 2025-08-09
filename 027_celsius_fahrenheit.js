// Uso: node 027_celsius_fahrenheit.js C 25 | F 77
const u=String(process.argv[2]||"").toUpperCase(); const v=Number(process.argv[3]);
if (!u || isNaN(v)){ console.log("Uso: node 027_celsius_fahrenheit.js <C|F> <valor>"); process.exit(1);}
console.log(u==="C" ? (v*9/5+32) : ((v-32)*5/9));
