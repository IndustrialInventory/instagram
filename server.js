var express = require('express'),
	fs = require('fs'),
	util = require('util');

var app = express();

var env = require('./app/config/env'),
	environment = new env();

var mongoose = require('mongoose');
	mongoose.connect('mongodb://' + environment.mongo.OPENSHIFT_MONGODB_DB_USERNAME + ':' + environment.mongo.OPENSHIFT_MONGODB_DB_PASSWORD + '@' + $OPENSHIFT_MONGODB_DB_HOST + ':' + $OPENSHIFT_MONGODB_DB_PORT + '/' + environment.mongo.dbname);
//load expressjs configs/headers/defaults.  for more info, check expressjs.com, pass in app and overall config
require('./app/config/express_config')(app);

require("./app/routes")(app);

var counterFile = __dirname + '/counter.json';

// app.get('/api', function(req, res){
// 	res.send(req.cookies.uploader_session);
// })

app.listen(environment.port);
console.log('listening on ' + environment.port)

exports = module.exports = app;