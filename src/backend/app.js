const express = require("express");
const db = require("./db.js"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config.js")
const auth = require("./auth.js");
const app = express();
const feeder = require("./rss-reader.js");
const feeds = require("./feeds.js").feeds;
const cors = require("cors");

app.use(cors());
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
    if(!req.body.username || !req.body.password){
        return res.status(400).send({message:"error", reason:"username or pw not included with request"}); 
    }
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
    db.articleModel.find({"Publisher":req.params.publisher}, null, {sort: {PubDate: -1}}, (err,data)=>{
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
});

app.post("/save",(req,res)=>{
    const savedArt = {
        title:req.body.title,
        link:req.body.link,
        date:req.body.date
    }
    db.userModel.find({username:req.body.username, saved:{title:req.body.title,link:req.body.link,date:req.body.date}}, (err,resp)=>{
        if(err){
            console.log(err);
        }else{
            if(resp[0]){
                res.status(400).send({message:"error", reason:"User already upvoted this"}); 
            }else{
                db.userModel.findOneAndUpdate(
                    {username:req.body.username},
                    {$push:{saved:savedArt}}, 
                    (err,data)=>{
                        if (err){
                            res.status(400).send({message:"error"});
                        }else{
                            res.send({message:"success"}); 
                        }
                    }) 
            }
            
        }
    })
    
});

app.get("/saved",(req,res)=>{
    db.userModel.findOne({"username":req.query.username}, (err,resp)=>{
        if(resp){res.send(resp);}
        else{
            res.status(400).send({message:"error",reason:"user not found"});
        } 
    })
})

console.log("Backend running on port "+config.server.port); 
app.listen(config.server.port);