
module.exports = {

    validate(username) {
        var letterNumber = /^[0-9a-zA-Z_]+$/;                       //only allows alphanumeric character and underscores
        if ((username.match(letterNumber)) || username.length > 15) //max username length is 15
          return true;
       else
          return false; 
    }
};