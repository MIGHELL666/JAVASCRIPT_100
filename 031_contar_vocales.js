const t = process.argv.slice(2).join(" ").toLowerCase();
if (!t){ console.log("Uso: node 031_contar_vocales.js <texto>"); process.exit(1);}
const m = t.match(/[aeiouáéíóú]/g); console.log(m?m.length:0);
