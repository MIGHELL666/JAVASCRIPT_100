const size=Number(process.argv[2]); const arr=process.argv.slice(3); const out=[]; for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size).join(',')); console.log(out.join(' | '));
