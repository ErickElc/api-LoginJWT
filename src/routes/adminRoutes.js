const express = require('express');
const authController = require('../controllers/authController');


router = express.Router();


router
    .get("/", authController.authController, (req, res)=>{
        if(req.user.admin == true){
            res.send("Só admin pode Rodar");
        }
        else{
            res.status(403).send("Not admin: Acess Denied");
        }
    })
    .get("/free", authController.authController, (req, res)=>{
        res.send("Só quem está logado pode ver esse conteúdo");
    })
 

module.exports = router;