// Uso: node 083_lineas_coinciden.js archivo.txt "regex"
const fs=require('fs'); const [file,pat]=process.argv.slice(2); if(!file||!pat){console.log('Uso: node 083_lineas_coinciden.js <archivo> <regex>');process.exit(1);}
const re=new RegExp(pat,'i'); fs.readFileSync(file,'utf8').split(/\r?\n/).forEach((l,i)=>{ if(re.test(l)) console.log(i+1, l); });
