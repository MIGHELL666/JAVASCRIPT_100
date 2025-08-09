// Uso: node 006_remover_duplicados_lista.js a b a c b
const arr = process.argv.slice(2);
const res = [...new Set(arr)];
console.log(res.join(" "));
