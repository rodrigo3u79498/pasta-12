const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 3000;

// ==============================
// CONFIGURAÇÕES
// ==============================

app.use(cors());
app.use(express.json());

// ==============================
// LOCALIZAÇÃO DO SITE
// ==============================

const pastaSite = path.join(__dirname, "startupp");

console.log("📁 Pasta do site:");
console.log(pastaSite);

// Servir todos os arquivos do site
app.use(express.static(pastaSite));

// ==============================
// PÁGINA PRINCIPAL
// ==============================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(pastaSite, "index.html")
    );

});

// ==============================
// TESTE DO LOGIN
// ==============================

app.get("/pages/login.html", (req, res) => {

    res.sendFile(
        path.join(pastaSite, "pages", "login.html")
    );

});

// ==============================
// TESTE DO CADASTRO
// ==============================

app.get("/pages/cadastro.html", (req, res) => {

    res.sendFile(
        path.join(pastaSite, "pages", "cadastro.html")
    );

});

// ==============================
// DASHBOARD
// ==============================

app.get("/pages/dashboard.html", (req, res) => {

    res.sendFile(
        path.join(pastaSite, "pages", "dashboard.html")
    );

});

// ==============================
// SERVIDOR
// ==============================

app.listen(PORT, () => {

    console.log("");
    console.log("=================================");
    console.log("🚀 STARTUP");
    console.log("=================================");
    console.log(`Servidor rodando em:`);
    console.log(`http://localhost:${PORT}`);
    console.log("");
    console.log("Login:");
    console.log(`http://localhost:${PORT}/pages/login.html`);
    console.log("");
    console.log("Cadastro:");
    console.log(`http://localhost:${PORT}/pages/cadastro.html`);
    console.log("=================================");

});