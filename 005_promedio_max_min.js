// Uso: node 005_promedio_max_min.js 10 5 6 9
const nums = process.argv.slice(2).map(Number).filter(n=>!isNaN(n));
if (!nums.length){ console.log("Uso: node 005_promedio_max_min.js <nums...>"); process.exit(1); }
const sum = nums.reduce((a,b)=>a+b,0);
console.log(`promedio: ${(sum/nums.length).toFixed(2)} max: ${Math.max(...nums)} min: ${Math.min(...nums)}`);
