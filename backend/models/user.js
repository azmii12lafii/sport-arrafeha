//import mongoose module
const mongoose= require("mongoose");
//import mongoose-unique-validator
const uniqueValidator=require("mongoose-unique-validator");
//create team scemha
const userSchema= mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{type:String,unique:true},
    pwd:String,
    tel:String,
    role:String,
    avatar:String




});
userSchema.plugin(uniqueValidator);
//affect model name to schema
const user=mongoose.model("User",userSchema);
//export team
module.exports=user;