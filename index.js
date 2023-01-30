const { json } = require('express');
const express = require('express')
const app = express()

const data = 'Welcome to Node Rest Api';

const products = [
    { 'id': 1, 'name': 'Product 1' },
    { 'id': 2, 'name': 'Product 2' },
    { 'id': 3, 'name': 'Product 3' },
];

//homepage
app.get('/', (req, res) => {
    res.send(data);
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

//get product detail get by its id
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(c => c.id == id); //find produc where id same

    if (!product) res.status(404).send({
        'message': 'The Product of id given not found!'
    });
    res.send(product);
});

//Dynamic port for deployment "process.env.PORT"
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});