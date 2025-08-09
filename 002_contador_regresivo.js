// Uso: node 002_contador_regresivo.js <segundos>
let n = Number(process.argv[2]);
if (isNaN(n)) { console.log("Uso: node 002_contador_regresivo.js <segundos>"); process.exit(1); }
const tick = setInterval(() => {
  process.stdout.write(String(n).padStart(2,'0') + "\r");
  if (n-- <= 0) { clearInterval(tick); console.log("\n¡Tiempo!"); }
}, 1000);
