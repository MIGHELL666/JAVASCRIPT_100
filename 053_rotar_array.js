const k=Number(process.argv[2]); const arr=process.argv.slice(3); const r=k%arr.length; console.log([...arr.slice(-r),...arr.slice(0,-r)].join(' '));
