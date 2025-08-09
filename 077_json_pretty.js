const s=process.argv[2]; if(!s){console.log('Uso: node 077_json_pretty.js "{...}"');process.exit(1);} console.log(JSON.stringify(JSON.parse(s),null,2));
