// Uso: node 100_ping_http.js https://example.com
const url=process.argv[2]; if(!url){console.log('Uso: node 100_ping_http.js <url>');process.exit(1);}
const start=Date.now();
(async () => {
  try {
    const res = await fetch(url);
    await res.text();
    console.log(`OK ${Date.now()-start} ms`);
  } catch (e) { console.log("ERROR", e.message); }
})();
