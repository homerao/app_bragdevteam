const express = require('express');
const routes = express.Router();

// rota a ser exportada
routes.get("/", (req, res) => {
    res.render('home')
});

routes.get("/servicos", (req, res) => {
    res.render('servicos')
});

routes.get("/sobre", (req, res) => {
    res.render('sobre')
});

routes.get("/contato", (req, res) => {
    res.render('contato')
});

routes.get("/showroom", (req, res) => {
    res.render('showroom')
});

routes.get("/ecommerce/prestashop", (req, res) => {
    res.render('home')
});

routes.get("/ecommerce/magento", (req, res) => {
    res.render('home')
});

routes.get("/ecommerce/opencart", (req, res) => {
    res.render('home')
});

routes.get("/mobile/android", (req, res) => {
    res.render('home')
});


module.exports = routes;