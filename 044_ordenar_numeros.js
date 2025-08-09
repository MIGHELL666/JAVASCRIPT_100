const nums=process.argv.slice(2).map(Number).filter(n=>!isNaN(n)); console.log(nums.sort((a,b)=>a-b).join(' '));
