// Uso: node 016_triangulo_pascal.js 5
let n = Number(process.argv[2]);
if (isNaN(n)){ console.log("Uso: node 016_triangulo_pascal.js <filas>"); process.exit(1);}
let row=[1];
for (let i=0;i<n;i++){
  console.log(row.join(" "));
  row = [1, ...row.map((_,k)=> (row[k-1]||0) + (row[k]||0)), 1];
}
