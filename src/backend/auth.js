const mongoose = require("mongoose");
const db = require("./db.js");

module.exports = {

    register: (object)=>{

        if(!object.req.body.password){
            object.res.status(400).send({message:"error",reason:"Password can't be blank"});
        }
        else if(!object.req.body.username){
            object.res.status(400).send({message:"error",reason:"Username cannot be blank"});
        }
        else{
            db.userModel.find({username:object.req.body.username},(err,resp)=>{
                if(err){
                    console.log(err);
                    object.res.status(500).send({message:"error"});
                }
                else if(resp[0]){
                    object.res.status(400).send({message:"error", reason:"username taken"});
                    alert('username taken')
                }else{
                    newUserDB = new db.userModel({
                        firstname:object.req.body.firstname, 
                        lastname:object.req.body.lastname, 
                        username:object.req.body.username, 
                        password:object.req.body.password,
                        interests:object.req.body.interests
                    });

                    newUserDB.save(function(){
                        object.res.send({message:"success"});
                    }); 
                }
            })
        }
    }, 

    login:(object)=>{

        db.userModel.find({"username":object.req.body.username},(err,resp)=>{
            if(err){
                console.log(err);
                object.res.status(500).send({message:"error"});
            }
            else if(!resp[0]){
                object.res.status(400).send({message:"error",reason:"user not found"});
            }else{
                console.log(resp[0]);
                if(resp[0].password == object.req.body.password){
                    object.res.send({message:"success"});
                    alert("success")
                }else{
                    object.res.status(400).send({message:"error", reason:"username and password do not match"});
                    alert("username and password do not match")
                }
            }
        })
    }
}