var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports = function () {
	this.publicdir = appDir + '/public';
	this.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    this.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
};