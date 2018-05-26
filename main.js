#!/usr/bin node

var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));;
var express = require('express');
var app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

//Rest server config and start
app.use(express.static(__dirname + '/client')) //To define what folder is the public directort
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Define where routes to access the server are
var routes = require('./API/Router/routes.js');
routes(app);
app.listen(port);
console.log('RESTful API server started on: ' + port);
