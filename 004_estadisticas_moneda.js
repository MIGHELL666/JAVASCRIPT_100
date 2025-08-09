// Uso: node 004_estadisticas_moneda.js <n>
const n = Number(process.argv[2]);
if (isNaN(n)) { console.log("Uso: node 004_estadisticas_moneda.js <n>"); process.exit(1); }
let cara = 0;
for (let i=0;i<n;i++) if (Math.random() < 0.5) cara++;
const cruz = n - cara;
console.log(`cara: ${cara} (${(cara/n*100).toFixed(2)}%)`);
console.log(`cruz: ${cruz} (${(cruz/n*100).toFixed(2)}%)`);
