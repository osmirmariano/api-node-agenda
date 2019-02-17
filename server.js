const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir'); //utilizada uma biblioteca para fazer require dos dirtorios
const msql = require('mysql');

//Iniciando app
const app = express();
app.use(express.json()); //Para retorno em Json
app.use(cors());

//Estruturação para a comunicação com o banco de dados 
var con = msql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
});

//Verificando se o banco de dados foi conectado
con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
    //Criando o banco de dados
    // con.query("CREATE DATABASE agenda", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database Criada com Sucesso!");
    // });
});

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(8000);