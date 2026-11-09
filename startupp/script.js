```javascript
console.log("🚀 Startup iniciado!");


// Verifica se existe usuário salvo
const usuario = localStorage.getItem("usuarioStartup");

if (usuario) {
    console.log("Usuário encontrado:", JSON.parse(usuario));
}
```
