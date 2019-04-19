const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();
const db = require("../db.js");
const mongoose = require("mongoose");
const config = require("../config.js"); 


feeder.add({url:"http://rss.nytimes.com/services/xml/rss/nyt/Business.xml",refresh:5000});

feeder.on('new-item', function(item) {
    console.log(item);
    console.log("\n\n\n\n\n");
    
    const newArticleDB = new db.articleModel({
        "Title":(item.title? item.title:""),
        "Summary":(item.summary? item.summary:""),
        "Description":(item.description?item.description:""),
        "PubDate":(item.date? new Date(item.date):""),
        "Author":(item.author? item.author:""),
        "Link":(item.link? item.link:""),
        "Publisher":item.meta.title,
        "Categories":item.categories?item.categories:""
      }); 

      newArticleDB.save(function(err){
        if(err){
          console.log(err);
        }
      });
});  

if(process.env.NODE_ENV == "PRODUCTION"){
    //mongoose.connect("mongodb://"+config.get("db:username")+":"+config.get("db:password")+"@"+config.get("db:host")+":"+config.get('db:port')+"/"+config.get('db:database'));
}else{
mongoose.connect("mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.database);
}