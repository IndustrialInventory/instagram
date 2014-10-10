var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tweetmsg = new Schema({
	properties: {
		tweet_ID 				: Number,
		tweet_Created 			: Date,
		tweet_text 				: String,
		tweet_user_id 			: Number,
		tweet_name 				: String,
		tweet_screen_name 		: String,
		tweet_retweet_status 	: String,
		tweet_hashtags 			: Object,
		tweet_urls 				: String,
		tweet_media 			: String,
		tweet_media_id 			: Number,
		tweet_media_media_url 	: String,
		tweet_media_type 		: String
	},
	geometry 					: Object,
	type 						: String
});

tweetmsg.index( { "geometry.coordinates" : "2d" } );

module.exports = mongoose.model('Messages', tweetmsg);