const express = require('express');
const userController = require('../controllers/userController');


router = express.Router();


router
.get("/", userController.rotaInicial)
.post('/login', userController.loginUser)
.post("/cadastrar", userController.cadastrarUser) 

module.exports = router;