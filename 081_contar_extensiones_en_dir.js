// Uso: node 081_contar_extensiones_en_dir.js ./carpeta
const fs=require('fs'), path=require('path'); const dir=process.argv[2]||".";
const map={}; for(const f of fs.readdirSync(dir)){ const ext=path.extname(f)||"(sin)"; map[ext]=(map[ext]||0)+1; }
console.log(map);
