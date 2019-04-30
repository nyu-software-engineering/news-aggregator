const express = require("express");
const db = require("./db.js"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config.js")
const auth = require("./auth.js");
const app = express();
const feeder = require("./rss-reader.js");
const feeds = require("./feeds.js").feeds;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('src/frontEnd'));



app.get("/",(req,res)=>{
    //res.sendFile("../frontEnd/index.html");\
    res.render('index');
});

app.get("/login",(req,res)=>{
    //serve up the log in HTML form 
});

app.get("/register",(req,res)=>{
    //serve up the register HTML form
});


app.post("/register",(req,res)=>{
    const object = {
        req:req,
        res:res
    }
    auth.register(object);
});

app.post("/login",(req,res)=>{
    const object = {
        req:req,
        res:res
    }
    auth.login(object);

});


app.get("/news/publisher/:publisher", (req,res)=>{
    db.articleModel.find({"Publisher":req.params.publisher},(err,data)=>{
        if(data[0]){
            res.send(data);
        }else if(!data[0]){
            res.status(400).send("Publisher not found"); 
        }else if(err){
            res.status(500).send(err);
        }
    }); 
});

app.get("/news/article",(req,res)=>{
    db.articleModel.find({"Link":req.query.link},(err,data)=>{
        if(data[0]){
            res.send(data);
        }else if(!data[0]){
            res.status(400).send("Article not found"); 
        }else if(err){
            res.status(500).send(err);
        }
    }); 
}); 

app.get("/news/feedlist",(req,res)=>{
    res.send(feeds); 
})

app.listen(config.server.port);