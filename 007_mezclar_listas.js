// Uso: node 007_mezclar_listas.js a b c -- x y
const sep = process.argv.indexOf("--");
if (sep === -1) { console.log("Uso: node 007_mezclar_listas.js <listaA...> -- <listaB...>"); process.exit(1); }
const A = process.argv.slice(2, sep);
const B = process.argv.slice(sep+1);
const out=[];
for (let i=0;i<Math.max(A.length,B.length);i++){ if (i<A.length) out.push(A[i]); if (i<B.length) out.push(B[i]); }
console.log(out.join(" "));
