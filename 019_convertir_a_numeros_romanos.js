// Uso: node 019_convertir_a_numeros_romanos.js 1999
let n = Number(process.argv[2]);
if (isNaN(n)||n<1||n>3999){ console.log("Uso: node 019_convertir_a_numeros_romanos.js 1..3999"); process.exit(1); }
const val=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
const sim=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let res="";
for (let i=0;i<val.length;i++){ while(n>=val[i]){ res+=sim[i]; n-=val[i]; } }
console.log(res);
