// Uso: node 072_password_fuerte.js 16
const n=Number(process.argv[2])||16; const sets=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","!@#$%^&*()_+-=[]{};:,.?/"];
const all=sets.join(''); let pwd=''; for(let i=0;i<n;i++) pwd+=all[Math.floor(Math.random()*all.length)];
console.log(pwd);
