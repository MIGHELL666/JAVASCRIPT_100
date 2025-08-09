// Uso: node 064_restar_fechas_dias.js 2025-01-01 2024-12-15
const [a,b]=process.argv.slice(2); const A=new Date(a), B=new Date(b);
if (isNaN(A)||isNaN(B)){ console.log("Uso: node 064_restar_fechas_dias.js <A> <B>"); process.exit(1);}
console.log(Math.round((A-B)/(1000*60*60*24)));
