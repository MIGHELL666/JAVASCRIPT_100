// Uso: node 030_mayus_minus.js "Texto de Ejemplo"
const t = process.argv.slice(2).join(" ");
if (!t){ console.log("Uso: node 030_mayus_minus.js <texto>"); process.exit(1);}
console.log(t.toUpperCase()); console.log(t.toLowerCase());
