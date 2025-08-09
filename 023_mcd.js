// Uso: node 023_mcd.js 54 24
function gcd(a,b){ return b?gcd(b,a%b):Math.abs(a); }
const [a,b]=process.argv.slice(2).map(Number);
if ([a,b].some(isNaN)){ console.log("Uso: node 023_mcd.js a b"); process.exit(1);}
console.log(gcd(a,b));
