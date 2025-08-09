// Uso: node 037_contar_lineas_archivo.js archivo.txt
const fs = require('fs'); const file = process.argv[2];
if (!file){ console.log("Uso: node 037_contar_lineas_archivo.js <archivo>"); process.exit(1);}
const lines = fs.readFileSync(file,'utf8').split(/\r?\n/).length;
console.log(lines);
