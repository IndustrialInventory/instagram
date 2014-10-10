var twitterController = require('./../controllers/twitter_controller');
    geoController = require('./../controllers/geo_controller'),
    helperController = require('./../controllers/helper_controller');


//TODO middleware for auth, standardize output into a specific schema in the config folder

module.exports = function (app) {
    // set up the routes themselves
    var version = 'v1'

    //allow cors
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods:PUT, POST, GET, OPTIONS");
        next();
    });

    // app.get("/preview/map");

    //twitter routes
    app.get( "/api/" + version + "/artByUser", geoController.artByUser);
    app.get( "/api/" + version + "/artWithin", geoController.artWithin);
    // app.get( "/api/" + version + "/remove", helperController.deadTweet);
    // app.post("/api/" + version + "/upload", twitterController.upload);

};