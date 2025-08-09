// Uso: node 012_contador_caracteres_texto.js "hola mundo"
const t = process.argv.slice(2).join(" ");
if (!t){ console.log("Uso: node 012_contador_caracteres_texto.js <texto>"); process.exit(1);}
console.log("con_espacios:", t.length);
console.log("sin_espacios:", t.replace(/\s+/g,"").length);
