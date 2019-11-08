const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.set('port', process.env.PORT || PORT);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const productRouter = require('./src/routes/product');
const categoryRouter = require('./src/routes/category');

app.use('/product', productRouter);
app.use('/category', categoryRouter);


module.exports = app;
