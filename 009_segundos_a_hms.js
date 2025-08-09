// Uso: node 009_segundos_a_hms.js <segundos>
const s = Number(process.argv[2]);
if (isNaN(s)){ console.log("Uso: node 009_segundos_a_hms.js <segundos>"); process.exit(1);}
const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
console.log(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`);
