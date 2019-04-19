const express = require("express");
const db = require("../db.js"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("../config.js")
const auth = require("./auth.js");
const app = express();
const feeder = require("./rss-reader.js");
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
})

app.post("/login",(req,res)=>{
    const object = {
        req:req,
        res:res
    }
    auth.login(object);

})


app.listen(config.server.port);