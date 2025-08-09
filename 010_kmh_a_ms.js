// Uso: node 010_kmh_a_ms.js k->m 36  |  node ... m->k 10
const mode = process.argv[2]; const val = Number(process.argv[3]);
if (!mode || isNaN(val)) { console.log("Uso: node 010_kmh_a_ms.js <k->m|m->k> <valor>"); process.exit(1); }
console.log(mode==="k->m" ? (val/3.6) : (val*3.6));
