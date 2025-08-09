const sep=process.argv.indexOf('--'); const A=process.argv.slice(2,sep); const B=process.argv.slice(sep+1); console.log([...new Set([...A,...B])].join(' '));
