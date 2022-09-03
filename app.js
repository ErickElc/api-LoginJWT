require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/index.routes.js');
const db = require('./src/config/config.js');

const app = express();
app.use('/', (req, res) =>{
    res.send('Bem Vindo API')
})
app.use(express.json());

routes(app);


app.listen(process.env.PORT , ()=>{
    console.log(`Server running on the port ${process.env.PORT}`)
})

db.on('error', console.error.bind('Houve um erro!'));

db.once('open', ()=>{
    console.log("Conexão com banco de dados feita com sucesso!");
})
