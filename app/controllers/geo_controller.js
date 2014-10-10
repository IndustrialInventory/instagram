'use strict';
// var mongoose = require('mongoose'),
// 	models = require('../models/tweets')(mongoose);
var Messages = require('../models/tweets');
//mongoose.connect('mongodb://localhost/test');

exports.artByUser = function(req, res) {
	var handle = req.query.handle;
	Messages.find({ tweet_screen_name: handle }, function(event, data){
		res.jsonp(data);
	});
};

exports.artByHashtag = function(req, res) {
	var handle = req.query.handle;
	Messages.find({ tweet_screen_name: handle }, function(event, data){
		res.jsonp(data);
	});
};

exports.artWithin = function(req, res) {
	var swY = Number(req.query.swY),
		swX = Number(req.query.swX),
		neX = Number(req.query.neX),
		neY = Number(req.query.neY);
	if ( swY && swX && neY && neX ) {
		Messages.
			find().
			where('geometry.coordinates').
			within({
		    	type: 'Polygon',
		      	coordinates: [[
		          	[swX, swY],
		        	[neX, swY],
		        	[neX, neY],
		        	[swX, neY],
		        	[swX, swY]
		        ]]
		    }).
		    exec(function(error, Msgs) {
		    	if(error){
		    		console.log(error);
		    		res.jsonp(error);		    		
		    	}
		    	if(Msgs) {
		    		res.jsonp(Msgs);
		    	}
		    });
    }

};