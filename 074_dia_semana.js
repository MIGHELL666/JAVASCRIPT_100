const s=process.argv[2]; if(!s){console.log('Uso: node 074_dia_semana.js YYYY-MM-DD');process.exit(1);} const d=new Date(s); console.log(['Dom','Lun','Mar','Mie','Jue','Vie','Sab'][d.getDay()]);
