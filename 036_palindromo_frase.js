const t = process.argv.slice(2).join(" ").toLowerCase().replace(/[^a-z0-9]/g,"");
if (!t){ console.log("Uso: node 036_palindromo_frase.js <texto>"); process.exit(1);}
console.log(t === t.split("").reverse().join(""));
