require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const products = require("./date/productos")


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

app.get('/products', (req, res) => {
    res.json({
        message: 'Lista de productos',
        timestamp: new Date().toISOString(),
        status: 'succes',
        products: products
    })
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return res.status(404).json({
            message: "producto no encontrado",
            timestamp: new Date().toDateString(),
            status: "error",
        });
    }
    res.status(200).json({
        message: "producto",
        timestamp: new Date().toDateString(),
        status: "succes",
        product: product
    });
})

app.post('/products', (req, res) => {
    const { name, price, category, stock } = req.body;
    const product = { id: (products.length + 1), name, price, category, stock };
    products.push(product);
    res.json({
        message: 'producto creado',
        timestamp: new Date().toISOString(),
        status: 'success',
        product: product
    })
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
