const n=Number(process.argv[2]); if(isNaN(n)||n<2){console.log('no');process.exit(0);} for(let i=2;i*i<=n;i++){ if(n%i===0){console.log('no');process.exit(0);} } console.log('si');
