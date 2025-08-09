// Uso: node 071_lanzar_dados.js 3 d6
const n=Number(process.argv[2])||1; const faces=Number((process.argv[3]||'d6').slice(1))||6;
const out=[]; for(let i=0;i<n;i++) out.push(1+Math.floor(Math.random()*faces));
console.log(out.join(' '));
