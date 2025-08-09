const nums=process.argv.slice(2).map(Number).filter(n=>!isNaN(n));
if(!nums.length){console.log("Uso: node 043_media_mediana_moda.js <nums...>");process.exit(1);}
const media = nums.reduce((a,b)=>a+b,0)/nums.length;
const sorted=[...nums].sort((a,b)=>a-b);
const mediana = (sorted[(sorted.length-1)/2|0] + sorted[sorted.length/2|0]) / 2;
const mapa={}; sorted.forEach(n=>mapa[n]=(mapa[n]||0)+1);
const moda = Object.entries(mapa).sort((a,b)=>b[1]-a[1])[0][0];
console.log(`media:${media} mediana:${mediana} moda:${moda}`);
