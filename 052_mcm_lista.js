const nums=process.argv.slice(2).map(Number); const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a); const lcm=(a,b)=>a/gcd(a,b)*b; console.log(nums.reduce(lcm));
