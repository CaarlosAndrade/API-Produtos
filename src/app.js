const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://carocha:qEIGrUQgNVWWTWWR@cluster0.4nrmxh0.mongodb.net/test");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    next();
});

//registrar a model
require('./models/product');
require('./models/categoria')

//registrar as rotas
const productRouter = require('./routes/product-route');
const categoriaRouter = require('./routes/categoria-route')
const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);
app.use('/categoria', categoriaRouter);

module.exports = app


