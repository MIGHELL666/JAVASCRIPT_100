// Uso: node 018_calendario_mes_cli.js 2025 8
const y = Number(process.argv[2]); const m = Number(process.argv[3]);
if ([y,m].some(isNaN)){ console.log("Uso: node 018_calendario_mes_cli.js <año> <mes>"); process.exit(1);}
const first = new Date(y, m-1, 1);
const last = new Date(y, m, 0).getDate();
console.log(`Calendario ${y}-${String(m).padStart(2,'0')}`);
let dow = first.getDay(); // 0 dom ... 6 sab
const header = "Lu Ma Mi Ju Vi Sa Do";
console.log(header);
let line = ["  ","  ","  ","  ","  ","  ","  "];
for (let d=1; d<=last; d++){
  const idx = (dow===0?6:dow-1);
  line[idx] = String(d).padStart(2," ");
  if (idx===6){
    console.log(line.join(" "));
    line = ["  ","  ","  ","  ","  ","  ","  "];
  }
  dow = (dow+1)%7;
}
if (line.some(x=>x.trim())) console.log(line.join(" "));
