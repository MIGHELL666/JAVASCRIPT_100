// Uso: node 015_generar_tablero_ajedrez.js 8
const n = Number(process.argv[2]);
if (isNaN(n)){ console.log("Uso: node 015_generar_tablero_ajedrez.js <n>"); process.exit(1);}
for (let i=0;i<n;i++){ 
  let row=""; for (let j=0;j<n;j++) row += ((i+j)%2===0 ? "#" : "."); 
  console.log(row);
}
