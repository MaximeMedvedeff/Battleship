/**
 * Created by Daniel on 20/06/2017.
 */
var express = require('express');
var url = require("url");
var fs = require("fs");
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Data = require('./model/Data.js');

var app = express();

var router = express.Router();

router.route("*").all(function (req, res){
    fs.readFile('home.html', function (err, data){
       if(err){
           //gestion d'erreur à la noix
       }
       else {
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(data);
       }
    });
});

//indiquer les routes de base
router.route("/login").get(function(req, res){
    fs.readFile('login.html', function (err, data){
        if(err){
            //gestion d'erreur à la noix
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

router.route("/login").post(function(req, res){
    //système de connexion
});

router.route("/register").get(function(req, res){
    fs.readFile('register.html', function (err, data){
        if(err){
            //gestion d'erreur à la noix
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

//initialisation de la connexion avec la BDD
mongoose.connect('mongodb://localhost/205476Battleship');
console.log('Connexion BDD');
//l'objet db est à utiliser dès qu'on manipule la BDD
var db = mongoose.connection;
/*var testUser = new Data.User({
    id: 1,
    username: 'test',
    firstname: 'test',
    lastname: 'test',
    email: "test@wololo.com",
    password: 'test'
});
testUser.save();*/

console.log("Utilisateur test inséré");
db.close();

app.use(router);

app.listen(3000);

console.log('Serveur démarré');