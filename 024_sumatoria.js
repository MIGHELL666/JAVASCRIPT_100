// Uso: node 024_sumatoria.js n
const n = Number(process.argv[2]);
if (isNaN(n)){ console.log("Uso: node 024_sumatoria.js n"); process.exit(1);}
console.log(n*(n+1)/2);
