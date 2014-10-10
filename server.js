var express = require('express'),
	fs = require('fs'),
	util = require('util');

var app = express();

var env = require('./app/config/env'),
	environment = new env();

var mongoose = require('mongoose');
	mongoose.connect(environment.connstring);
//load expressjs configs/headers/defaults.  for more info, check expressjs.com, pass in app and overall config
require('./app/config/express_config')(app);

require("./app/routes")(app);

app.listen(environment.port, environment.ipaddr, function(){
	console.log('listening on ' + environment.port);
});

exports = module.exports = app;