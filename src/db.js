const mongoose = require('mongoose');
const config = require('./config.js');

const Schema = mongoose.schema; 
const userSchema = new Schema({
    Firstname: String, 
    Lastname: String, 
    Username: String, 
    Password: String, 
    Interests: [{type:String}]
});


module.exports = {
    userModel : mongoose.model("User",userSchema)
}; 

if(process.env.NODE_ENV == "PRODUCTION"){
    //mongoose.connect("mongodb://"+config.get("db:username")+":"+config.get("db:password")+"@"+config.get("db:host")+":"+config.get('db:port')+"/"+config.get('db:database'));
}else{
mongoose.connect("mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.database);
}

