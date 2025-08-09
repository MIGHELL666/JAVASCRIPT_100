// Uso: node 095_buscar_y_reemplazar_archivo.js archivo.txt "antes" "despues"
const fs=require('fs'); const [file,a,b]=process.argv.slice(2); if(!file||a===undefined||b===undefined){console.log('Uso: node 095_buscar_y_reemplazar_archivo.js <archivo> <buscar> <reemplazar>');process.exit(1);}
const t=fs.readFileSync(file,'utf8').replace(new RegExp(a,'g'), b); fs.writeFileSync(file,t); console.log('OK');
