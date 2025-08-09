// Uso: node 063_sumar_dias_fecha.js YYYY-MM-DD 10
const [s, d]=process.argv.slice(2); const dias=Number(d);
if (!s||isNaN(dias)){ console.log("Uso: node 063_sumar_dias_fecha.js <YYYY-MM-DD> <dias>"); process.exit(1);}
const [y,m,da]=s.split("-").map(Number); const dt=new Date(y,m-1,da); dt.setDate(dt.getDate()+dias); 
console.log(dt.toISOString().slice(0,10));
