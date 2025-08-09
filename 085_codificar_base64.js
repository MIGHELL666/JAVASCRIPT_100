const t=process.argv.slice(2).join(' '); if(!t){console.log('Uso: node 085_codificar_base64.js <texto>');process.exit(1);} console.log(Buffer.from(t,'utf8').toString('base64'));
