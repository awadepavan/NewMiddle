const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Correctly use body-parser

app.use("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Fixed typo "methode" to "method"
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    res.send('<h1>Hello From Express Js</h1>');
});

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server is running on http://localhost:3000');
});
