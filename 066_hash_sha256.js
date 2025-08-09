// Uso: node 066_hash_sha256.js "texto"
const crypto=require('crypto'); const t=process.argv.slice(2).join(' ');
if(!t){console.log("Uso: node 066_hash_sha256.js <texto>");process.exit(1);}
console.log(crypto.createHash('sha256').update(t).digest('hex'));
