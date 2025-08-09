// Uso: node 068_decodificar_cesar.js "krod" 3
const t=(process.argv[2]||""); const k=Number(process.argv[3])||0;
const base='abcdefghijklmnopqrstuvwxyz';
let out=''; for (const ch of t.toLowerCase()){ const i=base.indexOf(ch); out+= i===-1? ch : base[(i-k+26*100)%26]; }
console.log(out);
