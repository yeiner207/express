require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});
const products = require("./date/productos")
app.get('/products', (req, res) => {
    res.json({
        message: 'Lista de productos',
        timestamp: new Date().toISOString(),
        status: 'success',
        products: products
    })
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
