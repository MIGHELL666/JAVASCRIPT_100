// Uso: node 073_temporizador_pomodoro_simple.js 25 5 4
let [work, brk, cycles]=process.argv.slice(2).map(Number); work=work||25; brk=brk||5; cycles=cycles||4;
function countdown(min,label,cb){ let s=min*60; const id=setInterval(()=>{ process.stdout.write(`${label} ${s}s   \r`); if(--s<0){clearInterval(id); console.log(`\n${label} fin`); cb&&cb();}},1000);}
let c=0; (function next(){ if(c++>=cycles) return; countdown(work,"Trabajo",()=>countdown(brk,"Descanso",next)); })();
