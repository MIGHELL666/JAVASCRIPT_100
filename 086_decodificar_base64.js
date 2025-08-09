const t=process.argv[2]; if(!t){console.log('Uso: node 086_decodificar_base64.js <base64>');process.exit(1);} console.log(Buffer.from(t,'base64').toString('utf8'));
