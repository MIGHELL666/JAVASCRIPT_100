const fs=require('fs'); const dir=process.argv[2]||'.'; console.log(fs.readdirSync(dir).join('\n'));
