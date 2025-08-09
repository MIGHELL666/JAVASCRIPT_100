// Uso: node 008_intercambiar_valores.js A B
let [a,b]=process.argv.slice(2);
if (b===undefined){ console.log("Uso: node 008_intercambiar_valores.js A B"); process.exit(1);}
[a,b]=[b,a];
console.log(`A:${a} B:${b}`);
