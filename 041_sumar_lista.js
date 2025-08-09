const nums=process.argv.slice(2).map(Number).filter(n=>!isNaN(n)); console.log(nums.reduce((a,b)=>a+b,0));
