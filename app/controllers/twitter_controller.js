// 'use strict';

// var env = require('../../app/config/env.js'),
//     async = require('async'),
//     environment = new env();

// var Messages = require('../models/tweets');


// var util = require('util'),
//     Twit = require('twit');

// var twit = new Twit({
//     consumer_key: 'WAE2lBVwCyCVhePpTnkEOeGHh',
//     consumer_secret: 'oqpLSBeUoxHpWzYMMg7qmKbjd8XFOHAqi6BUHx2I7Pe8ELO5zZ',
//     access_token: '2415044299-dtooVO9Trir8FadYu75f7QjfdVAMg0UyLcYyi28',
//     access_token_secret: 'fEZtAxT518E82zjZd2u921vdZxshtx05WtG219tztKDbk'
// });

// // var stream = twit.stream('statuses/filter', { track: '#artmapio' })
// var stream = twit.stream('statuses/filter', { track: '#artmapio' })
// stream.on('tweet', function (tweet) {
// 	console.log(tweet);
// 	//if no geo, no media, or is a rewteet, skip it
// 	// if (tweet.geo && tweet.entities.media && !tweet.retweeted) {
// 	if (tweet.coordinates && tweet.entities.media) {
// 		var twitMessages = new Messages({
// 			properties: {
// 				tweet_ID: tweet.id,
// 				tweet_Created: tweet.created_at,
// 				tweet_text: tweet.text,
// 				tweet_user_id: tweet.user.id,
// 				tweet_name: tweet.user.name,
// 				tweet_screen_name: tweet.user.screen_name,
// 				tweet_retweet_status: tweet.retweeted,
// 				tweet_media_media_url: tweet.entities.media[0].media_url,
// 				tweet_hashtags: tweet.entities.hashtags
// 			},
// 			geometry: tweet.coordinates,
// 			type: "Feature"
// 		});
// 		twitMessages.save(function (err) {
//   			if (err) return handleError(err);
//   		});

// 	}
// })
