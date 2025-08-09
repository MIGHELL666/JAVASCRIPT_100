const t = process.argv.slice(2).join(" ");
if (!t){ console.log("Uso: node 033_slugify.js <texto>"); process.exit(1);}
const slug = t.normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
console.log(slug);
