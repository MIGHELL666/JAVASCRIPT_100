// Uso: node 001_calculo_propina.js <monto> <porcentaje>
const [monto, porc] = process.argv.slice(2).map(Number);
if (isNaN(monto) || isNaN(porc)) {
  console.log("Uso: node 001_calculo_propina.js <monto> <porcentaje>");
  process.exit(1);
}
const propina = monto * (porc/100);
console.log(`Propina: $${propina.toFixed(2)} | Total: $${(monto+propina).toFixed(2)}`);
