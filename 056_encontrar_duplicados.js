const arr=process.argv.slice(2); const seen=new Set(); const dups=new Set(); for(const x of arr){ if(seen.has(x)) dups.add(x); else seen.add(x);} console.log([...dups].join(' '));
