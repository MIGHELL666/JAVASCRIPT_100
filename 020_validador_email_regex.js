// Uso: node 020_validador_email_regex.js alguien@dominio.com
const email = (process.argv[2]||"").trim();
const regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
console.log(regex.test(email) ? "válido" : "inválido");
