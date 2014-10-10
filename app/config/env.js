var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function () {
	this.publicdir = appDir + '/public';

	this.dbServer = (process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT));
	this.dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
	this.dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;

	this.ipaddr  = process.env.OPENSHIFT_NODEJS_IP;
	this.port    = parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8080;
	// this.connstring = 'mongodb://'+this.dbUser+':' + this.dbPass + '@' + this.dbServer + '/social';
	this.connstring = 'mongodb://localhost/social';
};