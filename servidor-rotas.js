
const http = require("http");

const servidor = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (req.url === "/") {
        res.end("Bem-vindo à página inicial");
    } else if (req.url === "/sobre") {
        res.end("Sobre o projeto");
    } else {
        res.statusCode = 404;
        res.end("Rota não encontrada");
    }
});

servidor.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001");
});
