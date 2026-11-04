
const http = require("http");

const servidor = http.createServer((req, res) => {
    const numero1 = Number(Math.random().toFixed(3));
    const numero2 = Number(Math.random().toFixed(3));

    const soma = numero1 + numero2;

    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end(`${numero1.toFixed(3)} + ${numero2.toFixed(3)} = ${soma.toFixed(3)}`);
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
