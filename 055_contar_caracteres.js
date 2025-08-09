const t=process.argv.slice(2).join(''); const map={}; for(const c of t){ map[c]=(map[c]||0)+1;} console.log(JSON.stringify(map));
