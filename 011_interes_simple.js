// Uso: node 011_interes_simple.js <capital> <tasa> <años>
const [P,r,t]=process.argv.slice(2).map(Number);
if ([P,r,t].some(isNaN)){ console.log("Uso: node 011_interes_simple.js <capital> <tasa> <años>"); process.exit(1); }
const A = P*(1+r*t); console.log(`Final: ${A.toFixed(2)} Interés: ${(A-P).toFixed(2)}`);
