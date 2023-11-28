const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body
    if ( !email || !username || !password){
        res.send(400)
        throw new Error("All fileds are mandatory!")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.send(400)
        throw new Error("User alredy registered!")
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password,10)
    console.log("hashedpassword : "+ hashedPassword)
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(`User created ${user}`)
    if(user){
        res.send(201).json({_id: user.id, email : user.email})
    }
    else{
        res.send(400)
        throw new Error("user datta is invalid")
    }
    res.status(200).json({message:"Register the user"})
});

const loginUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"login the user"})
});

const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Current user information"})
});

module.exports = {registerUser,loginUser,currentUser};