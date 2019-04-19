const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();
const db = require("../db.js");
const mongoose = require("mongoose");
const config = require("../config.js"); 


feeder.add({url:"http://rss.nytimes.com/services/xml/rss/nyt/Business.xml",refresh:5000});

feeder.on('new-item', function(item) {
    console.log(item);
    console.log("\n\n\n\n\n"); 
});  


module.exports.feeder = feeder;