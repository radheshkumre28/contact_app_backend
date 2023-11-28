const mongosee = require('mongoose')

const userSchema = mongosee.Schema({
    username : {
        type : String,
        required : [true, "Please add the user name"]
    },
    email : {
        type : String,
        required : [true, "Please add the email"],
        unquie : [true, "Email address already taken"]
    },
    password : {
        type : String,
        required : [true, "Please add the password"]
    },
},{
    timestamps :true
})

module.exports = mongosee.model("User",userSchema);