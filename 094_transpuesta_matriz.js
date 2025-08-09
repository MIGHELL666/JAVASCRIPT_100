// Uso: node 094_transpuesta_matriz.js "1,2,3;4,5,6"
const s=process.argv[2]; if(!s){console.log('Uso: node 094_transpuesta_matriz.js "1,2;3,4"');process.exit(1);}
const M=s.split(';').map(r=>r.split(',').map(Number)); const T=[]; for(let j=0;j<M[0].length;j++){ const row=[]; for(let i=0;i<M.length;i++) row.push(M[i][j]); T.push(row); }
console.log(T.map(r=>r.join(',')).join(';'));
