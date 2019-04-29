const mongoose = require("mongoose");
const db = require("./db.js");

module.exports = {

    register: (object)=>{

        if(!object.req.body.password){
            object.res.status(400).send({message:"Password can't be blank"});
        }
        else if(!object.req.body.username){
            object.res.status(400).send({message:"Username cannot be blank"});
        }
        else{
            db.userModel.find({username:object.req.body.username},(err,resp)=>{
                if(err){
                    console.log(err);
                    object.res.status(500).send({message:"System error"});
                }
                else if(resp[0]){
                    object.res.status(400).send({message:"Error, username taken"});
                }else{
                    newUserDB = new db.userModel({
                        firstname:object.req.body.firstname, 
                        lastname:object.req.body.lastname, 
                        username:object.req.body.username, 
                        password:object.req.body.password,
                        interests:object.req.body.interests
                    });

                    newUserDB.save(function(){
                        object.res.send({message:"Success, new user created"});
                    }); 
                }
            })
        }
    }, 

    login:(object)=>{

        db.userModel.find({"username":object.req.body.username},(err,resp)=>{
            if(err){
                console.log(err);
                object.res.status(500).send({message:"System error"});
            }
            else if(!resp[0]){
                object.res.status(400).send({message:"Error, user not found"});
            }else{
                console.log(resp[0]);
                if(resp[0].password == object.req.body.password){
                    object.res.send({message:"Success, you are logged in!"});
                }else{
                    object.res.status(400).send({message:"Error, username and password do not match"});
                }
            }
        })
    }
}