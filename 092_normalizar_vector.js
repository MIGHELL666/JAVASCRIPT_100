const v=process.argv.slice(2).map(Number); const n=Math.sqrt(v.reduce((s,x)=>s+x*x,0)); console.log(v.map(x=>x/n));
