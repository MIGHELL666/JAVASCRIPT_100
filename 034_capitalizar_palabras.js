const t = process.argv.slice(2).join(" ");
if (!t){ console.log("Uso: node 034_capitalizar_palabras.js <texto>"); process.exit(1);}
console.log(t.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
