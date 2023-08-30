//import mongoose module
const mongoose= require("mongoose");

//create match scemha
const playerSchema= mongoose.Schema({
    Name:String,
    Age:Number,
    position:String


});
//affect model name to schema
const player=mongoose.model("Player",playerSchema);
//export match
module.exports=player;