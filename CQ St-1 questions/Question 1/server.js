const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", (req, res) => {
    fs.readFile('./public/products.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const products = JSON.parse(data);
        res.status(200).json(products);
    });
});
app.get('/product', (req, res) => {
    const category = req.query.category;
    if (!category) {
        res.status(400).json({ error: 'Category parameter is missing' });
        return;
    }

    fs.readFile('./public/products.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const products = JSON.parse(data);
        const filteredProducts = products.filter(
            (product) => product.category.toLowerCase() === category.toLowerCase()
        );

        if (filteredProducts.length === 0) {
            res.status(404).json({ error: 'No products found for the specified category' });
        } else {
            res.status(200).json(filteredProducts);
        }
    });
});
app.listen(3001, (err) => {
    if (err) console.log("unable to start server");
    else console.log("Server started...");
});