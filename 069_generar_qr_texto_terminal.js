// Uso: node 069_generar_qr_texto_terminal.js "texto"
// (Representación simple de QR: sólo muestra bloques aleatorios para demo; no es QR real)
const t=process.argv.slice(2).join(' '); if(!t){console.log("Uso: node 069_generar_qr_texto_terminal.js <texto>");process.exit(1);}
const seed = [...Buffer.from(t)].reduce((a,b)=>a+b,0);
function rnd(){ let x = Math.sin(seed++)*10000; return x-Math.floor(x); }
for(let y=0;y<21;y++){ let line=''; for(let x=0;x<21;x++){ line += rnd()>0.5 ? "██" : "  "; } console.log(line); }
