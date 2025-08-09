// Uso: node 040_barcode_ean13_checksum.js 750123456789
const s=(process.argv[2]||"").trim();
if (!/^[0-9]{12}$/.test(s)){ console.log("Uso: node 040_barcode_ean13_checksum.js <12digitos>"); process.exit(1);}
let sum=0; for (let i=0;i<12;i++){ const d=Number(s[i]); sum += (i%2===0? d : d*3); }
const dv = (10 - (sum%10))%10; console.log(String(dv));
