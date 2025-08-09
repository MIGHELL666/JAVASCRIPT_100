const n=Number(process.argv[2]); if(isNaN(n)){console.log('Uso: node 088_formatear_numero_miles.js <numero>');process.exit(1);} console.log(n.toLocaleString('es-MX'));
