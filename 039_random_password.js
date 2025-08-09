// Uso: node 039_random_password.js 12
const n = Number(process.argv[2])||12; const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let out=""; for (let i=0;i<n;i++) out+=chars[Math.floor(Math.random()*chars.length)];
console.log(out);
