require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
]
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});
app.get('/products', (req, res) => {
    res.json({
        message: 'Lista de producto',
        timestamp: new Date().toISOString(),
        status: 'success',
        products: products
    })
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
