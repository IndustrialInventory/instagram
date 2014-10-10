'use strict';
// var mongoose = require('mongoose'),
// 	models = require('../models/tweets')(mongoose);
var Messages = require('../models/tweets'),
	http = require('http');
//mongoose.connect('mongodb://localhost/test');

// var minutes = 2, the_interval = minutes * 60 * 1000;
// setInterval(function() {
// 	Messages.find().exec(function (err, msg){
// 		for (var a = 0; a < msg.length; a++) {
// 			// var testURL = (msg[a].properties.tweet_media_media_url).replace('http://pbs.twimg.com/','');
// 			var options = {
// 				method: 'GET', 
// 				host: msg[a].properties.tweet_media_media_url, 
// 				port: 80
// 			};
// 			http.request(options, function(res) {
// 				if(res){console.log(res)}
// 			  }
// 			).on("error", function (err) {
// 				console.log('req err')
// 			}).end();
// 		}
// 	});
//   // do your stuff here
// }, the_interval);

// exports.artByUser = function(req, res) {
// 	var handle = req.query.handle;
// 	Messages.find({ tweet_screen_name: handle }, function(event, data){
// 		res.jsonp(data);
// 	});
// };

// exports.artByHashtag = function(req, res) {
// 	var handle = req.query.handle;
// 	Messages.find({ tweet_screen_name: handle }, function(event, data){
// 		res.jsonp(data);
// 	});
// };

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