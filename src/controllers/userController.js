const UserModel = require('../models/User.js');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const validate = require('./validacao.js')
const salt = bcrypt.genSaltSync(14);

class userController{

    static rotaInicial(req, res ){
        res.send("Bem vindo há api!")
    }

    static async cadastrarUser(req, res){
        
        const {error} = validate.registerValidate(req.body);
        if(error){
            res.status(400).send(error.message);
        }

        const user = new UserModel({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt)
        });
        try {
            const savedUser = await user.save();
            res.status(201).send(savedUser)

        } catch (err) {
            res.status(500).send(`houve um erro! ${err}`);
        }
    }
 
    static async loginUser(req, res){
        const {error} = validate.loginValidate(req.body);
        if(error){
            res.status(400).send(error.message);
        }
        const selectedUser = await UserModel.findOne({email: req.body.email});
        if(!selectedUser){ 
           return res.status(400).send("Email or Password incorrect")
        }
        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if(!passwordAndUserMatch) return res.status(400).send("Email or Password incorrect");
        
        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET);

        res.header("authorization-token", token)
        
        res.send("User Logged!");
    }

}

module.exports = userController;