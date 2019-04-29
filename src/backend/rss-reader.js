const RssFeedEmitter = require('rss-feed-emitter');
const feeder = new RssFeedEmitter();
const db = require("./db.js");
const mongoose = require("mongoose");
const config = require("./config.js"); 
const feeds = require("./feeds.js").feeds; 

class articleFactory{
  constructor(item){
    this.Title = item.title;
    this.Summary =item.summary;
    this.Description = item.description;
    this.PubDate = new Date(item.date).toISOString();
    this.Author = item.author;
    this.Link = item.link;
    this.Publisher = item.meta.title; 
    this.Categories = item.categories;
  }
  
  returnArticle(){
    return{
        "Title":this.Title,
        "Summary":this.Summary,
        "Description":this.Description,
        "PubDate":this.PubDate,
        "Author":this.Author,
        "Link":this.Link,
        "Publisher":this.Publisher,
        "Categories":this.Categories
    }
  }
}
for(let x in feeds){
  feeder.add({url:feeds[1].url,refresh:5000});
}

//TODO: add more feeds

feeder.on('new-item', function(item) {
    console.log(item);
    //console.log("\n\n\n\n\n");
    
    const newArticle = new articleFactory(item); //instantiate factory
    const newArticleDB = new db.articleModel(newArticle.returnArticle()); //return object 
    console.log(newArticle.returnArticle());
    console.log("\n\n\n\n\n");
      /*newArticleDB.save(function(err){
        if(err){
          //console.log(err);
        }
      });*/
});  

if(process.env.NODE_ENV == "PRODUCTION"){
    //mongoose.connect("mongodb://"+config.get("db:username")+":"+config.get("db:password")+"@"+config.get("db:host")+":"+config.get('db:port')+"/"+config.get('db:database'));
}else{
mongoose.connect("mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.database);
}