// Uso: node 045_busqueda_binaria.js 1 3 5 7 -- 5
const sep=process.argv.indexOf("--"); if(sep===-1){console.log("Uso: node ... <nums...> -- <objetivo>");process.exit(1);}
const arr=process.argv.slice(2,sep).map(Number).sort((a,b)=>a-b); const x=Number(process.argv[sep+1]);
let lo=0, hi=arr.length-1, pos=-1;
while(lo<=hi){ const mid=(lo+hi)>>1; if(arr[mid]===x){ pos=mid; break;} if(arr[mid]<x) lo=mid+1; else hi=mid-1; }
console.log(pos);
