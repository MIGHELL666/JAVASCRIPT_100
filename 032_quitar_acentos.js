const t = process.argv.slice(2).join(" ");
if (!t){ console.log("Uso: node 032_quitar_acentos.js <texto>"); process.exit(1);}
console.log(t.normalize("NFD").replace(/\p{Diacritic}/gu,""));
