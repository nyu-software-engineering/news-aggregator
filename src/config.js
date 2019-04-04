
let prod = false; 

if(process.env.NODE_ENV == "PRODUCTION") prod = true;


module.exports = {
    server:{
        host:prod?'TBD':'localhost',
        port:prod?'TBD':'3000'
    }, 
    db:{
        host:prod?'TBD':'localhost',
        port:prod?'TBD':'27017',
        database:prod?'TBD':"news",
        password:prod?process.env.MONGO_PASSWORD:'',
        username:prod?process.env.MONGO_USER:''
    }
}