const fs=require('fs'); const file=process.argv[2]; if(!file){console.log('Uso: node 084_contar_palabras_archivo.js <archivo>');process.exit(1);}
const t=fs.readFileSync(file,'utf8'); console.log(t.trim().split(/\s+/).filter(Boolean).length);
