const nums=process.argv.slice(2).map(Number).filter(n=>!isNaN(n)); const norm=Math.sqrt(nums.reduce((s,v)=>s+v*v,0)); console.log(norm);
