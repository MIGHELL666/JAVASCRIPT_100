const t = process.argv.slice(2).join(" ").trim();
if (!t){ console.log("Uso: node 035_contar_palabras.js <texto>"); process.exit(1);}
console.log(t.split(/\s+/).length);
