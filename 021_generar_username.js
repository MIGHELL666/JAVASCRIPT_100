// Uso: node 021_generar_username.js nombre apellido [anio]
const [nombre, apellido, anio] = process.argv.slice(2);
if (!nombre || !apellido){ console.log("Uso: node 021_generar_username.js nombre apellido [anio]"); process.exit(1);}
let base = (nombre[0]+apellido).toLowerCase().replace(/\s+/g,"");
console.log(anio? base + String(anio).slice(-2) : base);
