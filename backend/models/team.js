//import mongoose module
const mongoose= require("mongoose");

//create team scemha
const teamSchema= mongoose.Schema({
    name:String,
    Stadium:String,
    Owner:String


});
//affect model name to schema
const team=mongoose.model("Team",teamSchema);
//export team
module.exports=team;