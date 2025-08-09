const x=Number(process.argv[2]); if(isNaN(x)){console.log('Uso: node 089_redondeos.js <x>');process.exit(1);} console.log(Math.round(x), Math.floor(x), Math.ceil(x));
