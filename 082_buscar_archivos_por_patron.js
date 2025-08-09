// Uso: node 082_buscar_archivos_por_patron.js ./carpeta ".js$"
const fs=require('fs'), path=require('path'); const [dir, pat]=process.argv.slice(2); const re=new RegExp(pat||'.*');
function walk(d){ for(const f of fs.readdirSync(d)){ const p=path.join(d,f); if(fs.statSync(p).isDirectory()) walk(p); else if(re.test(f)) console.log(p); } }
walk(dir||"." );
