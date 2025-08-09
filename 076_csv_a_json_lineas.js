// Uso: node 076_csv_a_json_lineas.js archivo.csv
const fs=require('fs'); const file=process.argv[2]; if(!file){console.log('Uso: node 076_csv_a_json_lineas.js <csv>');process.exit(1);}
const [header,...rows]=fs.readFileSync(file,'utf8').trim().split(/\r?\n/); const cols=header.split(',');
for(const r of rows){ const vals=r.split(','); const obj={}; cols.forEach((c,i)=>obj[c]=vals[i]); console.log(JSON.stringify(obj)); }
