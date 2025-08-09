// Uso: node 025_calculadora_edad.js YYYY-MM-DD
const s = process.argv[2];
if (!s){ console.log("Uso: node 025_calculadora_edad.js YYYY-MM-DD"); process.exit(1);}
const [y,m,d]=s.split("-").map(Number);
const today = new Date();
let age = today.getFullYear()-y - ((today.getMonth()+1 < m) || ((today.getMonth()+1===m)&&today.getDate()<d));
console.log(age);
