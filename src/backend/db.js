const mongoose = require('mongoose');
const config = require('./config.js');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema; 
const userSchema = new Schema({
    firstname: String, 
    lastname: String, 
    username: String, 
    password: String, 
    interests: [], 
    saved: []
});

const ArticleSchema = new Schema({
    Title:String,
    Summary:String,
    Content:String,
    Publisher:String,
    PubDate:Date,
    Author:String,
    Link:{type:String, unique:"True"},
    Src: String,
    Categories:Array
    });
    ArticleSchema.plugin(uniqueValidator);

module.exports = {
    userModel : mongoose.model("User",userSchema),
    articleModel: mongoose.model("Article",ArticleSchema)
}; 

if(process.env.NODE_ENV == "PRODUCTION"){
    //mongoose.connect("mongodb://"+config.get("db:username")+":"+config.get("db:password")+"@"+config.get("db:host")+":"+config.get('db:port')+"/"+config.get('db:database'));
}else{
mongoose.connect("mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.database);
}

