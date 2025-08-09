// Uso: node 026_bytes_a_kb_mb_gb.js b->otras 2048 | node ... otras->b 2 MB
const mode = process.argv[2]; const val = Number(process.argv[3]); const unit = (process.argv[4]||"").toUpperCase();
if (!mode || isNaN(val)) { console.log("Uso: node 026_bytes_a_kb_mb_gb.js <b->otras|otras->b> <valor> [KB|MB|GB]"); process.exit(1); }
if (mode==="b->otras"){ console.log("KB:",(val/1024).toFixed(2)); console.log("MB:",(val/1024**2).toFixed(2)); console.log("GB:",(val/1024**3).toFixed(2)); }
else { const f={KB:1024,MB:1024**2,GB:1024**3}[unit]; if(!f){ console.log("Unidad inválida"); process.exit(1);} console.log(val*f); }
