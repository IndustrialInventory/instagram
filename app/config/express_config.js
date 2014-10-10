var express = require('express'),
	busboy = require('connect-busboy'),
	bodyParser = require('body-parser'),
	corser = require('corser'),
	env = require('./env.js'),
	environment = new env(),
    publicDir = environment.publicdir;


module.exports = function (app, config) {
	
	app.use(bodyParser.json());
	app.use(express.static(publicDir));
	app.use(busboy());
	
}