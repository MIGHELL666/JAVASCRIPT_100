const s=process.argv[2]; if(!s){console.log('Uso: node 078_minify_json.js "{...}"');process.exit(1);} console.log(JSON.stringify(JSON.parse(s)));
