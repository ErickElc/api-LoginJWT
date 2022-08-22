const router = require('./CadastroRotas.js');
const routerAdmin = require('./adminRoutes.js');
const express = require('express');


const routes = app =>{
    app.use(
        '/api',
        express.json(),
        router      
    )
    app.use(
        '/admin',
        express.json(),
        routerAdmin

    )
}

module.exports = routes;

