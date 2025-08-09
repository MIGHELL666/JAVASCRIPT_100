let n=Number(process.argv[2]); if(isNaN(n)||n<0){console.log('Uso: node 050_factorial.js n>=0');process.exit(1);} let r=1n; for(let i=2n;i<=BigInt(n);i++) r*=i; console.log(String(r));
