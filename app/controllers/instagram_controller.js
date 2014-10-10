var curl = require('node-curl'),
	ig = require('instagram-node').instagram(),
	env = require('../../app/config/env.js'),
    environment = new env();

ig.use({ client_id: '98089bfe8f75446cbb15a2a9a7f7d3a5',
         client_secret: 'daadb89fd8584c15a99fa8b84a49f049' });


curl('https://api.instagram.com/v1/subscriptions/', {
	client_id: '98089bfe8f75446cbb15a2a9a7f7d3a5', 
	client_secret: 'daadb89fd8584c15a99fa8b84a49f049',
	object: 'tag',
	aspect: 'media',
	object_id: 'industrialinvent',
	callback_url: 'http://social-industrialinvent.rhcloud.com/api/v1/instagramCallback'
}, function(err) {
	console.log(err);
});

/*
Create Subscription

curl -F 'client_id=98089bfe8f75446cbb15a2a9a7f7d3a5' \
     -F 'client_secret=daadb89fd8584c15a99fa8b84a49f049' \
     -F 'object=tag' \
     -F 'aspect=media' \
     -F 'object_id=industrialinvent' \
     -F 'callback_url=http://social-industrialinvent.rhcloud.com/api/v1/instagramCallback/' \
     https://api.instagram.com/v1/subscriptions/

*/
console.log('connected to isntagram');
ig.subscriptions(function(err, subscriptions, remaining, limit){
  console.log(subscriptions);
});
// ig.tag('industrialinvent', function(err, result, remaining, limit) {
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log(result);
// 	console.log(remaining);
// 	console.log(limit);
// });

exports.callbackHandler = function(req, res) {
	res.jsonp(res);
};