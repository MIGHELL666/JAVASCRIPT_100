// Uso: node 022_frecuencia_digitos.js 1200300400
const s = (process.argv[2]||"");
for (let d=0; d<=9; d++) console.log(d, (s.match(new RegExp(d,'g'))||[]).length);
