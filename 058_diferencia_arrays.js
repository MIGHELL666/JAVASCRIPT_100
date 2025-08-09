const sep=process.argv.indexOf('--'); const A=process.argv.slice(2,sep); const B=new Set(process.argv.slice(sep+1)); console.log(A.filter(x=>!B.has(x)).join(' '));
