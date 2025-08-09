// Uso: node 038_buscar_texto_archivo.js archivo.txt "patrón"
const fs=require('fs'); const [file, q]=process.argv.slice(2);
if (!file||!q){ console.log("Uso: node 038_buscar_texto_archivo.js <archivo> <texto>"); process.exit(1);}
const texto = fs.readFileSync(file,'utf8'); const re=new RegExp(q,"gi");
const matches = texto.match(re); console.log(matches?matches.length:0);
