// Uso: node 014_anagrama.js "Roma" "amor"
const a = (process.argv[2]||"").toLowerCase().replace(/\s+/g,"");
const b = (process.argv[3]||"").toLowerCase().replace(/\s+/g,"");
if (!a||!b){ console.log("Uso: node 014_anagrama.js <texto1> <texto2>"); process.exit(1);}
console.log(sorted(a)===sorted(b) ? "anagrama" : "no_anagrama");
function sorted(s){ return s.split("").sort().join(""); }
